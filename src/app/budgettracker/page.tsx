import { useState } from "react";

const BudgetTracker = () => {
  const [budget, setBudget] = useState<number>(0);
  const [expense, setExpense] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");
  const [transactions, setTransactions] = useState<
    { expense: string; amount: number; category: string }[]
  >([]);
  const [recording, setRecording] = useState<boolean>(false);
  const [audioText, setAudioText] = useState<string>("");

  // AI-based Expense Categorization
  const categorizeExpense = (text: string): string => {
    if (/food|restaurant|groceries/i.test(text)) return "Food";
    if (/rent|electricity|water/i.test(text)) return "Housing";
    if (/uber|bus|petrol|fuel/i.test(text)) return "Transport";
    if (/movie|shopping|entertainment/i.test(text)) return "Entertainment";
    return "Other";
  };

  // Add Expense
  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expense || !amount) return;

    const category = categorizeExpense(expense);
    const newTransaction = { expense, amount: Number(amount), category };
    setTransactions([...transactions, newTransaction]);
    setExpense("");
    setAmount("");
  };

  // Speech Recognition (Voice Input)
  const startRecording = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setRecording(true);

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setAudioText(text);
      setExpense(text);
      setRecording(false);
    };

    recognition.onerror = () => setRecording(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center">💰 Budget & Expense Tracker</h2>

      {/* Budget Input */}
      <div className="mt-4">
        <label className="block font-semibold">Set Monthly Budget:</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Expense Form */}
      <form onSubmit={addExpense} className="mt-4">
        <label className="block font-semibold">Expense Name:</label>
        <input
          type="text"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <label className="block font-semibold mt-2">Amount (₹):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />

        <button type="submit" className="w-full mt-4 bg-blue-500 text-white p-2 rounded">
          Add Expense
        </button>
      </form>

      {/* Voice Recording */}
      <div className="mt-4">
        <button
          onClick={startRecording}
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          {recording ? "Recording..." : "🎙️ Record Expense"}
        </button>
        {audioText && <p className="mt-2 text-green-500">Detected: {audioText}</p>}
      </div>

      {/* Transactions List */}
      <h3 className="mt-6 text-lg font-bold">📊 Transactions</h3>
      <ul className="mt-2">
        {transactions.map((t, index) => (
          <li key={index} className="p-2 bg-white mt-2 rounded shadow">
            {t.expense} - ₹{t.amount} <span className="text-blue-500">({t.category})</span>
          </li>
        ))}
      </ul>

      {/* Remaining Budget */}
      <h3 className="mt-6 text-lg font-bold">
        🏦 Remaining Budget: ₹{budget - transactions.reduce((sum, t) => sum + t.amount, 0)}
      </h3>
    </div>
  );
};

export default BudgetTracker;

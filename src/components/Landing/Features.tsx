import React from "react";

type FeaturesProps = {
  BackgroundDots?: React.ReactNode;
};

const Features: React.FC<FeaturesProps> = ({ BackgroundDots }) => {
  return (
    <div className="relative bg-black min-h-screen text-white flex flex-col items-center p-8">
     
      <h2 className="text-4xl font-bold text-red-500 mb-8">Key Features</h2>
      <div className="grid grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="p-6 bg-black rounded-lg shadow-xl hover:shadow-red-500 transition transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-red-400">📊 Patient & AI Analysis Overview</h3>
          <p className="mt-2 text-gray-300">Quick overview of assigned patients, recent scans & diagnoses, and easy access to ongoing cases.</p>
        </div>
        <div className="p-6 bg-black rounded-lg shadow-xl hover:shadow-red-500 transition transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-red-400">🩻 Image Scanning & AI Diagnosis</h3>
          <p className="mt-2 text-gray-300">Upload MRI, CT, X-ray images. AI detects affected areas, provides diagnoses, and allows interactive analysis.</p>
        </div>
        <div className="p-6 bg-black rounded-lg shadow-xl hover:shadow-red-500 transition transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-red-400">📂 Patient Records Management</h3>
          <p className="mt-2 text-gray-300">Search by Patient ID/Name, view past scans & AI reports, schedule appointments, and update notes.</p>
        </div>
        <div className="p-6 bg-black rounded-lg shadow-xl hover:shadow-red-500 transition transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-red-400">🔬 AI Image Analysis & Workflow</h3>
          <p className="mt-2 text-gray-300">Upload & analyze scans, AI suggests conditions with confidence levels, and doctors can review & prescribe meds.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

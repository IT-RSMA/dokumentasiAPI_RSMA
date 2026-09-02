import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copyText, setCopyText] = useState("Copy to Clipboard");
  const navigate = useNavigate();

  // String token acak untuk simulasi visual
  const token =
    "kingwiratama-1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-0987654321";

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy to Clipboard"), 2000);
  };

  return (
     <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      {/* 1. Top Navigation Bar (Full Width) */}
      <header className="bg-white border-b border-slate-200 h-[72px] flex items-center px-6 sticky top-0 z-50">
        {/* Kiri: Logo */}
        <div className="flex-1 flex items-center h-full">
          <div className="text-[#1E3A8A] font-bold text-[18px]">
            SIMRS API Gateway
          </div>
        </div>

        {/* Tengah: Navigasi */}
        <nav className="hidden md:flex flex-none items-center h-full gap-8">
          <a navigate ="/dashboard" className="h-full flex items-center border-b-[3px] border-[#1E3A8A] text-slate-600 hover:text-teal-600 font-medium text-[15px] px-1 transition-colors"
          >
            Dashboard
          </a>
          <a navigate ="/playground" className="h-full flex items-center text-[#1E3A8A] font-semibold text-[15px] px-1"
          > Playground
          </a>
          <a navigate ="/documentation"  className="h-full flex items-center text-slate-600 hover:text-teal-600 font-medium text-[15px] px-1 transition-colors"
          >
            Documentation
          </a>
        </nav>

         <div className="flex-1 flex items-center justify-end gap-5">
          <button className="bg-[#1E3A8A] hover:bg-blue-900 text-white rounded-lg px-5 py-2 text-[14px] font-semibold transition-colors shadow-sm">
            Generate Token
          </button>
          <img
            alt="User Profile"
            src="https://ui-avatars.com/api/?name=Admin+SIMRS&background=E2E8F0&color=1E3A8A"
            className="w-9 h-9 rounded-full border border-slate-200 ml-1 object-cover"
          />
        </div>
      </header>

      {/* 2. Konten Utama Dashboard */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-8 pt-10 pb-12">
        {/* Header Halaman */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-slate-900 mb-2 tracking-tight">
            API Dashboard
          </h1>
          <p className="text-[15px] text-slate-600">
            Manage your credentials and monitor API usage across environments.
          </p>
        </div>

        {/* Grid Layout Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card Kiri: Production Environment Key */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#14B8A6]">
                  Production Environment Key
                </span>
              </h2>
              <span className="bg-[#E6F9F7] text-[#006F66] border border-[#B2DFDB] text-[12px] font-bold px-3 py-1 rounded-full tracking-wide">
                Active
              </span>
            </div>

            {/* Box Token dengan Efek Blur */}
            <div
              className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 mb-6 relative cursor-pointer"
              onClick={() => setIsRevealed(!isRevealed)}
            >
              <div className="text-[13px] font-bold text-slate-800 mb-2">
                Bearer Token
              </div>
              <div
                className={`font-mono text-sm text-slate-600 break-all transition-all duration-300 leading-relaxed ${!isRevealed ? "blur-[5px] select-none" : "blur-none"}`}
              >
                {token}
              </div>
            </div>

            {/* Deretan Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-[#1E3A8A] hover:bg-blue-900 text-white py-2.5 px-4 rounded-lg text-[15px] font-semibold flex justify-center items-center gap-2 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  Regenerate Token
                </span>
              </button>
              <button
                onClick={handleCopy}
                className="flex-1 bg-white hover:bg-[#F0FDFB] border border-[#14B8A6] text-[#0D9488] py-2.5 px-4 rounded-lg text-[15px] font-semibold flex justify-center items-center gap-2 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {copyText === "Copied!" ? "check" : ""}
                </span>
                {copyText}
              </button>
              <button className="flex-1 bg-white hover:bg-slate-50 border border-slate-400 text-slate-700 py-2.5 px-4 rounded-lg text-[15px] font-semibold flex justify-center items-center gap-2 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  Use in Playground
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

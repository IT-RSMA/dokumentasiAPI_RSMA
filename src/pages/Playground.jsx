import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Playground() {
  const [method, setMethod] = useState("GET");

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
          <a
            href="/dashboard"
            className="h-full flex items-center text-slate-600 hover:text-teal-600 font-medium text-[15px] px-1 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/playground"
            className="h-full flex items-center border-b-[3px] border-[#1E3A8A] text-[#1E3A8A] font-semibold text-[15px] px-1"
          >
            Playground
          </a>
          <a
            href="/documentation"
            className="h-full flex items-center text-slate-600 hover:text-teal-600 font-medium text-[15px] px-1 transition-colors"
          >
            Documentation
          </a>
        </nav>

        {/* Kanan: Aksi & Profil */}
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

      {/* 2. Container Bawah (Sidebar + Main Content) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Endpoints */}
        <aside className="w-[260px] bg-white border-r border-slate-200 flex flex-col z-10 flex-shrink-0">
          <div className="p-6 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-1 bg-[#1E3A8A] rounded-full"></div>
              <h2 className="text-[20px] font-bold text-[#1E3A8A] tracking-tight">
                Endpoints
              </h2>
            </div>
            <p className="text-[13px] text-slate-500 ml-3 mb-6">
              v1.4.2-stable
            </p>

            <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg text-[14px] font-semibold flex items-center justify-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">New Request</span>
              
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto flex flex-col gap-1 pr-4 py-2">
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-2.5 text-slate-600 hover:bg-slate-50 rounded-r-full transition-colors"
            >
              <span className="text-[14px] font-medium">IGD Service</span>
            </a>

            {/* Active Item */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-2.5 bg-[#89F5E7] text-[#005049] border-l-4 border-[#006F66] rounded-r-lg transition-colors shadow-sm"
            >
              <span className="text-[14px] font-bold">Ralan Service</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-6 py-2.5 text-slate-600 hover:bg-slate-50 rounded-r-full transition-colors mt-1"
            >
              <span className="text-[14px] font-medium">Ranap Service</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-6 py-2.5 text-slate-600 hover:bg-slate-50 rounded-r-full transition-colors"
            >
              <span className="text-[14px] font-medium">Farmasi</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-6 py-2.5 text-slate-600 hover:bg-slate-50 rounded-r-full transition-colors"
            >
              <span className="text-[14px] font-medium">Laboratorium</span>
            </a>
          </nav>

          <div className="p-4 border-t border-slate-100">
            <a
              href="#"
              className="flex items-center gap-3 px-2 py-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                settings
              </span>
              <span className="text-[14px] font-medium">Settings</span>
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-[#F8FAFC] p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Request Configuration Card */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-[16px] text-slate-900">
                    Request Configuration
                  </h2>
                </div>
                <span className="text-[#0D9488] bg-[#F0FDFB] border border-[#CCFBF1] text-[12px] font-bold px-3 py-1 rounded-full">
                  GET
                </span>
              </div>

              <div className="p-6 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Bearer Token */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-slate-800">
                      Bearer Token
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        defaultValue="thisisafaketokenforsimulation"
                        className="w-full pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-slate-200 rounded-lg text-slate-700 text-sm focus:outline-none focus:border-teal-500 font-mono tracking-widest"
                      />
                    </div>
                  </div>

                  {/* Date Range Filter */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-slate-800">
                      Date Range Filter
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="mm/dd/yyyy"
                          className="w-full px-3 py-2.5 bg-[#F8FAFC] border border-slate-200 rounded-lg text-slate-600 text-sm focus:outline-none focus:border-teal-500"
                        />
                      </div>
                      <span className="text-slate-400">-</span>
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="mm/dd/yyyy"
                          className="w-full px-3 py-2.5 bg-[#F8FAFC] border border-slate-200 rounded-lg text-slate-600 text-sm focus:outline-none focus:border-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Request URL */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-slate-800">
                    Request URL
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      defaultValue="https://api.simrs.hospital.id/v1/ralan/kunjungan?start_date=2023-10-01&end_date=2023-10-31"
                      className="flex-1 bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-2.5 text-slate-700 font-mono text-[13px] focus:outline-none focus:border-teal-500"
                    />
                    <button className="bg-[#1E3A8A] hover:bg-blue-900 text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold flex items-center justify-center gap-2 transition-colors min-w-[120px] shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">
                        Send
                      </span>
                    </button>
                    <button className="bg-[#F0FDFB] border border-[#14B8A6] text-[#0D9488] hover:bg-[#CCFBF1] px-4 py-2.5 rounded-lg flex items-center justify-center transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        Copy
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Card */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
              <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[16px] text-slate-900">
                    Response
                  </h2>
                  <div className="flex items-center gap-1.5 bg-[#DCFCE7] border border-[#BBF7D0] px-2 py-0.5 rounded-full ml-2">
                    <div className="w-1.5 h-1.5 bg-[#16A34A] rounded-full"></div>
                    <span className="text-[#15803D] text-[11px] font-bold leading-none">
                      200
                      <br />
                      OK
                    </span>
                  </div>
                  <span className="text-[12px] text-slate-500 font-medium ml-2 border-l border-slate-200 pl-4">
                    142ms • 1.2KB
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <button className="text-[#0D9488] hover:text-teal-700 font-semibold text-[13px] flex items-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[16px]">
                      Copy
                    </span>
                  </button>
                </div>
              </div>

              {/* Light Theme JSON Code Block */}
              <div className="bg-[#FAFAFA] p-5 overflow-x-auto border-t border-slate-100">
                <pre className="font-mono text-[13px] leading-relaxed text-slate-800">
                  <code>
                    {`{
  `}
                    <span className="text-[#BE185D]">"status"</span>
                    {`: `}
                    <span className="text-[#059669]">"success"</span>
                    {`,
  `}
                    <span className="text-[#BE185D]">"code"</span>
                    {`: `}
                    <span className="text-[#D97706]">200</span>
                    {`,
  `}
                    <span className="text-[#BE185D]">"message"</span>
                    {`: `}
                    <span className="text-[#059669]">
                      "Data kunjungan rawat jalan berhasil diambil"
                    </span>
                    {`,
  `}
                    <span className="text-[#BE185D]">"data"</span>
                    {`: {
    `}
                    <span className="text-[#BE185D]">"total_records"</span>
                    {`: `}
                    <span className="text-[#D97706]">45</span>
                    {`,
    `}
                    <span className="text-[#BE185D]">"records"</span>
                    {`: [
      {
        `}
                    <span className="text-[#BE185D]">"no_rawat"</span>
                    {`: `}
                    <span className="text-[#059669]">"2023/10/01/0001"</span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"no_rkm_medis"</span>
                    {`: `}
                    <span className="text-[#059669]">"102938"</span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"nama_pasien"</span>
                    {`: `}
                    <span className="text-[#059669]">"Budi Santoso"</span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"poliklinik"</span>
                    {`: `}
                    <span className="text-[#059669]">"Penyakit Dalam"</span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"dokter"</span>
                    {`: `}
                    <span className="text-[#059669]">
                      "dr. Andi Hermawan, Sp.PD"
                    </span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"status_periksa"</span>
                    {`: `}
                    <span className="text-[#059669]">"Sudah Periksa"</span>
                    {`
      },
      {
        `}
                    <span className="text-[#BE185D]">"no_rawat"</span>
                    {`: `}
                    <span className="text-[#059669]">"2023/10/01/0002"</span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"no_rkm_medis"</span>
                    {`: `}
                    <span className="text-[#059669]">"554321"</span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"nama_pasien"</span>
                    {`: `}
                    <span className="text-[#059669]">"Siti Aminah"</span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"poliklinik"</span>
                    {`: `}
                    <span className="text-[#059669]">"Anak"</span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"dokter"</span>
                    {`: `}
                    <span className="text-[#059669]">
                      "dr. Ratna Sari, Sp.A"
                    </span>
                    {`,
        `}
                    <span className="text-[#BE185D]">"status_periksa"</span>
                    {`: `}
                    <span className="text-[#059669]">"Belum Periksa"</span>
                    {`
      }
    ]
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

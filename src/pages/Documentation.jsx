import React, { useState } from 'react';

const CodeBlock = ({ code, language = 'json' }) => (
  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6 shadow-inner">
    <pre className={language === 'json' ? 'text-blue-300' : 'text-green-400'}>
      {code}
    </pre>
  </div>
);

const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
    <table className="w-full text-sm text-left text-gray-600">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
        <tr>
          {headers.map((header, idx) => (
            <th key={idx} className="px-6 py-3 font-semibold">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className="bg-white border-b hover:bg-gray-50">
            {row.map((cell, cellIdx) => (
              <td key={cellIdx} className="px-6 py-4">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);



export default function App() {
  const [activeMenu, setActiveMenu] = useState('umum');

  // --- FUNGSI NAVIGASI ---
  const scrollToSection = (id) => {
    setActiveMenu(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'umum', icon: 'ℹ️', label: 'Informasi Umum' },
    { id: 'auth', icon: '🔐', label: 'Autentikasi' },
    { id: 'postman', icon: '🚀', label: 'Panduan Postman' },
    { id: 'tanggal', icon: '📅', label: 'Sistem Periode' },
    { id: 'respons', icon: '📦', label: 'Format Respons' },
    { id: 'ralan', icon: '🏥', label: 'Rawat Jalan (Ralan)' },
    { id: 'ranap', icon: '🛏️', label: 'Rawat Inap (Ranap)' },
    { id: 'igd', icon: '🚨', label: 'Kunjungan IGD' },
    { id: 'penyakit', icon: '🦠', label: 'Data Penyakit' },
  ];

  return (
    
    <div className="bg-white flex h-screen overflow-hidden font-sans text-gray-800">

      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col h-full z-10 shrink-0">
        <div className="p-6 pb-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-700 flex items-center gap-2">
            <span className="text-2xl">📋</span> API SIMRS
          </h1>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            Dokumentasi integrasi data kunjungan dan penyakit Sistem Informasi Manajemen Rumah Sakit.
          </p>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
          <div className="text-xs font-bold text-gray-400 mb-3 tracking-wider uppercase px-2 mt-2">Daftar Isi</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeMenu === item.id 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
        <div className="max-w-4xl mx-auto p-10 pb-32">
          
          <div className="mb-12 border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Dokumentasi API SIMRS</h1>
            <p className="text-lg text-gray-600">
              API ini menyediakan data kunjungan dan penyakit dari Sistem Informasi Manajemen Rumah Sakit (SIMRS) untuk kebutuhan integrasi data dengan instansi terkait.
            </p>
          </div>

          {/* 1. INFORMASI UMUM */}
          <section id="umum" className="mb-16 scroll-mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              ℹ️ 1. Informasi Umum
            </h2>
            <Table 
              headers={['Keterangan', 'Detail']}
              rows={[
                [<strong className="text-gray-900">Base URL</strong>, <code className="bg-gray-100 text-pink-600 px-2 py-1 rounded">http://[IP_PUBLIK_RS]/api</code>],
                [<strong className="text-gray-900">Format Data</strong>, 'JSON'],
                [<strong className="text-gray-900">Metode Autentikasi</strong>, 'Bearer Token (Static API Key) + IP Whitelisting']
              ]}
            />
          </section>

          {/* 2. AUTENTIKASI */}
          <section id="auth" className="mb-16 scroll-mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🔐 2. Autentikasi (Keamanan)
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Seluruh proses penarikan data dari API SIMRS wajib menyertakan <strong>API Key yang valid</strong>. API Key akan diberikan secara terpisah oleh <strong>Tim IT Rumah Sakit</strong> melalui jalur komunikasi yang aman.
            </p>
            
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Cara Penggunaan API Key</h3>
            <p className="text-gray-600 mb-3 text-sm">Sertakan API Key pada <strong>HTTP Header</strong> di setiap request dengan format berikut:</p>
            <Table 
              headers={['Header', 'Nilai']}
              rows={[
                [<code className="text-pink-600 bg-gray-100 px-2 py-1 rounded">Authorization</code>, <span><code className="text-blue-600 bg-blue-50 px-2 py-1 rounded">Bearer [TOKEN_YANG_DIBERIKAN]</code></span>]
              ]}
            />
            
            <p className="text-sm font-semibold mb-2">Contoh header request:</p>
            <CodeBlock language="http" code={`GET /api/kunjungan-ralan HTTP/1.1\nHost: [IP_SERVER_RS]\nAuthorization: Bearer eyJhbGci...(token_anda)`} />

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mb-6">
              <h4 className="text-yellow-800 font-bold mb-2 flex items-center gap-2">⚠️ Catatan Penting: IP Whitelisting</h4>
              <p className="text-yellow-700 text-sm leading-relaxed mb-3">
                Server kami menerapkan sistem <strong>IP Whitelisting</strong>. API Key Anda <strong>hanya dapat digunakan dari alamat IP server instansi Anda</strong> yang telah didaftarkan sebelumnya ke sistem kami.
              </p>
              <p className="text-yellow-700 text-sm leading-relaxed">
                <strong>Langkah pendaftaran IP:</strong> Hubungi Tim IT Rumah Sakit dan sampaikan alamat IP publik server instansi Anda untuk didaftarkan ke sistem whitelist.
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Kode Respons Autentikasi</h3>
            <Table 
              headers={['Kode', 'Kondisi', 'Pesan']}
              rows={[
                [<span className="text-red-500 font-bold">401</span>, 'Token tidak disertakan', <code className="text-xs">Unauthorized. Token not provided.</code>],
                [<span className="text-red-500 font-bold">401</span>, 'Token tidak valid / tidak aktif', <code className="text-xs">Unauthorized. Invalid or inactive token.</code>],
                [<span className="text-red-500 font-bold">403</span>, 'IP tidak terdaftar di whitelist', <code className="text-xs">Forbidden. IP address not allowed.</code>]
              ]}
            />
          </section>

          {/* 3. POSTMAN */}
          <section id="postman" className="mb-16 scroll-mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🚀 3. Cara Penggunaan Cepat (Postman)
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Untuk mempermudah proses integrasi dan testing, kami menyediakan <strong>Postman Collection</strong> siap pakai.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600 mb-6">
              <li>Download dan install aplikasi <a href="https://www.postman.com/downloads/" className="text-blue-600 hover:underline font-medium">Postman</a> jika belum ada.</li>
              <li>Buka Postman, klik tombol <strong>Import</strong> (pojok kiri atas).</li>
              <li>Pilih file <strong><code>API RS Manambai Abdul Kadir.postman_collection.json</code></strong>.</li>
              <li>Daftar semua endpoint akan muncul di panel kiri.</li>
              <li>Pilih salah satu request, misal: <code className="bg-gray-100 text-pink-600 px-1 rounded">GET /kunjungan-ralan</code>.</li>
              <li>Buka tab <strong>Authorization</strong> → pilih tipe <strong>Bearer Token</strong>.</li>
              <li>Masukkan token rahasia yang telah diberikan ke kolom <strong>Token</strong>.</li>
              <li>Klik <strong>Send</strong> untuk melihat data.</li>
            </ol>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm flex gap-3">
              <span className="text-lg">💡</span>
              <p><strong>Tips:</strong> Gunakan fitur <strong>Environment</strong> di Postman untuk menyimpan token dan base URL, sehingga tidak perlu mengisi ulang di setiap request.</p>
            </div>
          </section>

          {/* 4. PERIODE TANGGAL */}
          <section id="tanggal" className="mb-16 scroll-mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              📅 4. Sistem Periode Tanggal
            </h2>
            <p className="text-gray-600 mb-6">Semua endpoint mendukung <strong>3 cara penggunaan</strong> yang konsisten:</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-blue-700 mb-2">1. Periode Default Otomatis</h3>
                <p className="text-gray-600 text-sm mb-3">Tidak perlu mengirim parameter apapun. Sistem akan otomatis menentukan periode dari <strong>tanggal 5 bulan ini</strong> hingga <strong>tanggal 4 bulan depan</strong>.</p>
                <CodeBlock language="http" code="GET /api/kunjungan-ralan" />
                <div className="bg-gray-50 border-l-4 border-gray-300 p-4 text-sm text-gray-600">
                  <strong>Logika periode default:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Jika hari ini ≥ tanggal 5 → periode dimulai tanggal 5 bulan berjalan</li>
                    <li>Jika hari ini &lt; tanggal 5 → periode dimulai tanggal 5 bulan sebelumnya</li>
                    <li>Periode berakhir tepat 1 bulan setelah tanggal awal (dikurangi 1 hari)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-700 mb-2">2. Periode Custom</h3>
                <p className="text-gray-600 text-sm mb-3">Kirim parameter <code>tanggal_awal</code> dan/atau <code>tanggal_akhir</code> untuk menentukan periode sendiri.</p>
                <CodeBlock language="http" code="GET /api/kunjungan-ralan?tanggal_awal=2026-01-01&tanggal_akhir=2026-01-31" />
                <Table 
                  headers={['Parameter', 'Tipe', 'Wajib', 'Deskripsi']}
                  rows={[
                    [<code className="text-pink-600">tanggal_awal</code>, 'string', 'Tidak', 'Tanggal mulai. Format: YYYY-MM-DD'],
                    [<code className="text-pink-600">tanggal_akhir</code>, 'string', 'Tidak', 'Tanggal selesai. Format: YYYY-MM-DD. Harus ≥ tanggal_awal']
                  ]}
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-700 mb-2">3. Validasi Format Tanggal (Error 422)</h3>
                <p className="text-gray-600 text-sm mb-3">Jika format tanggal yang dikirim <strong>tidak sesuai</strong>, API akan mengembalikan error <code>422 Unprocessable Entity</code>.</p>
                <CodeBlock language="json" code={`{
  "message": "Format tanggal_awal harus YYYY-MM-DD, contoh: 2026-08-05",
  "errors": {
    "tanggal_awal": [
      "Format tanggal_awal harus YYYY-MM-DD, contoh: 2026-08-05"
    ]
  }
}`} />
              </div>
            </div>
          </section>

          {/* 5. FORMAT RESPONS */}
          <section id="respons" className="mb-16 scroll-mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              📦 5. Format Respons
            </h2>
            
            <h3 className="text-md font-bold text-green-600 mb-2">✅ Sukses</h3>
            <CodeBlock code={`{
  "success": true,
  "instansi": {
    "nama_instansi": "RSUD Contoh",
    "kode_ppk_kemenkes": "1234567"
  },
  "data": {
    "tanggal_awal": "2026-08-05",
    "tanggal_akhir": "2026-09-04",
    "..."
  }
}`} />

            <h3 className="text-md font-bold text-red-500 mb-2 mt-6">❌ Error Server (500)</h3>
            <CodeBlock code={`{
  "success": false,
  "instansi": {
    "nama_instansi": "RSUD Contoh",
    "kode_ppk_kemenkes": "1234567"
  },
  "message": "Terjadi kesalahan pada server"
}`} />
          </section>

          {/* 6. RALAN */}
          <section id="ralan" className="mb-16 scroll-mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🏥 Endpoint: Kunjungan Rawat Jalan (Ralan)
            </h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">GET</span>
                <code>/api/kunjungan-ralan</code>
              </h3>
              <p className="text-gray-600 text-sm mb-3">Jumlah total kunjungan rawat jalan dalam satu periode.</p>
              <CodeBlock language="http" code={`GET /api/kunjungan-ralan\nGET /api/kunjungan-ralan?tanggal_awal=2026-01-01&tanggal_akhir=2026-01-31`} />
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">GET</span>
                <code>/api/kunjungan-ralan/per-pj</code>
              </h3>
              <p className="text-gray-600 text-sm mb-3">Jumlah kunjungan rawat jalan dikelompokkan per <strong>jenis pembayaran</strong> (BPJS, Umum, dll), diurutkan dari terbanyak.</p>
              <CodeBlock code={`{
  "success": true,
  "data": {
    "per_jenis_pembayaran": [
      { "kd_pj": "BPJ", "jenis_pembayaran": "BPJS", "jumlah_kunjungan": 2500 },
      { "kd_pj": "UMM", "jenis_pembayaran": "Umum", "jumlah_kunjungan": 740 }
    ]
  }
}`} />
            </div>
          </section>

          {/* 7. RANAP */}
          <section id="ranap" className="mb-16 scroll-mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🛏️ Endpoint: Kunjungan Rawat Inap (Ranap)
            </h2>
            <div className="bg-gray-50 border-l-4 border-gray-300 p-4 text-sm text-gray-600 mb-6">
              Data dihitung berdasarkan pasien <strong>unik</strong> (distinct <code>no_rawat</code>), mengecualikan status <code>Batal</code> dan rekam perpindahan kamar (<code>Pindah Kamar</code>).
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">GET</span>
                <code>/api/kunjungan-ranap</code>
              </h3>
              <CodeBlock language="http" code={`GET /api/kunjungan-ranap?tanggal_awal=2026-01-01&tanggal_akhir=2026-01-31`} />
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">GET</span>
                <code>/api/kunjungan-ranap/per-pj</code>
              </h3>
              <p className="text-gray-600 text-sm mb-3">Jumlah kunjungan rawat inap dikelompokkan per jenis pembayaran.</p>
            </div>
          </section>

          {/* 8. IGD */}
          <section id="igd" className="mb-16 scroll-mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🚨 Endpoint: Kunjungan IGD
            </h2>
            <div className="bg-gray-50 border-l-4 border-gray-300 p-4 text-sm text-gray-600 mb-6">
              Data dihitung berdasarkan pasien <strong>unik</strong> yang terdaftar di poliklinik IGD (<code>kd_poli = 'IGDK'</code>).
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">GET</span>
                <code>/api/kunjungan-igd</code>
              </h3>
              <CodeBlock code={`{
  "data": {
    "jumlah_kunjungan_igd": 187
  }
}`} />
            </div>
          </section>

          {/* 9. PENYAKIT */}
          <section id="penyakit" className="mb-16 scroll-mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🦠 Endpoint: Data Penyakit
            </h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">GET</span>
                <code>/api/penyakit-ralan/top10-ralan</code>
              </h3>
              <p className="text-gray-600 text-sm mb-3">Top 10 penyakit terbanyak pada pasien <strong>rawat jalan</strong>, berdasarkan diagnosa <strong>primer</strong>.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">GET</span>
                <code>/api/penyakit/kanker</code>
              </h3>
              <p className="text-gray-600 text-sm mb-3">Jumlah kasus <strong>Kanker (Neoplasma Ganas)</strong> — gabungan Ralan + Ranap (ICD-10: C00–C97).</p>
              <CodeBlock code={`{
  "data": {
    "label": "Kanker (Neoplasma Ganas)",
    "total_kasus": 87,
    "per_jenis": [
      { "kd_penyakit": "C34.9", "nama": "Kanker Paru", "jumlah_kasus": 22 },
      { "kd_penyakit": "C50.9", "nama": "Kanker Payudara", "jumlah_kasus": 18 }
    ]
  }
}`} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="border border-gray-200 p-4 rounded-lg bg-gray-50">
                <code className="text-pink-600 block mb-2 text-sm font-bold">/api/penyakit/jantung</code>
                <p className="text-sm text-gray-600">Kasus Jantung & Pembuluh Darah (I20–I52)</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg bg-gray-50">
                <code className="text-pink-600 block mb-2 text-sm font-bold">/api/penyakit/stroke</code>
                <p className="text-sm text-gray-600">Kasus Stroke / Serebrovaskular (I60–I69)</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg bg-gray-50">
                <code className="text-pink-600 block mb-2 text-sm font-bold">/api/penyakit/uronefro</code>
                <p className="text-sm text-gray-600">Kasus Ginjal & Saluran Kemih (N00-N39, Q60-Q64)</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
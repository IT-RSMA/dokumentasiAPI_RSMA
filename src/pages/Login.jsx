import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logika autentikasi API bisa ditambahkan di sini
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-lg border border-outline-variant p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-on-surface mb-2">
            SIMRS API Gateway
          </h1>
          <p className="text-sm text-on-surface-variant">
            Sign in to manage endpoints
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">
              Username / NIP
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface"
              placeholder="Enter your credentials"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[10px]">
                  {showPassword ? "sembunyikan" : "liat"}
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-medical-blue-dark text-on-primary font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined">Log In</span>
            
          </button>
        </form>
      </div>
    </div>
  );
}

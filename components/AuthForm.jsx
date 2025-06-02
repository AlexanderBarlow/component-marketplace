"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function AuthForm({ type }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const handleSubmit = async (e) => {
   e.preventDefault();
   setError("");

   if (!email.trim() || !password.trim()) {
     setError("Please fill out both fields.");
     return;
   }

   try {
     const endpoint = type === "login" ? "/api/user/login" : "/api/user/create";

     const res = await fetch(endpoint, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ email, password }),
     });

     const data = await res.json();

     if (!res.ok) {
       setError(data.error || "Something went wrong.");
       return;
     }

     router.push(`/profile/${data.userId}`);
   } catch (err) {
     setError("Server error.");
   }
 };



  const handleRedirect = () => {
    router.push(type === "login" ? "/signup" : "/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/back.png"
        alt="Background"
        fill
        className="absolute inset-0 object-cover object-center z-0"
        quality={100}
        priority
      />

      {/* Glowing Blur Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0D0D0Daa] via-[#111827cc] to-[#0B0C1Ecc] backdrop-blur-md" />

      {/* Auth Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-20 w-full max-w-md bg-white/5 backdrop-blur-2xl rounded-3xl shadow-[0_0_25px_#00FFD1] border border-white/10 px-8 py-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 text-center mb-6 text-glow">
          {type === "login" ? "Welcome Back" : "Join the Marketplace"}
        </h2>

        {error && (
          <p className="text-yellow-300 text-center mb-4 font-semibold animate-pulse text-glow">
            {error}
          </p>
        )}

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-pink-400 text-glow-pink">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-sm font-medium text-pink-400 text-glow-pink">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-neon-gradient hover:brightness-110 text-black font-bold py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
        >
          {type === "login" ? "Login" : "Create Account"}
        </button>

        <button
          type="button"
          onClick={handleRedirect}
          className="w-full mt-5 text-sm text-white/70 hover:text-white/90 transition duration-200"
        >
          {type === "login"
            ? "No account? Sign up here →"
            : "Already have an account? Log in →"}
        </button>
      </form>
    </div>
  );
}

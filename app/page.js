"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground font-sans flex items-center justify-center overflow-hidden px-4">
      {/* Background Image */}
      <Image
        src="/back.png"
        alt="Background"
        fill
        priority
        quality={100}
        className="absolute inset-0 z-0 object-cover object-center scale-105 brightness-[0.9] saturate-[1.2]"
      />

      {/* Animated Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1f1f3a50] to-[#0b0c1e80] z-0 pointer-events-none" />

      {/* Frosted Glass Panel */}
      <div className="relative z-10 max-w-xl w-full backdrop-blur-2xl bg-white/5 rounded-3xl px-8 py-12 shadow-[0_0_40px_rgba(0,255,255,0.15)] text-center border border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-xl tracking-tight text-glow">
          Component Marketplace
        </h1>
        <p className="text-lg text-violet-200 mb-10 drop-shadow-sm text-glow">
          Build faster. Sell smarter.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.push("/login")}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-blue-400/30"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="bg-transparent border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-pink-400/30"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

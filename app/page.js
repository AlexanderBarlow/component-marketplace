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
        quality={100}
        priority
        className="absolute inset-0 z-0 object-cover object-center"
      />

      {/* Frosted Glass Panel */}
      <div className="relative z-10 max-w-xl w-full backdrop-blur-md bg-black/40 rounded-3xl px-8 py-12 shadow-[0_8px_30px_rgba(0,0,0,0.4)] text-center border border-white/10">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
          Component Marketplace
        </h1>
        <p className="text-lg text-violet-200 mb-10">
          Build faster. Sell smarter.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.push("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

export default function UserDashboard() {
  const { id } = useParams();

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground font-sans overflow-hidden px-4 pb-20">
      {/* Background Image */}
      <Image
        src="/back.png"
        alt="Background"
        fill
        quality={100}
        priority
        className="absolute inset-0 z-0 object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/40 via-[#0B0C1Eaa] to-black/60 backdrop-blur-md" />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24 space-y-16">
        {/* Profile Card */}
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
          <div className="w-24 h-24 bg-yellow-300 text-black rounded-full flex items-center justify-center text-3xl font-bold shadow-inner shadow-yellow-500/30">
            AB
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-yellow-400 text-glow">
              Alex Barlow
            </h2>
            <p className="text-white/60 text-sm text-glow-blue">
              alex@example.com
            </p>
            <p className="text-sm mt-1 text-white/50">
              Tier: <span className="text-blue-400 text-glow-blue">Free</span>
            </p>
          </div>
        </div>

        {/* Components For Sale */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-400 mb-4 text-glow-pink">
            Your Components
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="min-w-[250px] h-40 bg-black/30 border border-white/10 rounded-xl flex items-center justify-center text-white/50 shadow-inner"
              >
                Placeholder Component {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Purchased Components */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4 text-glow-blue">
            Purchased Components
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="min-w-[250px] h-40 bg-black/30 border border-white/10 rounded-xl flex items-center justify-center text-white/50 shadow-inner"
              >
                Purchased Component {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

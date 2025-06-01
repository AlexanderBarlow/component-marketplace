"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuth(); // Get hardcoded user

  const navItems = [
    { name: "Profile", path: `/profile/${user?.id}` },
    { name: "Marketplace", path: "/marketplace" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl backdrop-blur-md bg-black/40 text-white rounded-full border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] px-6 py-3 flex items-center justify-between">
      <div className="text-xl font-bold text-yellow-400 drop-shadow-glow">
        CM<span className="text-pink-400">.</span>
      </div>
      <div className="flex items-center gap-4 sm:gap-8">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => router.push(item.path)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-sm ${
              pathname === item.path
                ? "bg-neon-gradient text-black shadow-md"
                : "text-white hover:text-pink-400"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}

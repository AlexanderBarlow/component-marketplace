"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [tech, setTech] = useState("all");

  const techOptions = [
    "all",
    "react",
    "react native",
    "flutter",
    "mui",
    "tailwind",
    "html+css+js",
  ];

  const techColors = {
    react: "bg-[#0ff]/20 text-[#0ff] shadow-[0_0_10px_#0ff]",
    "react native": "bg-[#00e0ff]/20 text-[#00e0ff] shadow-[0_0_10px_#00e0ff]",
    flutter: "bg-[#338dff]/20 text-[#338dff] shadow-[0_0_10px_#338dff]",
    mui: "bg-[#9c6bff]/20 text-[#9c6bff] shadow-[0_0_10px_#9c6bff]",
    tailwind: "bg-[#06b6d4]/20 text-[#06b6d4] shadow-[0_0_10px_#06b6d4]",
    "html+css+js": "bg-[#f97316]/20 text-[#f97316] shadow-[0_0_10px_#f97316]",
  };

  const components = [...Array(6)].map((_, i) => {
    const techCombos = [
      ["react"],
      ["react native", "tailwind"],
      ["mui"],
      ["html+css+js"],
      ["flutter", "tailwind"],
      ["react", "mui"],
    ];
    return {
      id: i,
      name: `Placeholder Component ${i + 1}`,
      description: "A short description of what this component does.",
      price: "$12.99",
      technologies: techCombos[i % techCombos.length],
    };
  });

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground font-sans overflow-hidden px-6 py-20">
      <Image
        src="/back.png"
        alt="Background"
        fill
        quality={100}
        priority
        className="absolute inset-0 z-0 object-cover object-center scale-105 brightness-[0.9] saturate-[1.2]"
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/40 via-[#0B0C1Eaa] to-black/60 backdrop-blur-md" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 tracking-tight text-glow">
            Explore the Marketplace
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Browse community-crafted components and supercharge your workflow.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 px-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search components..."
            className="w-full sm:w-1/3 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full sm:w-1/4 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="default">Sort by</option>
            <option value="popular">Most Popular</option>
            <option value="recent">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <select
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="w-full sm:w-1/4 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {techOptions.map((option) => (
              <option key={option} value={option}>
                {option === "all"
                  ? "All Technologies"
                  : option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {components.map((component) => (
            <div
              key={component.id}
              className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 pt-8 pb-24 shadow-glow hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col justify-between text-white group overflow-hidden"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-glow group-hover:text-yellow-300">
                  {component.name}
                </h3>
                <p className="text-sm text-white/70">{component.description}</p>
              </div>

              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {component.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${techColors[tech]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 right-4 flex flex-col items-end space-y-2">
                <div className=" text-glow-pink text-pink-500 px-3 py-1 rounded-full text-md font-bold ">
                  {component.price}
                </div>
                <button className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-pink-500 to-yellow-300 text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:from-pink-400 hover:to-yellow-200 transition-all duration-300 hover:scale-105">
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

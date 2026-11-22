"use client";

import { Navbar } from "@/app/components/Navbar";
import HomePage from "@/app/components/HeroSection";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
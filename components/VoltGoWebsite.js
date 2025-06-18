"use client";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function VoltGoWebsite() {
  return (
    <div className="min-h-screen bg-[#1b1d20] text-white font-sans">
      <section className="text-center py-24 px-6 bg-gradient-to-b from-[#0d0f11] to-[#1b1d20]">
        <h1 className="text-6xl font-extrabold mb-4 text-blue-500 tracking-tight">VoltGo</h1>
        <h2 className="text-4xl font-semibold mb-4">Mobile EV Charging Delivered</h2>
        <p className="text-xl max-w-2xl mx-auto mb-6 text-gray-300">
          Emergency or scheduled EV top-offs — we bring the charge to you, anywhere in San Diego.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="text-lg px-6 py-3 rounded-2xl shadow bg-blue-600 hover:bg-blue-700">Request a Charge</Button>
          <Button variant="outline" className="text-lg px-6 py-3 rounded-2xl border border-blue-500 text-blue-400">Call Us</Button>
        </div>
      </section>
    </div>
  );
}
/* placeholder, real code already in canvas */

import { Button } from './ui/button';
import { Card } from './ui/card';

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
          <Button>Request a Charge</Button>
          <Button variant="outline">Call Us</Button>
        </div>
      </section>
    </div>
  );
}

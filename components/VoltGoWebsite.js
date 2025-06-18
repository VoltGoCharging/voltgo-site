import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function VoltGoWebsite() {
  const plans = [
    {
      title: "Emergency Top-Off",
      price: "$149/call",
      features: [
        "15–30 miles delivered",
        "Service availability based on location queue",
        "No towing needed"
      ]
    },
    {
      title: "VoltGo Elite Membership",
      price: "$349/mo",
      features: [
        "Up to 4 charges/month",
        "Priority scheduling",
        "24/7 access within service area"
      ]
    },
    {
      title: "Fleet Contracts",
      price: "Contact for More Information",
      features: [
        "Fleet charging tailored to your business",
        "Priority dispatching",
        "Dedicated support"
      ]
    }
  ];

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

      <section className="bg-[#22252a] py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Request a Charge", "We Queue and Dispatch", "You're Back on the Road"].map((title, i) => (
            <Card key={i} className="rounded-2xl shadow-lg bg-[#2f3237] text-white border border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p>{[
                  "Use our app or website to schedule emergency or flexible charging times.",
                  "Your request is queued and our VoltGo van is dispatched when available.",
                  "We deliver the energy you need — no towing, no range anxiety."
                ][i]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-[#1b1d20]">
        <h2 className="text-3xl font-bold text-center mb-10">Our Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <Card key={i} className="rounded-2xl shadow-lg bg-[#2f3237] text-white border border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-2xl font-semibold mb-4">{plan.price}</p>
                <ul className="list-disc list-inside space-y-1">
                  {plan.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">Elite Memberships are limited. Application approval required.</p>
      </section>

      <section className="bg-[#22252a] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About VoltGo</h2>
          <p className="text-lg text-gray-300">
            VoltGo was built to eliminate range anxiety and redefine convenience for EV drivers. We deliver fast, reliable, high-end mobile charging directly to your vehicle wherever you are in San Diego.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#1b1d20]">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <div><h3 className="text-xl font-semibold">What areas do you serve?</h3><p className="text-gray-300">VoltGo proudly serves all of San Diego County with mobile EV charging services.</p></div>
          <div><h3 className="text-xl font-semibold">What vehicles do you support?</h3><p className="text-gray-300">We support all electric vehicle makes and models.</p></div>
          <div><h3 className="text-xl font-semibold">Can you reach me if I’m in a garage or remote area?</h3><p className="text-gray-300">Yes. Our vans are built for accessibility and will reach you wherever you are, as long as it's legally accessib

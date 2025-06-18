export default function VoltGoWebsite() {
  return (
    <div className="bg-black text-white font-sans min-h-screen px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-blue-500">VoltGo</h1>
        <p className="text-xl mt-2 text-gray-300">Mobile EV Charging Delivered</p>
        <p className="mt-1 text-gray-400">
          Emergency or scheduled EV top-offs — we bring the charge to you, anywhere in San Diego.
        </p>
        <div className="mt-4 space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Request a Charge</button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded">Call Us</button>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">How It Works</h2>
        <ol className="space-y-3 list-decimal list-inside text-gray-200">
          <li>
            <strong>Request a Charge</strong> — Use our app or website to schedule emergency or flexible charging times.
          </li>
          <li>
            <strong>We Queue and Dispatch</strong> — Your request is queued and our VoltGo van is dispatched when available.
          </li>
          <li>
            <strong>You’re Back on the Road</strong> — We deliver the energy you need — no towing, no range anxiety.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Our Pricing</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Emergency Top-Off</h3>
            <p className="text-gray-300">$149/call</p>
            <ul className="list-disc list-inside text-gray-400 mt-1">
              <li>15–30 miles delivered</li>
              <li>Service availability based on location queue</li>
              <li>No towing needed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">VoltGo Elite Membership</h3>
            <p className="text-gray-300">$349/mo</p>
            <ul className="list-disc list-inside text-gray-400 mt-1">
              <li>Up to 4 charges/month</li>
              <li>Priority scheduling</li>
              <li>24/7 access within service area</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Fleet Contracts</h3>
            <p className="text-gray-300">Contact for More Information</p>
            <ul className="list-disc list-inside text-gray-400 mt-1">
              <li>Fleet charging tailored to your business</li>
              <li>Priority dispatching</li>
              <li>Dedicated support</li>
            </ul>
            <p className="text-sm text-gray-500 mt-1">Elite Memberships are limited. Application approval required.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-700 pt-6 text-sm text-gray-500">
        <p>About VoltGo — Built to keep San Diego's EV drivers powered and moving.</p>
      </footer>
    </div>
  )
}

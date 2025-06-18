export function Card({ children }) {
  return (
    <div className="rounded-2xl shadow-lg bg-[#2f3237] text-white border border-gray-600 p-6">
      {children}
    </div>
  );
}

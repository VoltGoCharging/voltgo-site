export function Button({ children, variant = 'solid' }) {
  const base = "text-lg px-6 py-3 rounded-2xl shadow";
  const solid = "bg-blue-600 hover:bg-blue-700 text-white";
  const outline = "border border-blue-500 text-blue-400";
  const style = variant === 'outline' ? outline : solid;
  return <button className={`${base} ${style}`}>{children}</button>;
}

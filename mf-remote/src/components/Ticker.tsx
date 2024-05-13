import "tailwindcss/tailwind.css";

export default function Ticker({
  customText,
}: {
  customText: string;
}) {
  return (
    <div className="bg-[#FFEDD5] p-4 rounded-lg text-center mb-6">
      <span className="text-sm font-semibold">{customText}</span>
    </div>
  )
}
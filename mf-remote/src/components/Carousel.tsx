import "tailwindcss/tailwind.css";

import { useRouter } from "next/router";

const SlideButton = ({ slide }: { slide: string | number }) => {
  const router = useRouter();

  return (
    <button
      onClick={() =>
        router.push({
          query: {
            slide: slide,
          },
        })
      }
      className="text-blue-500 p-1 border border-blue-500 rounded-lg"
    >
      {slide}
    </button>
  );
};

export default function Carousel() {
  const router = useRouter();

  return (
    <div className="bg-[#FFEDD5] p-4 rounded-lg mb-6 h-40">
      <span className="text-sm font-semibold">
        Ch3ck 0ut th3 l@test pr0m0ti0ns!
        <br />
        Slide: {router.query.slide || 1}
        <br />
        <SlideButton slide={1} />
        <SlideButton slide={2} />
        <SlideButton slide={3} />
      </span>
    </div>
  );
}

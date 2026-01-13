import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px]">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
        alt="Bitcoin Association Switzerland Winter Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
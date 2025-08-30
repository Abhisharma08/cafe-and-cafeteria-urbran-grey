import { QuoteForm } from "./quote-form";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="https://res.cloudinary.com/dtc8bbbco/image/upload/v1756540656/WhatsApp_Image_2025-08-30_at_12.30.55_PM_vz6uzv.jpg"
        alt="Office furniture"
        fill
        className="object-cover"
        priority
      />
      <div className="container relative z-20 py-24 lg:py-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              <span className="text-accent">Café & Cafeteria</span> Furniture for Every Break Space
            </h1>
            <p className="max-w-xl text-lg text-white lg:mx-0 mx-auto md:text-xl">
              At Urban Grey, we design café and cafeteria furniture that goes beyond functionality — it builds spaces where people relax, connect, and recharge. From quick coffee breaks to team lunches, our collections combine comfort, durability, and style for everyday use.
            </p>
          </div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

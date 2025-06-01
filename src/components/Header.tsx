import Image from "next/image";

export default function Header() {
  return (
    <header className="py-20 md:py-20 text-center bg-transparent relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Logos - centered on mobile, top-left on larger screens */}
        <div className="flex gap-4 items-center justify-center mb-8 md:mb-0 md:absolute md:top-6 md:left-6">
          <Image
            src="https://i.imgur.com/NaFfxYS.png"
            alt="DMZ Logo"
            width={100}
            height={67}
            className="object-contain"
          />
          <Image
            src="https://i.imgur.com/H9CrKkr.png"
            alt="myBlueprint Logo"
            width={120}
            height={80}
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          <p>2025 Micro Grant Recipients 🎉</p> 
          <p>DMZ x myBlueprint</p>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
          Celebrating 20 student projects that received $500 micro grants to bring their ideas to life
        </p>
      </div>
    </header>
  );
} 
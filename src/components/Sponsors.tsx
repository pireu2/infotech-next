import Image from "next/image";
import { Dictionary } from "@/i18n/getDictionary";

interface SponsorsProps {
  dictionary: Dictionary;
}

export default function Sponsors({ dictionary }: SponsorsProps) {
  const translations = dictionary;
  const sponsors: string[] = [
    "images/sponsors/bsides.svg",
    "images/sponsors/msg.svg",
    "images/sponsors/yardi.svg",
    "images/sponsors/finshape.png",
    "images/sponsors/irsap.png",
    "images/sponsors/kesz.png",
    "images/sponsors/mindit.png",
    "images/sponsors/synopsys.png",
    "images/sponsors/ulma.png",
  ];

  return (
    <section
      id="sponsors"
      className="py-10 px-2 md:px-8 overflow-hidden relative z-10"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-blue-900/10 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg shadow-purple-500/10"></div>

        <div className="relative p-8">
          <h2 className="text-4xl font-semibold text-center mb-6 bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
            {translations.sponsors.title}
          </h2>
          <p className="text-lg text-justify text-gray-300  mb-6 max-w-6xl mx-auto leading-relaxed">
            {translations.sponsors.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sponsors.map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 h-32 bg-gray-800/30 backdrop-blur-md rounded-lg border border-gray-700 hover:border-purple-400 transition-all group relative"
              >
                <Image
                  src={`/${src}`}
                  fill
                  className="object-contain opacity-80 p-4 group-hover:opacity-100 transition-all filter group-hover:brightness-110"
                  alt={`Sponsor ${i + 1}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

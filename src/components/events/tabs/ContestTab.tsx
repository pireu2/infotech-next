import EventCarousel from "@/components/events/EventCarousel";
import { Dictionary } from "@/i18n/getDictionary";

const contestImages = [
  "/images/carousel/ContestN1.webp",
  "/images/carousel/ContestN2.webp",
  "/images/carousel/ContestN3.webp",
];

interface ContestTabProps {
  dictionary: Dictionary;
}

export default function ContestTab({ dictionary }: ContestTabProps) {
  const t = dictionary;

  return (
    <div className="max-w-6xl mx-auto text-gray-300 text-lg space-y-8">
      <h2 className="text-3xl font-semibold text-center bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
        {t.contest.title}
      </h2>

      {t.contest.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className="text-justify"
        />
      ))}

      <EventCarousel images={contestImages} altPrefix="Contest" />

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
          {t.contest.whyAttend.title}
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          {t.contest.whyAttend.items.map((item, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
              className="text-justify"
            />
          ))}
        </ul>
      </div>

      <h3 className="text-xl font-bold bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
        {t.contest.conclusion}
      </h3>
    </div>
  );
}

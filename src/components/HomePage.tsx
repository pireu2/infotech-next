import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/Navbar";
import TeamMemberCards from "@/components/TeamMemberCards";
import Sponsors from "@/components/Sponsors";
import Events from "@/components/events/Events";
import { Dictionary } from "@/i18n/getDictionary";
import { Locale } from "@/i18n/config";

interface HomePageProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function HomePage({ dictionary }: HomePageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0c091e] overscroll-none">
      <Navbar dictionary={dictionary} />

      <Hero dictionary={dictionary} />

      <About dictionary={dictionary} />

      <Events dictionary={dictionary} />

      <TeamMemberCards dictionary={dictionary} />

      <Sponsors dictionary={dictionary} />

      <Footer />
    </div>
  );
}

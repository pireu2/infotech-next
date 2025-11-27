import { Metadata } from "next";
import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import { Locale, isValidLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const isRomanian = locale === "ro";

  return {
    title: isRomanian
      ? "InfoTech - Proiect Studențesc pentru Tehnologie și Inovație"
      : "InfoTech - Student Project for Technology and Innovation",
    description: isRomanian
      ? "InfoTech este un proiect studențesc la UTCN Cluj-Napoca dedicat educației în tehnologie, workshop-uri de programare, training-uri de dezvoltare profesională și evenimente tech precum InfoNight, InfoWeek și ContestNight."
      : "InfoTech is a student project at UTCN Cluj-Napoca dedicated to technology education, programming workshops, career development trainings, and tech events like InfoNight, InfoWeek, and ContestNight.",
    openGraph: {
      title: isRomanian
        ? "InfoTech - Proiect Studențesc pentru Tehnologie și Inovație"
        : "InfoTech - Student Project for Technology and Innovation",
      description: isRomanian
        ? "Alătură-te InfoTech la UTCN Cluj-Napoca pentru educație în tehnologie, workshop-uri de programare, training-uri de carieră și evenimente de networking."
        : "Join InfoTech at UTCN Cluj-Napoca for technology education, programming workshops, career trainings, and networking events.",
      locale: isRomanian ? "ro_RO" : "en_US",
      alternateLocale: isRomanian ? "en_US" : "ro_RO",
    },
    alternates: {
      canonical: `https://infotech.osut.org/${locale}`,
      languages: {
        en: "https://infotech.osut.org/en",
        ro: "https://infotech.osut.org/ro",
      },
    },
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <>
      <JsonLd dictionary={dictionary} locale={locale as Locale} />
      <HomePage dictionary={dictionary} locale={locale as Locale} />
    </>
  );
}

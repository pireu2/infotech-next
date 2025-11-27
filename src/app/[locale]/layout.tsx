import { notFound } from "next/navigation";
import { locales, Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <LanguageProvider locale={locale as Locale} dictionary={dictionary}>
      {children}
    </LanguageProvider>
  );
}

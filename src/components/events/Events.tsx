"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrainingsTab from "@/components/events/tabs/TrainingsTab";
import ContestTab from "@/components/events/tabs/ContestTab";
import InfoNightTab from "@/components/events/tabs/InfoNightTab";
import InfoWeekTab from "@/components/events/tabs/InfoWeekTab";
import { ActiveTab } from "@/types/ActiveTab";
import { Dictionary } from "@/i18n/getDictionary";

interface EventsProps {
  dictionary: Dictionary;
}

export default function Events({ dictionary }: EventsProps) {
  const TabNames: Record<ActiveTab, string> = {
    contest: dictionary.events.tabs.contest,
    infonight: dictionary.events.tabs.infonight,
    infoweek: dictionary.events.tabs.infoweek,
    trainings: dictionary.events.tabs.trainings,
  };

  return (
    <section id="events" className="py-10 px-4 md:px-8 relative z-10">
      <h2 className="text-4xl font-semibold text-center mb-6 bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
        {dictionary.events.title}
      </h2>

      <Tabs defaultValue="contest" className="w-full">
        <TabsList className="grid mx-auto h-12 md:h-14 grid-cols-4 mb-8 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30">
          {Object.entries(TabNames).map(([key, label]) => {
            const tab = key as ActiveTab;
            return (
              <TabsTrigger
                key={tab}
                value={tab}
                className=" font-semibold py-2 md:text-lg data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
              >
                {label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value="infonight" className="mt-0">
          <InfoNightTab dictionary={dictionary} />
        </TabsContent>

        <TabsContent value="infoweek" className="mt-0">
          <InfoWeekTab dictionary={dictionary} />
        </TabsContent>

        <TabsContent value="trainings" className="mt-0">
          <TrainingsTab dictionary={dictionary} />
        </TabsContent>

        <TabsContent value="contest" className="mt-0">
          <ContestTab dictionary={dictionary} />
        </TabsContent>
      </Tabs>
    </section>
  );
}

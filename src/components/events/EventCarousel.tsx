"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface EventCarouselProps {
  images: string[];
  altPrefix: string;
}

export default function EventCarousel({
  images,
  altPrefix,
}: EventCarouselProps) {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        autoScroll={true}
        autoScrollInterval={3000}
        className="w-full max-w-3xl mx-auto"
      >
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={i}>
              <div className="overflow-hidden rounded-2xl bg-gray-800 shadow-xl relative h-96">
                <Image
                  src={src}
                  alt={`${altPrefix} image ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

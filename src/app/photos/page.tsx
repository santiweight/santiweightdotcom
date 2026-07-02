"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";
import Lightbox from "@/components/Lightbox";

const hollisPhotos = [
  { src: "/images/01227BF8-A050-48FC-B9EE-76EDF698FFDC_1_105_c.jpeg", alt: "Hollis on the table" },
  { src: "/images/3E443F55-738C-4A8D-88B6-CE7F834E33A4_1_105_c.jpeg", alt: "Hollis in a box" },
  { src: "/images/9D4548B5-151D-4D10-ABBA-D05BFC316787_4_5005_c.jpeg", alt: "Hollis close-up" },
  { src: "/images/483FB70E-9DDB-4687-B3CA-AEAD26DC0E25_1_105_c.jpeg", alt: "Hollis" },
  { src: "/images/5138DADA-E105-4B83-A94C-A640BA4D4C37_1_102_o.jpeg", alt: "Hollis" },
  { src: "/images/61B32F35-AF3A-438B-8D9B-8420D6C863A0_1_105_c.jpeg", alt: "Hollis" },
  { src: "/images/671BD180-FEAF-4A3C-A01B-2EE03BABF725_1_102_o.jpeg", alt: "Hollis" },
  { src: "/images/B9E7F828-BB35-4D5F-9F25-EC51908127D8_1_105_c.jpeg", alt: "Hollis" },
  { src: "/images/F5B05C4B-914B-4F54-AE4C-C9931318CBB8_1_102_o.jpeg", alt: "Hollis" },
];

const santiPhotos = [
  { src: "/images/profile.jpeg", alt: "Santi with Hollis" },
  { src: "/images/66E4DA83-467C-45FA-8B6F-16F107AD3B69_4_5005_c.jpeg", alt: "Santi hiking" },
  { src: "/images/D4F86417-7DCC-4086-8839-33C784FA0CCE_4_5005_c.jpeg", alt: "Santi on mountain" },
  { src: "/images/16F20F90-A63A-4725-A9E0-A3AA1607E2F8_1_105_c.jpeg", alt: "Santi" },
];

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="max-w-[900px] mx-auto px-[18px] py-7 pb-12">
        <Header variant="page" />

        <h2 className="text-[24px] font-bold mb-6">Photos</h2>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Hollis</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {hollisPhotos.map((photo, i) => (
              <button
                key={i}
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Santi</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {santiPhotos.map((photo, i) => (
              <button
                key={i}
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </button>
            ))}
          </div>
        </section>
      </div>

      {selectedPhoto && (
        <Lightbox
          src={selectedPhoto.src}
          alt={selectedPhoto.alt}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}

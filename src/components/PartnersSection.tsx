import Image from "next/image";

const partners = [
  { name: "HYBE", file: "HYBE-copy.jpg" },
  { name: "LAMY", file: "LAMY-copy.jpg" },
  { name: "SMARTSTUDY", file: "smartstudy.jpg" },
  { name: "MOLESKINE", file: "Moleskine-copy.jpg" },
  { name: "MONAMI", file: "monami.jpg" },
  { name: "DAEKYO", file: "daekyo.jpg" },
  { name: "KUMON", file: "kumon.jpg" },
  { name: "DOUGLAS", file: "douglas.jpg" },
  { name: "WOONGJIN", file: "woong.jpg" },
  { name: "SCHOLASTIC", file: "scholastic.jpg" },
  { name: "MEGASTUDY", file: "megastudy.jpg" },
  { name: "KENT", file: "Kent.jpg" },
];

export default function PartnersSection() {
  return (
    <section className="py-[11px] bg-white overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-left">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-16"
            >
              <Image
                src={`/images/partners/${partner.file}`}
                alt={partner.name}
                width={150}
                height={60}
                className="object-contain opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

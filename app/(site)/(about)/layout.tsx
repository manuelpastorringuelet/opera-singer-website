import AboutImage from "@/components/about-image";
import { getCritics } from "@/sanity/sanity.query";

const AboutLayout = async ({ children }: { children: React.ReactNode }) => {
  const critics = await getCritics();

  return (
    <main className="container flex flex-1 flex-col gap-3 sm:px-16 md:gap-8">
      <AboutImage />
      <section className="md:grid-cols-critics grid gap-16 pb-4 text-sm md:text-base">
        <div className="flex flex-col gap-4 overflow-hidden">
          {critics.map((critics, index) => (
            <blockquote key={index} className="flex flex-col gap-1 text-end">
              <q className="text-start text-2xl">{critics.description}</q>
              <cite className="text-xxs">- {critics.source}</cite>
              <p className="text-xxs">
                {critics.role} <span>({critics.opera})</span>
              </p>
            </blockquote>
          ))}
        </div>
        <div className="text-justify">{children}</div>
      </section>
    </main>
  );
};

export default AboutLayout;

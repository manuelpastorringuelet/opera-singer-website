import AboutImage from "@/components/about-image";
import Critics from "@/components/critics";
import { getAbout, getCritics } from "@/sanity/sanity.query";

const AboutLayout = async ({ children }: { children: React.ReactNode }) => {
  const critics = await getCritics();

  // order by ranking ascending
  critics.sort((a, b) => a.ranking - b.ranking);

  const [about] = await getAbout();

  return (
    <main className="container flex flex-1 flex-col gap-3 sm:px-16 md:gap-8">
      <AboutImage about={about} />
      <section className="flex flex-col gap-16 pb-4 text-sm md:grid md:grid-cols-critics md:text-base">
        <Critics critics={critics} />
        {children}
      </section>
    </main>
  );
};

export default AboutLayout;

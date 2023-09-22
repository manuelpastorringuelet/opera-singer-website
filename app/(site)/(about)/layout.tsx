import AboutImage from "@/components/about-image";
import Critics from "@/components/critics";
import { getCritics, getProfile } from "@/sanity/sanity.query";

const AboutLayout = async ({ children }: { children: React.ReactNode }) => {
  const critics = await getCritics();

  const [profile] = await getProfile();

  return (
    <main className="container flex flex-1 flex-col gap-3 sm:px-16 md:gap-8">
      <AboutImage profile={profile} />
      <section className="grid gap-16 pb-4 text-sm md:grid-cols-critics md:text-base">
        <Critics critics={critics} />
        {children}
      </section>
    </main>
  );
};

export default AboutLayout;

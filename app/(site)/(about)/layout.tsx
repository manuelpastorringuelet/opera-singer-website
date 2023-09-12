import AboutImage from "@/components/about-image";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container flex flex-1 flex-col sm:gap-4 sm:px-16 md:gap-8">
      <AboutImage />
      <p className="gap-8 pb-4 text-justify text-sm font-thin md:columns-2 md:text-base lg:columns-3">
        {children}
      </p>
    </section>
  );
};

export default AboutLayout;

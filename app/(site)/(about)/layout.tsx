import AboutImage from "@/components/about-image";

const AboutLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
        <section className="container flex flex-1 flex-col gap-8 px-16">
        <AboutImage />
      <p className="pb-4 text-justify text-sm font-thin gap-8 md:columns-2 lg:columns-3 md:text-base">
       {children}
      </p>
      </section>
     );
}
 
export default AboutLayout;
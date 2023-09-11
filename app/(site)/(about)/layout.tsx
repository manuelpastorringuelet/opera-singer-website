import AboutImage from "@/components/about-image";

const AboutLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
        <section className="container flex flex-1 flex-col gap-8">
        <AboutImage />
       {children}
      </section>
     );
}
 
export default AboutLayout;
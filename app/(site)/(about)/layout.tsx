import AboutImage from "@/components/about-image";
import { critic } from "@/lib/critic";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container flex flex-1 flex-col gap-3 sm:px-16 md:gap-8">
      <AboutImage />
      <section className="grid gap-8 pb-4 text-sm md:grid-cols-2 md:text-base">
        <div className="flex flex-col gap-8 overflow-hidden">
          {critic.map((critic, index) => (
            <blockquote key={index} className="flex flex-col gap-1 text-end">
              <q className="text-start text-3xl">{critic.description}</q>
              <cite>- {critic.source}</cite>
              <p>
                {critic.role} <span>{critic.opera}</span>
              </p>
            </blockquote>
          ))}
        </div>
        {children}
      </section>
    </main>
  );
};

export default AboutLayout;

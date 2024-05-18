import Bio from "@/components/bio";
import { getAbout } from "@/sanity/sanity.query";

import { type About } from "@/types";

const About = async () => {
  const { germanBio }: About = await getAbout();

  return <Bio bio={germanBio} />;
};

export default About;

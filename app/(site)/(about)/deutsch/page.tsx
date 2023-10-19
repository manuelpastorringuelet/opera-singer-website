import { getAbout } from "@/sanity/sanity.query";

import { About } from "@/types";
import Bio from "@/components/bio";

const About = async () => {
  const { germanBio }: About = await getAbout();

  return <Bio bio={germanBio} />;
};

export default About;

import { getAbout } from "@/sanity/sanity.query";

import { About } from "@/types";
import Bio from "@/components/bio";

const About = async () => {
  const about: About[] = await getAbout();

  return <Bio about={about} />;
};

export default About;

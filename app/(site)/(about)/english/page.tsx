import { getAbout } from "@/sanity/sanity.query";

import { About } from "@/types";
import Bio from "@/components/bio";

const About = async () => {
  const { englishBio }: About = await getAbout();

  return <Bio bio={englishBio} />;
};

export default About;

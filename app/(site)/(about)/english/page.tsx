import Bio from "@/components/bio";
import { getAbout } from "@/sanity/sanity.query";

import { type About } from "@/types";

const About = async () => {
  const { englishBio }: About = await getAbout();

  return <Bio bio={englishBio} />;
};

export default About;

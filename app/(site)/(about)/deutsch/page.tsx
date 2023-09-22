import { getProfile } from "@/sanity/sanity.query";

import { ProfileType } from "@/types";
import Bio from "@/components/bio";

const About = async () => {
  const profile: ProfileType[] = await getProfile();

  return <Bio profile={profile} />;
};

export default About;

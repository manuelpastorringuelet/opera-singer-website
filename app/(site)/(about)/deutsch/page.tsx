import { PortableText } from "@portabletext/react";

import { getProfile } from "@/sanity/sanity.query";

import { ProfileType } from "@/types";

const About = async () => {
  const profile: ProfileType[] = await getProfile();

  return (
    <>
      {profile.map((data) => {
        return <PortableText key={data._id} value={data.germanBio} />;
      })}
    </>
  );
};

export default About;

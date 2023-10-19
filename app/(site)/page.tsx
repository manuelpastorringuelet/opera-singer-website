import { getProfile } from "@/sanity/sanity.query";

import Hero from "@/components/hero";

async function Home() {
  const profile = await getProfile();

  return <Hero profile={profile} />;
}

export default Home;

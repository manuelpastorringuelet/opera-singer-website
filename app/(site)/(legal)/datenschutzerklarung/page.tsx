import { PortableText } from "@portabletext/react";

import { getLegal } from "@/sanity/sanity.query";

const Datenschutzerklärung = async () => {
  const [privacyPolicy] = await getLegal();

  return (
    <>
      <PortableText value={privacyPolicy.content} />
    </>
  );
};

export default Datenschutzerklärung;

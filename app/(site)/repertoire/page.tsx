import React from "react";

import repertoireData from "@/lib/repertoireData";

const Repertoire = () => {
  return (
    <section className="container mx-auto flex flex-1 flex-col gap-12 py-8 sm:gap-16 sm:px-16">
      <section className="sm:grid-cols-repertoire group group grid gap-6 sm:gap-8 lg:gap-16">
        <h1 className="text-7xl group-hover:text-primary/80 sm:justify-self-end">
          Opera
        </h1>
        <ul className="peer flex flex-1 flex-col gap-4">
          {repertoireData.opera.map((roleData, index) => (
            <li key={index} className="peer hover:text-primary/80">
              <h2 className="text-xl font-semibold">{roleData.role}</h2>
              <p className="font-light">{roleData.piece}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sm:grid-cols-repertoire group group grid gap-6 sm:gap-8 lg:gap-16">
        <h1 className="text-7xl group-hover:text-primary/80 sm:justify-self-end">
          Concert
        </h1>
        <ul className="flex flex-col gap-4">
          {repertoireData.concert.map((roleData, index) => (
            <li key={index} className="hover:text-primary/80">
              <h2 className="text-xl font-semibold">{roleData.composer}</h2>
              {roleData.pieces.map((piece, index) => (
                <p key={index} className="font-light">
                  {piece}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </section>

      <section className="sm:grid-cols-repertoire group group grid gap-6 sm:gap-8 lg:gap-16">
        <h1 className="text-7xl group-hover:text-primary/80 sm:justify-self-end">
          Lied
        </h1>
        <ul className="flex flex-col gap-4">
          {repertoireData.lied.map((composerData, index) => (
            <li key={index} className="hover:text-primary/80">
              <h2 className="text-xl font-semibold">{composerData.composer}</h2>
              {composerData.pieces.map((piece, index) => (
                <p key={index} className="font-light">
                  {piece}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Repertoire;

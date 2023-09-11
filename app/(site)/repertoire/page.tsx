import React from "react";

import repertoireData from "@/lib/repertoireData";

const Repertoire = () => {
  return (
    <div className="flex flex-col gap-16 p-16">
      <section className="grid flex-1 snap-mandatory gap-8 sm:grid-cols-2">
        <h1 className="justify-self-center text-7xl">Opera</h1>
        <ul className="flex flex-col gap-4">
          {repertoireData.opera.map((roleData, index) => (
            <li key={index} className="hover-section-h1 hover:text-primary/80">
              <h2 className="text-xl font-semibold">{roleData.role}</h2>
              <p className="font-light">{roleData.piece}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid flex-1 gap-8 sm:grid-cols-2">
        <h1 className="justify-self-center text-7xl">Concert</h1>
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

      <section className="grid flex-1 gap-8 sm:grid-cols-2">
        <h1 className="justify-self-center text-7xl">Lied</h1>
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
    </div>
  );
};

export default Repertoire;

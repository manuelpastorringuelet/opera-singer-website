const LegalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="article container mx-auto flex flex-1 flex-col gap-4 py-8 text-start sm:px-16">
      {children}
    </section>
  );
};

export default LegalLayout;

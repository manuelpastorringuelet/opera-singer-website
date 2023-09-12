const LegalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto flex max-w-7xl flex-1 flex-col gap-4 py-8 text-start text-sm sm:px-16">
      {children}
    </section>
  );
};

export default LegalLayout;

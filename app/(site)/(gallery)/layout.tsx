const GalleryLayout = ({
  children: children,
}: {
  children: React.ReactNode;
}) => {
  return <section className="container flex-1 sm:px-16">{children}</section>;
};

export default GalleryLayout;

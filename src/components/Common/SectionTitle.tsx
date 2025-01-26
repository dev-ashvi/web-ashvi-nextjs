const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full z-10 ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="relative mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] z-10">
          {title}
        </h2> 
        <p className="relative text-base !leading-relaxed text-body-color md:text-lg z-10">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

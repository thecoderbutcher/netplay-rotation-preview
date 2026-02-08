const Footer = () => {
  const year = new Date();
  return (
    <div className="flex flex-col h-full w-full text-white text-shadow-gray-700 text-shadow-xs bg-gray-900/50">
      <div className="flex flex-col justify-center items-center text-center gap-2 bg-secondary/90 text-primary/80 p-2">
        <p className="text-base">
          Developed with <span className="text-[#ff3838]">❤</span> by
          <a
            href="https://thecoderbutcher.github.io/"
            target="_blank"
            className="font-bold text-[#ff3838]"
          >
            {" "}
            thecoderbutcher
          </a>
        </p>
        <p className="text-sm">© {year.getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

const HomeTitle = () => {
  return (
    <div className="w-full h-78.75 relative bg-darkslateblue flex flex-col items-center justify-between py-9 px-20 box-border gap-5 text-center text-[4rem] text-white font-inter">
      <b className="relative [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
        Welcome to,
        <br />
        Wiweka Management
      </b>

      <div className="w-247.25 h-17 relative text-2xl text-left inline-block shrink-0">
        We provide expert management of accounting and tax for businesses and
        individuals.
      </div>
    </div>
  );
};

export default HomeTitle;
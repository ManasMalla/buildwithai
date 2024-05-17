export default function Partners() {
  return (
    <div className="px-[20px] md:px-[60px] py-[20px] md:py-12 max-w-[1200px]">
      <h3 className="my-7 p-0 text-[28px] md:text-[32px] leading-[30px]">
        Partners
      </h3>
      <h4 className="mb-3 text-xl">Main partner of 2024</h4>
      <h4 className="mb-3 mt-[26.6px] text-xl">Community Partner</h4>
      <div className="flex gap-x-16">
        <div className="w-[170px] h-[100px]">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*4YZ4tOc5oRs_Ksx-R_WFMw.png"
            className="w-full h-full object-contain"
            alt="Google Developer Groups | Vizag"
          />
        </div>
        <div className="w-[170px] h-[100px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk1pJogkU9KUp91PPR4ds2kKrrY5uokfpLVr-zjvMzw&s"
            className="w-full h-full object-contain"
            alt="Women TechMakers | Vizag"
          />
        </div>
      </div>
      <h4 className="mb-3 mt-[26.6px] text-xl">Venue Partner</h4>
      <div className="w-[170px] h-[100px]">
        {/* <img
          src="https://gu.gitam.edu/assets/images/about/logos/gitam-logo2.png"
          className="w-full h-full object-contain"
          alt="GITAM University"
        /> */}
        TBA
      </div>
      <h4 className="mb-3 mt-[26.6px] text-xl">Tech Partner</h4>
      <div className="w-[120px] h-[100px]">
        <img
          src="https://theananta.in/logo.svg"
          className="w-full h-full object-contain"
          alt="The Ananta Studio™️ 2024"
        />
      </div>
      <h4 className="mb-3 mt-[26.6px] text-xl">With love from</h4>
      <div className="flex gap-x-8 md:gap-x-16 flex-wrap"></div>
    </div>
  );
}

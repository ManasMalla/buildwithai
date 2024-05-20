export default function Partners() {
  return (
    <div className="px-[20px] md:px-[60px] py-[20px] md:py-12 relative z-10 items-center text-center">
      <h3 className="my-7 p-0 text-[28px] md:text-[32px] leading-[30px]">
        Partners
      </h3>
      <div className="flex flex-col md:flex-row md:gap-x-16 md:justify-center">
        <div>
          <h4 className="mb-3 mt-[26.6px] text-xl">Community Partner</h4>
          <div className="flex gap-x-16">
            <div className="w-[170px] h-[100px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk1pJogkU9KUp91PPR4ds2kKrrY5uokfpLVr-zjvMzw&s"
                className="w-full h-full object-contain"
                alt="Women TechMakers | Vizag"
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-3 mt-[26.6px] text-xl">Venue Partner</h4>
          <div className="w-[170px] h-[100px]">
            <a href="https://vignaniit.edu.in/">
              <img
                src="/images/vignan.png"
                className="w-full h-full object-contain"
                alt="Vignan Institute of Information Technology"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

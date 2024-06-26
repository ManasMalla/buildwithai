export default function Footer() {
  return (
    <div className="bg-[#fafafa] dark:bg-[#202023]/30  md:mt-16 px-[20px] md:px-16 md:pt-16 pt-7 pb-24 md:pb-9 md:h-52 flex flex-col justify-between font-medium relative z-10">
      <img
        src="/images/gdg-logo.png"
        className="h-10 w-auto mr-auto mb-8 md:mb-[unset]"
      />
      <div className="flex flex-col md:flex-row justify-start md:items-center space-y-[14px] md:space-y-[unset] md:space-x-9 text-[13px] md:text-[14px] text-[#727272] cursor-pointer">
        <a href="/#" className=" hover:text-[#1a73e8] font-medium">
          Build With AI
        </a>
        <a href="/schedule" className=" hover:text-[#1a73e8] font-medium">
          Schedule
        </a>
        <a href="/speakers" className=" hover:text-[#1a73e8] font-medium">
          Speakers
        </a>
        <a href="/faq" className=" hover:text-[#1a73e8] font-medium">
          FAQ
        </a>
        <a
          href="https://devfest23.vizag.dev/coc"
          className=" hover:text-[#1a73e8] font-medium"
        >
          Community Guidelines
        </a>
      </div>
    </div>
  );
}

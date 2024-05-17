export default function Footer() {
  return (
    <div className="bg-[#fafafa] md:mt-16 px-[20px] md:px-16 md:pt-16 pt-7 pb-24 md:pb-9 md:h-52 flex flex-col justify-between font-medium">
      <img src="inline_logo.svg" className="h-16 w-auto mr-auto" />
      <div className="flex flex-col md:flex-row justify-start md:items-center space-y-[14px] md:space-y-[unset] md:space-x-9 text-[13px] md:text-[14px] text-[#727272] cursor-pointer">
        <a href="/#" className=" hover:text-[#1a73e8] font-medium">
          GDSC WoW 2024
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

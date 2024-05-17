export default function Data() {
  return (
    <div className="py-[20px] md:py-12 px-[20px] md:px-16 flex flex-col md:flex-row">
      <div className="md:w-[55%] md:pr-16">
        <h3 className="my-6 md:my-7 text-[28px] md:text-[32px] leading-[30px]">
          What you need to know, before you ask.
        </h3>
        <p className="text-[17px] leading-[28px]">
          The idea is to bring together the world class experts in Design,
          Android, Web, Machine Learning, Cloud technologies and much more for a
          week of sessions, workshops and showcases.
          <br />
          <br />
          Different GDSC Chapters have come up, taken initiative and decided to
          make this event a memorable one for everyone. The team that stayed
          together till the end, the team that defied all odds, and led the
          2-day event from conceptualization to execution in 14 Days.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:space-x-2 space-y-2 md:space-y-[unset] py-6">
          <a
            target="_blank"
            href="https://twitter.com/intent/tweet?text=I%20am%20attending%20GDSC%20WoW%20%23gdscwow%20%40gdscwow&url=https://gdscwow.vizag.dev"
          >
            <button className="py-2 px-6 text-[#1a73e8] rounded border-neutral-300 border text-sm font-medium">
              Tweet <span className="font-bold text-[#1a73e8]">#gdscwow</span>
            </button>
          </a>
          <a href="/wow-frame">
            <button className="py-2 px-6 text-[#1a73e8] rounded border-neutral-300 border text-sm font-medium">
              Get your{" "}
              <span className="font-bold text-[#1a73e8]">GDSC WoW</span> Frame
            </button>
          </a>
          {/* </div> */}
        </div>
      </div>
      <div className="grid md:w-[45%] md:pl-16 grid-cols-2">
        <div className="mt-4 mb-6">
          <div className="number">600+</div>
          <p className="mt-[5px]">Attendees</p>
        </div>
        <div className="mt-4 mb-6">
          <div className="number">2</div>
          <p className="mt-[5px]">Days</p>
        </div>
        <div className="mt-4 mb-6">
          <div className="number">TBA</div>
          <p className="mt-[5px]">Sessions</p>
        </div>
        <div className="mt-4 mb-6">
          <div className="number">TBA</div>
          <p className="mt-[5px]">Speakers</p>
        </div>
        {/* <div className="mt-4 mb-6">
          <div className="number">7</div>
          <p className="mt-[5px]">Tracks</p>
        </div> */}
      </div>
    </div>
  );
}

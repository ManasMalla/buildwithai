export default function Page() {
  return (
    <div className="my-[64px] w-full">
      <img
        src="/dsc-wow.svg"
        alt=""
        className="mb-2 md:mb-6 w-[180px] md:w-[250px]"
      />

      <h2 className={`hero-h2 max-w-[500px] leading-[36px] text-[24px]`}>
        WOW 2024 is here to bring students from all walks of life together.
        Connect, Collaborate and Celebrate this event with enthusiasm and a
        spirit to learn.
      </h2>
      <br />
      <h4 className="venue-date">8-9 June 2024 · TBA</h4>
      {/* <div className="flex items-center justify-start space-x-2">
            <button className="py-2 px-6 text-blue-500 rounded border-neutral-300 border text-sm">
              Get your WOW Frame Frame
            </button>
            <button className="py-2 px-6 text-blue-500 rounded border-neutral-300 border text-sm">
              Give Feedback
            </button>
          </div> */}
    </div>
  );
}

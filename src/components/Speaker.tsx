export default function Speaker(props: {
  title: string;
  name: string;
  image: string;
  description: string;
}) {
  return (
    <div className="gemini-gem-advantage">
      <div className="gemini-gem-advantage__content md:!items-start">
        <div className="gemini-gem-advantage__icon gemini-space-d32 rounded-full !size-11 md:!size-14">
          <img
            src={props.image}
            className="aspect-square text-center bg-white/10 items-center flex justify-center font-medium text-xl"
            alt={props.name
              .split(" ")
              .map((e) => e[0])
              .join("")}
          />
        </div>
        <h2
          className="gemini-gem-advantage__title gemini-type-t1-medium !text-2xl text-start !font-bold !mb-0"
          id="responsible-by-design"
          data-text="       Responsible by design     "
        >
          {props.title}
        </h2>
        <p className="text-sm text-start mb-[20px] opacity-70 mt-2">
          {props.description}
        </p>
        <p className="gemini-gem-advantage__copy gemini-btn gemini-secondary !cursor-default !border-[1.5px] py-2 !px-4 text-sm rounded-full border-[var(--gemini-color-grey-500)]">
          <span>{props.name}</span>
        </p>
      </div>
    </div>
  );
}

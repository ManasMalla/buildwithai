export default function Advantages(props: {
  title: string;
  description: string;
}) {
  return (
    <div className="gemini-gem-advantage">
      <div className="gemini-gem-advantage__content">
        <div className="gemini-gem-advantage__icon gemini-space-d32">
          <img
            src="/images/responsible-design-icon-new.svg"
            alt="Gemma models logo"
          />
        </div>
        <h2
          className="gemini-gem-advantage__title gemini-type-t1-medium gemini-space-d16"
          id="responsible-by-design"
          data-text="       Responsible by design     "
        >
          {props.title}
        </h2>
        <p className="gemini-gem-advantage__copy gemini-type-b2">
          {props.description}
        </p>
      </div>
    </div>
  );
}

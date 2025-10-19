interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, alignment = "left" }: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${alignment === "center" ? "items-center text-center" : "text-left"}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base text-slate-600 sm:max-w-3xl">{description}</p>
      ) : null}
    </div>
  );
}

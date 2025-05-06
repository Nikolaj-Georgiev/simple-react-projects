import { twMerge } from "tailwind-merge";

function Label({ htmlFor, className, children }) {
  className = className === "honeypot" ? "hidden" : className;
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        "text-stone-50 font-bold mb-1 text-left text-xs uppercase",
        className
      )}
    >
      {children}
    </label>
  );
}

export default Label;

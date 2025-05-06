import { twMerge } from "tailwind-merge";

function Input({ isTextArea, className, ...props }) {
  className = className === "honeypot" ? "hidden" : className;
  const Component = isTextArea ? "textarea" : "input";
  return (
    <Component
      className={twMerge(
        "w-full bg-stone-800 text-stone-50 border border-stone-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-stone-600",
        className
      )}
      {...props}
    />
  );
}

export default Input;

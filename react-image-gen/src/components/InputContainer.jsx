import { twMerge } from "tailwind-merge";

function InputContainer({ children, className }) {
  className = className === "honeypot" ? "hidden" : className;
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>{children}</div>
  );
  // return <p className="flex flex-col">{children}</p>;
}

export default InputContainer;

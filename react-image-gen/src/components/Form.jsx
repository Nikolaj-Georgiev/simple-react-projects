import { twMerge } from "tailwind-merge";

function Form({ children, className }) {
  return (
    <form
      className={twMerge(
        "bg-stone-700 p-4 rounded-lg flex flex-col gap-3",
        className
      )}
    >
      {children}
    </form>
  );
}

export default Form;

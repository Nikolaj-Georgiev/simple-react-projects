import { twMerge } from "tailwind-merge";

function Button({
  children,
  variant = "primary",
  disabled = false,
  className,
  ...props
}) {
  const baseStyles = "py-2 px-4 rounded-md transition-colors duration-200";

  const variantStyles = {
    primary:
      "bg-sky-400 text-black hover:bg-sky-500 disabled:bg-stone-400 disabled:text-stone-600",
    secondary: "bg-transparent text-stone-200 hover:text-stone-400",
  };

  return (
    <button
      disabled={disabled}
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        "disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

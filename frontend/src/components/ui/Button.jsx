function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const base =
  "min-w-[170px] px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md",

    secondary:
      "bg-white border border-slate-300 text-slate-800 hover:bg-slate-100",

    danger:
      "bg-red-500 text-white hover:bg-red-600 shadow-md",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
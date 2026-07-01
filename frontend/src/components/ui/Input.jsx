function Input({
  type = "text",
  placeholder = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        rounded-xl
        border
        border-slate-300
        bg-white
        p-3
        outline-none
        transition
        duration-300
        focus:border-blue-600
        focus:ring-2
        focus:ring-blue-200
      "
    />
  );
}

export default Input;
function Input({
  children,
  type = "text",
  placeholder = "Enter something..",
  className,
  value,
  onChange,
  disabled,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {children}
    </>
  );
}

export default Input;

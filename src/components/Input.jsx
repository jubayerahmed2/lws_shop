function Input({
  children,
  type = "text",
  placeholder = "Enter something..",
  className,
  value,
  onChange,
  disabled,
}) {
  const optionalFields = [value, onChange, disabled].filter((field) => field);
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...optionalFields}
      />
      {children}
    </>
  );
}
export default Input;

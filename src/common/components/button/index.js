const Button = ({ children, className, ...props }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

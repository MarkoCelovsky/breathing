const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={props.style}
      className="text-center text-xl font-semibold mt-4 p-3 px-5 rounded-lg
       bg-gray-300 hover:bg-slate-500 hover:border-slate-500 hover:text-white"
    >
      {props.value}
    </button>
  );
};

export default Button;

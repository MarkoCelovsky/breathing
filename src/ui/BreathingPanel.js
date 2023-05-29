const BreathingPanel = (props) => {
  return (
    <div
      className={`mt-12 w-11/12 m-auto rounded-lg shadow-2xl  ${
        props.isInhaling.current ? "bg-green-600" : "bg-red-600"
      }`}
    >
      <h1 className="text-3xl mb-2 text-center pt-4 shadow-md">
        {props.isInhaling.current ? "Inhale" : "Exhale"}
      </h1>
      <div className="flex p-8">
        <h2 className="w-1/2 text-center text-2xl ">{props.time.toFixed(1)}</h2>
        <h2 className="border-l-2 w-1/2 text-2xl border-gray-400 text-center ">
          Number of Rounds: {props.rounds}
        </h2>
      </div>
    </div>
  );
};

export default BreathingPanel;

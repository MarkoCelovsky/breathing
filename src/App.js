import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="m-8">
      <ul className="flex flex-col">
        <Link className="hover:text-blue-300" to={`/breathing/`}>
          First Breathing Exercise
        </Link>
        <Link className="hover:text-blue-300 mt-3" to={`/breathing/`}>
          Second Breathing Exercise
        </Link>
      </ul>
    </div>
  );
}

export default App;

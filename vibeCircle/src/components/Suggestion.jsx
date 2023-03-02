import React from "react";

import Sugg from "./Sugg";

function Suggestion() {
  return (
    <>
      <div className="hidden absolute left-10 top-12 h-96  overflow-y-scroll  md:block">
        <h1 className="text-center text-xl">Friends Suggestion</h1>
        <div className="flex flex-col">
          <Sugg />
          <Sugg />
          <Sugg />
        </div>
      </div>
    </>
  );
}

export default Suggestion;

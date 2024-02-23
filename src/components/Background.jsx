import React from "react";

function Background() {
    
  return (
    <>
      <div className="fixed z-[2] w-full h-screen ">

        <div className="w-full absolute top-[5%] py-10 flex justify-center text-zinc-600 text-xl font-semibold">
          Documents.
        </div>
        <div className="font-medium absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] text-9xl text-zinc-900 leading-none tracking-tighter flex items-center justify-center">
          Docs 

        </div>
      </div>
    </>
  );
}

export default Background;

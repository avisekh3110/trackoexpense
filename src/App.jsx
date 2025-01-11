import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-bold flex justify-center items-center bg-slate-400 min-h-screen min-w-full">
      <div className="flex gap-4 bg-white">
        <div className="text-xl animate-swipe flex ">TRACKOEXPENSE</div>
        <div className="text-xl animate-swipe flex ">TRACKOEXPENSE</div>
        <div className="text-xl animate-swipe flex ">TRACKOEXPENSE</div>
        <div className="text-xl animate-swipe flex ">TRACKOEXPENSE</div>
        <div className="text-xl animate-swipe flex ">TRACKOEXPENSE</div>
        <div className="text-xl animate-swipe flex ">TRACKOEXPENSE</div>
        <div className="text-xl animate-swipe flex ">TRACKOEXPENSE</div>
        <div className="text-xl animate-swipe flex ">TRACKOEXPENSE</div>
        <div className="text-xl animate-swipe flex ">TRACKOEXPENSE</div>
      </div>
    </div>
  );
}

export default App;

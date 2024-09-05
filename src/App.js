import LeftWidgets from "./components/LeftWidgets.jsx";
import RightTopWidgets from "./components/RightTopWidgets.jsx";

function App() {
  return (
    <div className="bg-[#373E44] w-[1728px] h-[895px] rounded-[27px] flex overflow-hidden">
      <div className="flex-shrink-0 w-[836px]">
        <LeftWidgets />
      </div>
      <div className="flex-shrink-0 w-[720px]">
        <RightTopWidgets />
        <RightTopWidgets />
      </div>
    </div>
  );
}

export default App;

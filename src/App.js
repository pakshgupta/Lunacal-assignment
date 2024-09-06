import LeftWidgets from "./components/LeftWidgets.jsx";
import RightTopWidgets from "./components/RightTopWidgets.jsx";

function App() {
  return (
    <div className="bg-[#373E44] w-[1728px] h-[895px] -top-[1468px] -left-[910px] gap-0 rounded-[28px] flex " style={{
      backgroundImage: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',
    }}>
     <div className="m-10 flex">
     <LeftWidgets/>
     <RightTopWidgets/>
     </div>
    </div>
  );
}

export default App;

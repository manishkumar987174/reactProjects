import Testimonal from "./components/Testimonal";
import Card from "./components/Card";
import Data from "./Data";

function App() {
  return (
    <>
      <div className="flex items-center justify-center flex-col  bg-gray-200 h-[100vh] w-[100vw]">
        <div className="text-center">
          <h1 className=" font-bold text-center text-4xl capitalize ">
            Our Testimonial
          </h1>
          <div className="bg-violet-400 h-[4px] w-1/4 mx-auto mt-1 "></div>
          <Testimonal data={Data} />
        </div>
      </div>
    </>
  );
}

export default App;

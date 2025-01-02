import bgImg from "./assets/oggyhome.webp";
import bg from "./assets/mainBg.jpg";
import CircleGrid from "./components/circle";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-slate-600">
        <div
          className="min-h-screen flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="font-semibold text-[50px] text-gray-50 mb-4">Whack a Roach</div>
          <div
            className="h-[480px] w-[480px] flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundPosition: "center",
            }}
          >
            <CircleGrid/>
          </div>
          <div className="font-medium text-[30px] text-gray-50 mt-3"> Point Scored :{} </div>  
        </div>
      </div>
    </>
  );
}

export default App;

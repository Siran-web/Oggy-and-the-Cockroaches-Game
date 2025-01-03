import bgImg from "./assets/oggyhome.webp";
import bg from "./assets/mainBg.jpg";
import CircleGrid from "./components/circle";
import { useState} from "react";

function App() {
    const [point,setPoint] = useState(0);
    const [gameOver,setGameOver] = useState(false);
  
    const handleClick = ()=>{
      setPoint((prevPoint)=>prevPoint+5);
    };

    const handleClickOggy = ()=>{
      setGameOver(true);
    }

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
          <div className="font-semibold text-[50px] text-white mb-4">Whack a Roach</div>
          {gameOver ? (
          <>
            <div className="font-bold text-red-600 text-[40px]">
              Game Over! Final Score: {point}
              </div>
              <button className="text-white bg-red-600 opacity-90 text-[25px] rounded-md mt-5 p-2"> Start new Game</button> 
          </>
          ) : (
          <div
            className="h-[480px] w-[480px] flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundPosition: "center",
            }}
          >
            <CircleGrid handleClick={handleClick} handleClickOggy = {handleClickOggy}/>
          </div>)}
          <div className="font-medium text-[30px] text-white mt-3"> Point Scored :{point} </div>  
        </div>
      </div>
    </>
  );
}

export default App;

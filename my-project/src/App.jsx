import bgImg from "./assets/oggyhome.webp";
import bg from "./assets/mainBg.jpg";
import CircleGrid from "./components/circle";
import audio from "./assets/startBg.mp3";
import fail from "./assets/Fail.mp3";
import { useState, useRef } from "react";
import beat from "./assets/beat.mp3";
import cursor from './assets/cursor.png';

function App() {
  const [point, setPoint] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [start, setStart] = useState(false);
  const audioRef = useRef(null);
  const failRef = useRef(null);
  const beatRef = useRef(null);

  const startGame = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setGameOver(false);
    setStart(true);
    setPoint(0);
  };

  const handleClick = () => {
    event.preventDefault();
    setPoint((prevPoint) => prevPoint + 5);
    if (beatRef.current) {
      beatRef.current.currentTime = 0;
      beatRef.current.play();
    }
  };

  const handleClickOggy = () => {
    setGameOver(true);
    if (failRef.current) {
      failRef.current.play();
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <>
      <div className="w-full h-screen font-serif bg-slate-600">
        <div
          className="min-h-screen flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="font-semibold text-[60px] bg-gradient-to-r from-purple-950 via-purple-700 to-purple-950 bg-clip-text text-transparent mb-4">
            Whack a Roach
          </div>
          {!start ? (
            <>
              <button
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-700 opacity-90 text-[25px] rounded-md mt-5 p-2"
                onClick={startGame}
              >
                {" "}
                Start Game
              </button>
            </>
          ) : (
            <>
              {gameOver ? (
                <>
                  <div className="font-bold text-red-600 text-[40px]">
                    <audio src={fail} autoPlay />
                    Game Over! Final Score: {point}
                  </div>
                  <button
                    className="text-orange-50 bg-gradient-to-r from-red-600 via-red-400 to-red-600 opacity-90 text-[25px] rounded-md mt-5 p-2"
                    onClick={startGame}
                  >
                    {" "}
                    Start new Game
                  </button>
                </>
              ) : (
                <div className=" flex flex-col justify-center items-center"
                  style={{
                    cursor :`url(${cursor}),auto`,
                  }}>
                  <div
                    className="h-[480px] w-[480px] flex justify-center items-center rounded-lg"
                    style={{
                      backgroundImage: `url(${bg})`,
                      backgroundPosition: "center",
                    }}
                  >
                    {" "}
                    <audio src={audio} autoPlay loop />
                    <audio ref={beatRef} src={beat} />
                    <CircleGrid
                      handleClick={handleClick}
                      handleClickOggy={handleClickOggy}
                    />
                  </div>
                  <div className="font-semibold text-[30px] text-red-950 mt-3">
                    {" "}
                    Point Scored : {point}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

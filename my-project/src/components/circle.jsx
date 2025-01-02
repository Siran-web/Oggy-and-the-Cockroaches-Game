import { useState, useEffect } from "react";
import cockroach from "../assets/Cockroach.png";
import cockroach2 from '../assets/Cockroach3.png';
import cockroach3 from '../assets/Cockroach4.png';

const CircleGrid = () => {
  const circles = Array.from({ length: 16 });
  const [currIndex1, setCurrIndex1] = useState(null);
  const [currIndex2,setCurrIndex2] = useState(null);
  const [currIndex3,setCurrIndex3] = useState(null);

  useEffect(() => {
    const moveCockroach = ()=>{
      const randomIndex = Math.floor(Math.random()*circles.length);
      setCurrIndex1(randomIndex);
    }
    const interval = setInterval(moveCockroach,1000);
    return () =>clearInterval(interval);
  },[circles.length]);

  useEffect(()=>{
    const moveCockroach = ()=>{
      const randomIndex = Math.floor(Math.random()*circles.length);
      setCurrIndex2(randomIndex);
    }
    const interval = setInterval(moveCockroach,1000);
    return()=>clearInterval(interval); 
  },[circles.length]);

  useEffect(()=>{
    const moveCockroach = ()=>{
      const randomIndex = Math.floor(Math.random()*circles.length);
      setCurrIndex3(randomIndex);
    }
    const interval = setInterval(moveCockroach,1000);
    return()=>clearInterval(interval); 
  },[circles.length]);

  return (
    <div className="grid grid-cols-4 gap-14">
      {circles.map((_, index) => (
        <div
          key={index}
          className="h-16 w-16 border-4 border-red-950 rounded-full flex justify-center items-center"
        >
           {currIndex1 === index && currIndex1 != currIndex3 && (
            <img
              src={cockroach}
              alt="Cockroach"
              className="h-18 w-16 absolute"
            />
          )}
           {currIndex2 === index && currIndex2 !== currIndex1 && (
            <img
              src={cockroach2}
              alt="Cockroach"
              className="h-16 w-12 absolute"
            />
          )}
          {currIndex3 === index && currIndex3 !== currIndex2 &&  (
            <img
              src={cockroach3}
              alt="Cockroach"
              className="h-14 w-[90px] absolute"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CircleGrid;

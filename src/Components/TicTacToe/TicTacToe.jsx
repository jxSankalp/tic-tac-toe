import React, { useRef, useState } from "react";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";
import Box from "./Box";

function TicTacToe() {

  const[arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let title = useRef(null);

  const toogle = (e, num) => {
    if (lock) {
      return 0;
    }

    let newArr = [...arr]; 
    if (count % 2 === 0) {
      newArr[num] = "X";
      e.target.innerHTML = `<img src='${cross_icon}' style='margin: 30px'/> `;
    } else {
      newArr[num] = "O";
      e.target.innerHTML = `<img src='${circle_icon}' style='margin: 17px '/>`;
    }
    setArr(newArr); 
    setCount(count + 1);
    checkWinner(newArr);
  };

  const checkWinner = (arr) => {
    console.log(arr[0]);

    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] !== "") {
      won(arr[2]);
    } else if (arr[3] === arr[4] && arr[4] === arr[5] && arr[5] !== "") {
      won(arr[5]);
    } else if (arr[6] === arr[7] && arr[7] === arr[8] && arr[8] !== "") {
      won(arr[8]);
    } else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[6] !== "") {
      won(arr[6]);
    } else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[7] !== "") {
      won(arr[7]);
    } else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[8] !== "") {
      won(arr[8]);
    } else if (arr[0] === arr[4] && arr[4] === arr[8] && arr[8] !== "") {
      won(arr[8]);
    } else if (arr[2] === arr[4] && arr[4] === arr[6] && arr[6] !== "") {
      won(arr[6]);
    }


    if (count === 8) {
      declareDraw();
    }
  };

  const won = (winner) => {
    setLock(true);

    if (winner === "X") {
      title.current.innerHTML = `Congratulation: <img src='${cross_icon}' style='width:40px; height:40px; margin: 10px'/>`;
    } else {
      title.current.innerHTML = `Congratulation: <img src='${circle_icon}' style='width:40px; height:40px; margin: 10px'/>`;
    }
  };

  const declareDraw = () => {
    title.current.innerHTML = "It's a draw!";
  };

  const reset=()=>{
    setLock(false);
    setArr(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    title.current.innerHTML = `Tic Tac Toe Game in &nbsp;<span style='color:#63fac6'>React</span>`;

    document.querySelectorAll(".box").forEach((box) => {
      box.innerHTML = "";
    });

  }

  return (
    <div className=" w-full h-screen" style={{ backgroundColor: "#101b25" }}>
      <h1
        className="flex justify-center pt-[100px] text-5xl font-bold"
        style={{ color: "#f7fbfd" }}
        ref={title}
      >
        Tic Tac Toe Game in &nbsp;
        <span style={{ color: "#63fac6" }}>React</span>
      </h1>

      <div className="w-auto h-auto pt-[70px]">
        <div className="flex justify-center gap-1 mb-1">
          <Box handle={toogle} tempKey={0} />
          <Box handle={toogle} tempKey={1} />
          <Box handle={toogle} tempKey={2} />
        </div>
        <div className="flex justify-center gap-1 mb-1">
          <Box handle={toogle} tempKey={3} />
          <Box handle={toogle} tempKey={4} />
          <Box handle={toogle} tempKey={5} />
        </div>
        <div className="flex justify-center gap-1 mb-1">
          <Box handle={toogle} tempKey={6} />
          <Box handle={toogle} tempKey={7} />
          <Box handle={toogle} tempKey={8} />
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <button
          className="p-2 px-6 rounded-full text-2xl "
          style={{ backgroundColor: "#1d2b35", color: "#56b19f" }}
          onClick={()=>{reset()}}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;

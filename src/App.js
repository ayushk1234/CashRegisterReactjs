// import { useState } from "react";
import "./styles.css";
import React, { useState } from "react";

var domination = [2000, 500, 20, 10, 5, 1];
var dominationList = {
  2000: " ",
  500: "",
  100: "",
  20: "",
  5: "",
  1: ""
};
var dinoArray = Object.keys(dominationList);

export default function App() {
  const [bill, setBill] = useState(0);
  const [nbill, setnBill] = useState();
  const [cash, setCash] = useState(0);

  function changeEventHandler(amt) {
    var value = amt.target.value;
    // console.log(value);
    setBill(value);
  }

  function clickEventHandler() {
    var validMsg = document.getElementById("myDIV");
    var amtPaid = document.getElementById("Paid");
    var next = document.getElementById("Next");
    console.log(next);
    // console.log(amtPaid);

    if (bill > 0) {
      // console.log(bill);
      validMsg.style.display = "none";
      amtPaid.style.display = "block";
      next.style.display = "none";

      setnBill(bill);
    } else {
      // console.log(nbill);
      validMsg.style.display = "block";
      next.style.display = "block";
      setnBill("enter valid amount");
    }
  }

  function cashChangeEventHandler(paid) {
    setCash(paid.target.value);
    // console.log(cash);
  }

  function resultClickEventHandler() {
    // console.log(nbill, cash);
    var validMsg = document.getElementById("cashMsg");

    if (cash > nbill) {
      validMsg.style.display = "none";
      var nextdino = cash - nbill;
      domination.map((item, index) => {
        dominationList[item] = Math.floor(nextdino / item);

        // console.log(index, item, dominationList[item], nextdino);
        nextdino = nextdino - item * dominationList[item];
      });
    } else if (cash === nbill) {
      validMsg.style.display = "block";
      setCash("no amt to be return ");
    } else {
      validMsg.style.display = "block";
      setCash("plese enter valid cash amt");
    }
  }

  return (
    <div className="App">
      {/* <h1>Hello User</h1> */}
      <h2>Bill Amount</h2>
      <input onChange={changeEventHandler} type="number" />
      <div>
        <button onClick={clickEventHandler} id="Next">
          Next
        </button>
      </div>

      <div id="myDIV">{nbill}</div>

      <div id="Paid">
        <input onChange={cashChangeEventHandler} type="number" />
        <div className="ul">
          <button onClick={resultClickEventHandler}>Return denominator</button>
        </div>
      </div>
      <div id="cashMsg">{cash}</div>

      <div id="listDino">
        <ul>
          {domination.map((item) => {
            return (
              <li className="l" key={item}>
                {item}
              </li>
            );
          })}
        </ul>

        <ul>
          {dinoArray.map((item) => {
            return (
              <li className="l" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

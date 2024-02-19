const allBtn = document.getElementsByClassName(
  "btn" && "px-9" && "text-[#03071280]" && "w-28"
);
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count += 1;
    let seat = e.target;
    if (seat.classList.contains("bg-primary-color")) {
      alert("You Clicked This Item Again");
      return;
    }
    if (count >= 5) {
      alert();
      return;
    }
    seat.classList.add("bg-primary-color");

    let seatName = e.target.innerText;
    let selectedContainer = document.getElementById("seat-details");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    const p3 = document.createElement("p");
    p3.innerText = 550;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    const display = selectedContainer.appendChild(li);
    display.classList.add("flex", "justify-between", "text-[#03071299]");
    let availableSeat = document.getElementById("available-seat").innerText;
    let convertedSeat = parseInt(availableSeat);
    convertedSeat -= 1;
    setInnerText("available-seat", convertedSeat);
    totalCost("total-cost", parseInt(p3.innerText));
    GrandTotalCost("grand-total", parseInt(p3.innerText));
    setInnerText("seat-count", count);
  });
}

// let validation = code();
// if (validation === "NEW15") {
//   console.log("matched");
// } else "not matching";
// function code(e) {
//   //   console.log(e.target.parentNode.parentNode.childNodes[1].value);
//   return e.target.parentNode.parentNode.childNodes[1].value;
// }
// const btn = document.getElementById("coupon-button");
// btn.addEventListener("click", code);
// shared styles

// document
//   .getElementById("coupon-button")
//   .addEventListener("click", function couponCodeText(e) {
//     return e.target.parentNode.parentNode.childNodes[1].value;
//   });

function totalCost(id, value) {
  let totalCost = document.getElementById(id).innerText;
  let convertedTotalCost = parseInt(totalCost);
  let sum = convertedTotalCost + value;
  setInnerText("total-cost", sum);
}
function GrandTotalCost(id, value) {
  const totalCost = document.getElementById("total-cost").innerText;
  const convertedGrandTotalCost = parseInt(totalCost);
  setInnerText("grand-total", convertedGrandTotalCost);
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

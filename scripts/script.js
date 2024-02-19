const allBtn = document.getElementsByClassName(
  "btn" && "px-9" && "text-[#03071280]" && "w-28"
);
let count = 0;
let totalPrice = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count += 1;
    let seat = e.target;
    if (seat.classList.contains("bg-primary-color")) {
      alert("You Clicked This Item Again");
      return;
    }
    if (count >= 5) {
      alert("You Can Buy Maximum 4 Seat");
      return;
    }
    seat.classList.add("bg-primary-color");
    let disabled = document.getElementById("button");
    let numb = document.getElementById("seat-count").innerText;
    // console.log(parseInt(numb));
    if (parseInt(numb) === 3) {
      disabled.removeAttribute("disabled");
    }
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
    p3.classList.add("price");
    const display = selectedContainer.appendChild(li);
    display.classList.add("flex", "justify-between", "text-[#03071299]");
    let availableSeat = document.getElementById("available-seat").innerText;
    let convertedSeat = parseInt(availableSeat);
    convertedSeat -= 1;
    setInnerText("available-seat", convertedSeat);
    totalCost("total-cost", parseInt(p3.innerText));
    GrandTotalCost("grand-total", parseInt(p3.innerText));
    setInnerText("seat-count", count);
    document
      .getElementById("coupon-texts")
      .addEventListener("keyup", function (e) {
        const text = e.target.value;
        console.log(text);
        let next = document.getElementById("pop-up");
        let n = document.getElementById("seat-count").innerText;
        let numbers = document.getElementById("coupon-texts").value;
        console.log(numbers);
        if (parseInt(n) != 0 && numbers !== "") {
          next.removeAttribute("disabled");
        }
      });
    let next = document.getElementById("pop-up");
    let n = document.getElementById("seat-count").innerText;
    let numbers = document.getElementById("coupon-texts").value;
    // console.log(numbers);
    if (numbers !== "") {
      next.removeAttribute("disabled");
    }
  });
}

function validation() {
  let check = document.getElementById("coupon-text").value;
  if (check === "NEW15") {
    let id = document.getElementById("total-cost");
    let totalPrice = parseInt(id.innerText);
    // console.log(totalPrice);

    let selectedContainer = document.getElementById("discount");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = "Discounted Price";
    const p2 = document.createElement("p");
    p2.innerText = (totalPrice * 15) / 100;
    li.appendChild(p);
    li.appendChild(p2);
    // console.log(price);
    const display = selectedContainer.appendChild(li);
    display.classList.add("flex", "justify-between", "font-medium");
    const input = document.getElementById("ipt");
    input.classList.add("hidden");
    let grandTotal = parseInt(document.getElementById("grand-total").innerText);
    let grandPrice = grandTotal - parseInt(p2.innerText);
    console.log(grandPrice);
    setInnerText("grand-total", grandPrice);
  } else if (check === "Couple 20") {
    let id = document.getElementById("total-cost");
    let totalPrice = parseInt(id.innerText);
    // console.log(totalPrice);

    let selectedContainer = document.getElementById("discount");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = "Discounted Price";
    const p2 = document.createElement("p");
    p2.innerText = (totalPrice * 20) / 100;
    li.appendChild(p);
    li.appendChild(p2);
    // console.log(price);
    const display = selectedContainer.appendChild(li);
    display.classList.add("flex", "justify-between", "font-medium");
    const input = document.getElementById("ipt");
    input.classList.add("hidden");
    let grandTotal = parseInt(document.getElementById("grand-total").innerText);
    let grandPrice = grandTotal - parseInt(p2.innerText);
    console.log(grandPrice);
    setInnerText("grand-total", grandPrice);
  }
}

// shared styles
function totalCost(id, value) {
  let totalCost = document.getElementById(id).innerText;
  let convertedTotalCost = parseInt(totalCost);
  let sum = convertedTotalCost + value;
  setInnerText("total-cost", sum);
}
function GrandTotalCost() {
  const totalCost = document.getElementById("total-cost").innerText;
  const convertedGrandTotalCost = parseInt(totalCost);
  setInnerText("grand-total", convertedGrandTotalCost);
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
// let counting = document.getElementById("seat-count").innerText;

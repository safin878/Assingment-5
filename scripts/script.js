const allBtn = document.getElementsByClassName(
  "btn" && "px-9" && "text-[#03071280]" && "w-28"
);
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count += 1;

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

    const i = selectedContainer.appendChild(li);
    i.classList.add("flex", "justify-between", "text-[#03071299]");
    totalCost("total-cost", parseInt(p3.innerText));
    GrandTotalCost("grand-total", parseInt(p3.innerText));
    setInnerText("seat-count", count);
  });
}
// shared styles
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

const allBtn = document.getElementsByClassName(
  "btn" && "px-9" && "text-[#03071280]" && "w-28"
);
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count += 1;
    console.log(count);
  });
}

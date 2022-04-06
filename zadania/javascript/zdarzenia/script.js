const btns = document.querySelectorAll("button");
const inpColor = document.querySelector("#inpChange");
const inpPass = document.querySelector("#login");
const exampleText = document.querySelector("#exampleText");
let showed = false;

console.log(btns);
console.log(inpColor);

for (const btn of btns) {
  if (btn == btns[0]) {
    btn.addEventListener("click", () => {
      console.log("%cNaciśnięto pierwszy przycisk", "background-color: gold");
    });
  } else if (btn == btns[1]) {
    btn.addEventListener("dblclick", () => {
      if (showed == false) {
        exampleText.style.display = "flex";
        showed = true;
      } else {
        exampleText.style.display = "none";
        showed = false;
      }
    });
  } else if (btn == btns[2]) {
    btn.addEventListener("mouseenter", () => {
      document.body.style.backgroundColor = "red";
    });
    btn.addEventListener("mouseleave", () => {
      document.body.style.backgroundColor = "#1F1F1F";
    });
  } else if (btn == btns[3]) {
    btn.addEventListener("mouseout", () => {
      let i = 1;
      while (i <= 10) {
        console.log("teskt " + i);
        i++;
      }
    });
  }
}

inpColor.addEventListener("blur", () => {
  console.log("cos");
  document.body.style.backgroundColor = inpColor.value;
});

inpPass.addEventListener("focus", () => {
  console.log(
    "%cUżytkownik wpisuje hasło",
    "background-color: green; color: white;"
  );
});

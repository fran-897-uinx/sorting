const show = () => {
  const list = document.querySelector("ul");
  list.style.display = "block";
  return;
};

const clos = () => {
  const list = document.querySelector("ul");
  list.style.display = "none";
  return;
};

const number = document.getElementById("number");
const numbe = document.getElementById("bin-num");
const hexi = document.getElementById("Hex-num");
const numhexi = document.getElementById("num-Hex");
const romshow = () => {
  number.style.display = "block";
  numbe.style.display = "none";
  hexi.style.display = "none";
  numhexi.style.display = "none";
  return;
};
const rovrom = () => {
  number.style.display = "none";
  numbe.style.display = "block";
  hexi.style.display = "none";
  numhexi.style.display = "none";
  return;
};
const binshow = () => {
  number.style.display = "none";
  numbe.style.display = "none";
  hexi.style.display = "block";
  numhexi.style.display = "none";
  return;
};

const rovbin = () => {
  number.style.display = "none";
  numbe.style.display = "none";
  hexi.style.display = "none";
  numhexi.style.display = "block";
  return;
};

const acend = () => {
  const input = document.getElementById("input").value.trim();
  const output = document.getElementById("result");
  if (input === "") {
    output.innerText = "please enter some numbers";
  }
  const object = input.split(",");
  if (object === "") {
    output.innerText = "please enter some numbers";
  }
  let arrray = [];
  arrray = object.sort((a, b) => b - a);
  output.innerText = `   ${arrray}`;
  output.style.fontWeight = "bold";
  return "";
};

const decend = () => {
  const input = document.getElementById("numberbinary").value.trim();
  const output = document.getElementById("result");
  if (input === "") {
    output.innerText = "please enter some numbers";
  }
  const object = input.split(",");
  if (object === "") {
    output.innerText = "please enter some numbers";
  }
  let arrray = [];
  if (arrray.length === "") {
    output.innerText = "please enter some numbers";
  }
  arrray = object.sort((a, b) => a - b);
  output.innerText = `   ${arrray}`;
  output.style.fontWeight = "bold";
  return "";
};

// const even = () => {
const input = document.getElementById("numberbinary").value.trim();
const output = document.getElementById("result");
if (input === "") {
  output.innerText = "please enter some numbers";
}
const object = input.split(",");
if (object === "") {
  output.innerText = "please enter some numbers";
} else {
  let arrray = [object];
  const fill = arrray.filter((n) => n % 2 === 0);
  output.innerText = `${fill}`;
}
// };

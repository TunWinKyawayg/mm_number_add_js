let output = document.getElementsByTagName("h2");
let num1 = document.getElementById("num1Id");
let num2 = document.getElementById("num2Id");

function mm2en(num) {
  var nums = {
    "၀": 0,
    "၁": 1,
    "၂": 2,
    "၃": 3,
    "၄": 4,
    "၅": 5,
    "၆": 6,
    "၇": 7,
    "၈": 8,
    "၉": 9,
  };
  return num.replace(/([၀-၉])/g, function (s, key) {
    return nums[key] || s;
  });
}

var en2mm = {
  0: "၀",
  1: "၁",
  2: "၂",
  3: "၃",
  4: "၄",
  5: "၅",
  6: "၆",
  7: "၇",
  8: "၈",
  9: "၉",
};

function addition(a, b) {
  let addNum = parseInt(mm2en(a)) + parseInt(mm2en(b));
  let result = addNum.toString().replace(/[0-9]/g, function (a) {
    return en2mm[a];
  });
  output[0].innerHTML = `Ans:${result}`;
}
function multiplication(a, b) {
  let addNum = parseInt(mm2en(a)) * parseInt(mm2en(b));
  let result = addNum.toString().replace(/[0-9]/g, function (a) {
    return en2mm[a];
  });
  output[0].innerHTML = `Ans:${result}`;
}
function subtraction(a, b) {
  let addNum = parseInt(mm2en(a)) - parseInt(mm2en(b));
  let result = addNum.toString().replace(/[0-9]/g, function (a) {
    return en2mm[a];
  });
  output[0].innerHTML = `Ans:${result}`;
}
function division(a, b) {
  let addNum = parseInt(mm2en(a)) / parseInt(mm2en(b));
  let result = addNum.toString().replace(/[0-9]/g, function (a) {
    return en2mm[a];
  });
  output[0].innerHTML = `Ans:${result}`;
}

$(document).ready(function() {
  var heading = $("h1");
  var btn = $(".btn");
  var content1 = [];
  var content2 = [];
  var screenContent = [];
  var num1 = 0;
  var num2 = 0;
  var operate = "";
  var result = 0;

  function updateDisplay() {
    heading.text(screenContent.join(""));
  }

  function istrue() {
    if (screenContent.includes("+")) {
      return false;
    }
    else if (screenContent.includes("-")) {
      return false;
    }
    else if (screenContent.includes("*")) {
      return false;
    }
    else if (screenContent.includes("/")) {
      return false;
    }
    else {
      return true;
    }
  }
  function del(content, num) {
    screenContent.pop();
    screenContent.pop();
    content.pop();
    updateDisplay();
    num = Number(content.join(""));
  }
  function clear() {
    num1 = 0;
    num2 = 0;
    content1 = [];
    content2 = [];
    screenContent = [];
    operate = [];
    result = 0;
    updateDisplay();
    heading.text(0);
  }
  $(".operators").click(function() {
    operate = this.innerHTML;
  });
  function calc(number1, number2, operator) {
    switch (operator) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        return number1 / number2;
      case "%":
        return number1
          % number2;
    }
  }
  var isAudioPlaying = false;

  $(".dot").click(function() {
    if (!isAudioPlaying) {
      var music = new Audio("./roll.mp3")
      music.play();
      isAudioPlaying = true;
      $(".none").removeClass("none");
      music.addEventListener("ended", function() {
        isAudioPlaying = false;
        $(".createdBy").addClass("none");
      });
    }
  });

  $(btn).click(function() {
    var clickedBtn = this.innerHTML;
    screenContent.push(clickedBtn);
    if (istrue() === true) {
      if ($(this).hasClass("num")) {
        content1.push(clickedBtn);
        if (screenContent.length === 1 && screenContent[0] === "-") {
          // Handle negative numbers
          content1.push("-");
          num1 = Number(content1.join(""));
        }
        num1 = Number(content1.join(""));
        console.log(num1);
        updateDisplay();
      }
      else if ($(this).hasClass("delete")) {
        del(content1, num1);
      }
      else if ($(this).hasClass("clear")) {
        clear();
      }
    }
    else if (istrue() === false) {
      updateDisplay();
      if ($(this).hasClass("num")) {
        content2.push(clickedBtn);
        num2 = Number(content2.join(""));
        updateDisplay();

      }

      else if ($(this).hasClass("delete")) {
        del(content2, num2);
      }
      else if ($(this).hasClass("clear")) {
        clear();
      }
      else if ($(this).hasClass("equal")) {
        if (operate === '+') {
          console.log(operate);
          result = calc(num1, num2, operate);
          heading.text(result);
        }
        if (operate === '-') {
          console.log(operate);
          result = calc(num1, num2, operate);
          heading.text(result);
        }
        if (operate === '*') {
          console.log(operate);
          result = calc(num1, num2, operate);
          heading.text(result);
        }
        if (operate === '/') {
          console.log(operate);
          result = calc(num1, num2, operate);
          heading.text(result);
        }
        if (operate === '%') {
          console.log(operate);
          result = calc(num1, num2, operate);
          heading.text(result);
        }
        if (operate !== "") {
          result = calc(num1, num2, operate);
          heading.text(result);
          screenContent = [result];
          num1 = result;
          num2 = 0;
          content1 = [String(result)];
          content2 = [];
          operate = "";
        }
      }
    }
  });
});
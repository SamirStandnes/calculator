$(function() {
  const BUTTONSYMBOLS = [
    "AC",
    "CE",
    "/",
    "X",
    7,
    8,
    9,
    "+",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    ".",
    0,
    "="
  ]; // Values/symbols to populate buttons

  $.each(BUTTONSYMBOLS, function(index, value) {
    if (value === 0) {
      $(".one").append(
        "<button class='button' style='width:43.5%';id='" +
          value +
          "'> " +
          value +
          "</button>"
      );
    } else if (value == "=") {
      $(".one").append(
        "<button class='button' style='width:43.5%';  id='" +
          value +
          "'> " +
          value +
          "</button>"
      );
    } else {
      $(".one").append(
        "<button class='button' id='" + value + "'> " + value + "</button>"
      );
    }
  }); // Populate the buttons

  let result = [];

  $(".button").click(function() {
    let display = $(this).text();
    let id = this.id;   // Using uniq ID value, created for each button (i.e buttonsymbol), from pressed button, as value in evaluation expression.   
    
    if (result.length <= 22 && display.length <= 20) {
      switch (id) {
        case "AC":
          display = "";
          result = [""];
          break;
        case "CE":
          display = "";
          result.pop();

          break;
        case "=":
          var sum = eval(result.join("")); // eval is not always evil!
          display = sum;
          break;

        case "+":
          result.push(id.toString());
          break;
        case "-":
          result.push(id.toString());
          break;
        case "/":
          result.push(id.toString());
          break;
        case "X":
          result.push("*");
          break;
        case ".":
          result.push(id.toString());
          break;

        default:
          result.push(Number(id));
      }
     
      $(".display").text(display);
      $(".output").text(result.join(""));
    } else {
      $(".display").text("");
      $(".output").text("Max digit count");
      result = [];
    }
  }); // Click button events
});
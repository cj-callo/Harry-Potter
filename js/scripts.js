$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var characteristic = $("select#characteristic").val();
    var animal = $("select#animal").val();
    var color = $("select#color").val();

    var house = "";

    if (characteristic === "bravery" && color === "scarlet") {
      house = "Griffindor";
    } else if (characteristic === "bravery" && animal === "lion") {
      house = "Griffindor";
    } else if (color === "scarlet" && animal === "lion") {
      house = "Griffindor";
    } else if (color === "yellow" && animal === "badger") {
      house = "Hufflepuff";
    } else if (color === "yellow" && characteristic === "work") {
      house = "Hufflepuff";
    } else if (animal === "badger" && characteristic === "work") {
      house = "Hufflepuff";
    } else if (color === "blue" && characteristic === "intelligence") {
      house = "Ravenclaw";
    }  else if (color === "blue" && animal === "eagle") {
      house = "Ravenclaw";
    }  else if (animal === "eagle" && characteristic === "intelligence") {
      house = "Ravenclaw";
    }  else if (color === "silver" && characteristic === "winning") {
      house = "Slytherin";
    } else if (color === "silver" && animal === "snake") {
      house = "Slytherin";
    } else if (animal === "snake" && characteristic === "winning") {
      house = "Slytherin";
    } else {
      house = "Muggle";
    }
    $("#house").text(house);
      $("#output").show();
    event.preventDefault();
  });
});

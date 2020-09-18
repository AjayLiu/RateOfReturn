//Calculate formula on input
$("#numerator, #denominator").on("input", function (e) {
  var num = $("#numerator").val();
  var den = $("#denominator").val();
  if (!isNaN(num) && !isNaN(den) && num != "" && den != "") {
    $("#answer").html(((num / den) * 100).toFixed(2) + "%");
  } else {
    $("#answer").html("??");
  }
});

//Scroll into view on button click
$("#viewButton").click(function () {
  document
    .getElementById("aboutSection")
    .scrollIntoView({ behavior: "smooth" });
});

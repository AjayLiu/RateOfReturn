$("#viewButton").click(function () {
  document
    .getElementById("aboutSection")
    .scrollIntoView({ behavior: "smooth" });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// NAVBAR SCROLLING

var sectionNames = ["about", "signup", "classes", "contact", "gallery", "faq"];

for (let i = 0; i < sectionNames.length; i++) {
  var name = sectionNames[i];
  var links = document.getElementsByClassName("link_" + name);
  for (let j = 0; j < links.length; j++) {
    var elem = links[j];
    elem.style.cursor = "pointer";
    $(links[j]).click(function () {
      var offset = $("#" + sectionNames[i] + "Section").offset();
      $("html, body").animate(
        {
          scrollTop: offset.top,
        },
        1000
      );
    });
  }
}

//GALLERY
$("#gallery").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
});

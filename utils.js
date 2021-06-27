var slideIndex = 1;
showDivs(slideIndex);

export function plusDivs(n) {
  showDivs((slideIndex += n));
}

export default function showDivs(n) {
  var i;
  if (typeof window === "object") {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
}

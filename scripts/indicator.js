window.addEventListener("scroll", () => {
  const body = document.getElementById("body");
  const scrollPosition = window.scrollY;
  const bodyHeight = body.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollableHeight = bodyHeight - windowHeight;
  const indicatorWidth = (scrollPosition / scrollableHeight) * 100;
  const indicator = document.querySelector("#indicator");
  if (indicator) indicator.style.width = `${indicatorWidth}%`;
});




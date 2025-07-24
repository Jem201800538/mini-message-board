window.addEventListener("load", () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "auto",
  });
});

const backToTopBtn = document.getElementById("backToTop");
const latestBtn = document.getElementById("latestBtn");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // Show/hide "Back to Top" button
  if (scrollY > 60) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }

  // Show/hide "Latest" button
  if (scrollY + windowHeight < docHeight - 60) {
    latestBtn.classList.remove("hidden");
  } else {
    latestBtn.classList.add("hidden");
  }
});

latestBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

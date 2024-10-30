window.addEventListener("scroll", () => {
  const header = getElementById("header");

  if (window.scrollY > 50) {
    header.classList.add("smallHeader");
  } else {
    header.classList.remove("smallHeader");
  }
});

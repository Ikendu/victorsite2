window.addEventListener("scroll", () => {
  const header = document.getElementById("headerStill");
  const logoId = document.getElementById("logoId");

  if (window.scrollY > 50) {
    header.classList.add("smallHeader");
    logoId.classList.add("logoSmall");
  } else {
    header.classList.remove("smallHeader");
    logoId.classList.remove("logoSmall");
  }
});

export default function scrollAnimation() {
  const handleScroll = () => {
    const sections = document.querySelectorAll(".grid-section");

    const alturaMinima = window.innerHeight * 0.8;

    sections.forEach((section) => {
      const altura = section.getBoundingClientRect().top;

      if (altura < alturaMinima) {
        section.classList.add("visible");
      } else if (section.classList.contains("visible")) {
        section.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
}

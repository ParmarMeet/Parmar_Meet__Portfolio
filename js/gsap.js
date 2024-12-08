(() => {
  window.onload = () => {
    gsap.from(
      "header, section, .icon, .main, .services-box, .info-box, h2, p, .social, .services-box .info-box, .contact-form",
      {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.2,
      }
    );

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        gsap.to(".arrow-link", { opacity: 1, display: "block", duration: 0.5 });
      } else {
        gsap.to(".arrow-link", { opacity: 0, display: "none", duration: 0.5 });
      }
    });

    document.querySelector(".arrow-link").addEventListener("click", () => {
      gsap.to(window, { scrollTo: 0, duration: 1 });
    });
  };
})();

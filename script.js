document.addEventListener("DOMContentLoaded", function() {
  const text = "Hello I'm Kyle Aspiring Front-End Developer";
  const speed = 200; // typing speed in milliseconds
  let index = 0;
  const headerText = document.getElementById("header-text");

  function typeWriter() {
    if (index < text.length) {
      headerText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

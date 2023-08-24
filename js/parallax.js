const container = document.getElementById("content_section_desktop");
const elements = document.querySelectorAll(".parallax-elements > *");

let scaleValue = 1; // Значення масштабу по замовчуванню

container.addEventListener("mousemove", function (event) {
  applyParallax(event.clientX, event.clientY);
});

container.addEventListener("touchmove", function (event) {
  const touchX = event.touches[0].clientX;
  const touchY = event.touches[0].clientY;
  applyParallax(touchX, touchY);
});

function applyParallax(x, y) {
  const containerRect = container.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;

  const mouseX = x - containerRect.left;
  const mouseY = y - containerRect.top;

  const maxMovement = 10;

  const offsetX =
    (mouseX - containerWidth / 2) * (maxMovement / (containerWidth / 2));
  const offsetY =
    (mouseY - containerHeight / 2) * (maxMovement / (containerHeight / 2));

  elements.forEach((element) => {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const elementOffsetX = -offsetX * speed * scaleValue; // Застосовуємо масштаб до зміщення
    const elementOffsetY = -offsetY * speed * scaleValue; // Застосовуємо масштаб до зміщення

    element.style.transform = `translate(${elementOffsetX}px, ${elementOffsetY}px)`;
  });
}

const buttons = document.querySelectorAll(
  ".button_krok_1, .button_krok_2, .button_krok_3"
);
let currentButtonIndex = 0;

function highlightButton() {
  buttons.forEach((button) => {
    button.style.boxShadow = ""; // Спочатку зняти підсвічування з усіх кнопок
    button.style.transform = "scale(1)"; // Повернути розмір до початкового значення
  });

  buttons[currentButtonIndex].style.boxShadow = "0 0 0 5px #FFCF00"; // Додали ободку з жовтим кольором
  buttons[currentButtonIndex].style.transform = "scale(1.10)"; // Збільшити розмір кнопки

  currentButtonIndex = (currentButtonIndex + 1) % buttons.length; // Перехід до наступної кнопки

  setTimeout(highlightButton, 1500); // Викликати функцію ще раз через 1 секунду
}

highlightButton(); // Запуск функції для початку анімації

document.addEventListener("DOMContentLoaded", function () {
  // Знаходимо логотип та кнопку
  const logo = document.querySelector(".container_content_section_logo img");
  const buttonsRedirect = document.querySelectorAll(".button_first_title");
  window.serverData = {
    clickUrl: "https://google.com",
  }; // Замініть на свою URL

  // Додаємо обробник події для кліку на логотип
  logo.addEventListener("click", function () {
    // Переходимо за посиланням зі змінної window.serverData.clickUrl
    window.location.href = window.serverData.clickUrl;
  });

  // Додаємо обробник події для кліку на кнопку
  buttonsRedirect.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Переходимо за посиланням зі змінної window.serverData.clickUrl
      window.location.href = window.serverData.clickUrl;
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button_first button");

  button.addEventListener("click", function () {
    button.classList.add("clicked"); // Додаємо клас "clicked" при кліку
  });
});

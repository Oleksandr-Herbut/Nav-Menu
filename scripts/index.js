// Функция для переключения состояния меню
function toggleMenu(isOpen) {
  const menu = document.querySelector("#sideMenu"); // Находим элемент с идентификатором 'sideMenu'
  // Скрываем или показываем кнопку 'menuButton' в зависимости от состояния меню
  document.querySelector("#menuButton").style.display = isOpen
    ? "none"
    : "inline-block";
  // Скрываем или показываем кнопку 'closeButton' в зависимости от состояния меню
  document.querySelector("#closeButton").style.display = isOpen
    ? "inline-block"
    : "none";
  // Добавляем или удаляем класс'open' у элемента 'sideMenu' в зависимости от состояния меню
  menu.classList.toggle("open", isOpen);
}

// Добавляем обработчик события 'click' для открытия меню
document
  .querySelector("#menuButton")
  .addEventListener("click", () => toggleMenu(true));

// Добавляем обработчик события 'click' для закрытия меню
document
  .querySelector("#closeButton")
  .addEventListener("click", () => toggleMenu(false));

// Добавляем обработчики событий 'click' для каждого пункта меню с классом 'menu-item'
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Переключаем видимость подпунктов меню
    const submenu = this.querySelector(".submenu");
    if (submenu) {
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    }
  });
});

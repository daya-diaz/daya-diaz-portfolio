const navbarPortfolio = document.querySelectorAll("navbarPortfolio");

function addClassActive(id) {
  const idElements = document.getElementsByClassName("navbarPortfolio");
  console.log(idElements);
  for (let item of idElements) {
    if (item.id === id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
}

const menuItems = document.querySelectorAll(".header-navigation a");

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const toSection = document.querySelector(id).offsetTop;

  window.scroll({
    top: toSection - 140,
    behavior: "smooth",
  });
}

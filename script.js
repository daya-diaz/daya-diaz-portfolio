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

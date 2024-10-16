const Form = document.getElementById("form");
Form.addEventListener("submit", function (e) {
  e.preventDefault();

  const items = document.getElementById("items");

  const newItems = {
    firstItems: items.value,
  };
  console.log(newItems);
});

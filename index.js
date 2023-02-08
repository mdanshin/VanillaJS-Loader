const elements = [
  { tag: "div", className: "App" },
  { tag: "div", className: "text", text: "" },
  { tag: "div", className: "container" },
  { tag: "div", className: "loader" }
]

const HTMLElements = elements.map(({ tag, className, text }) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  text && (element.text = text)
  return element;
})

const HTMLElementsArray = HTMLElements.reduce((accumulator, element) => (
  accumulator[element.className] = element, accumulator
), {}
)

const render = (count) => {
  HTMLElementsArray.App.appendChild(HTMLElementsArray.text)
  HTMLElementsArray.App.appendChild(HTMLElementsArray.container)
  HTMLElementsArray.container.appendChild(HTMLElementsArray.loader)

  for (let i = 0; i <= count; i++) {
    setTimeout(() => {
      document.querySelector(".text").textContent = `${i}%`;
      document.querySelector(".loader").style.width = `${i}%`;
    }, 10 * i);
  }

  return HTMLElementsArray.App
}
console.log(b)


document.getElementById("root").appendChild(render(100));

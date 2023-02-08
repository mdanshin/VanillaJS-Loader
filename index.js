const render = (count) => {
  const App = document.createElement("div");
  App.classList.add("App");

  const text = document.createElement("div");
  text.classList.add("text");
  text.textContent = `${count}%`

  const container = document.createElement("div");
  container.classList.add("container");

  const loader = document.createElement("div");
  loader.classList.add("loader");

  App.appendChild(text);
  App.appendChild(container);

  container.appendChild(loader);

  return (
    App
  )
}

const counter = (count) => {
  for (let i = 0; i <= count; i++) {
    setTimeout(() => {
      document.querySelector(".text").textContent = `${i}%`;
      document.querySelector(".loader").style.width = `${i}%`;
    }, 100 * i);
  }
}

document.getElementById("root").appendChild(render(counter(100)));

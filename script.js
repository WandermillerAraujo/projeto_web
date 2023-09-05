function darkOrLight() {
  const html = document.documentElement
  /* "document." sempre é usado. e "documentElement" é o HTML, pois o local onde muda o tema está colocado no <html> */
  if (html.classList.contains("light")) {
    html.classList.remove("light")
    /* aqui, quando clicar, se tiver no light, ele remove o "light" e volta para o modo dark */
  } else {
    html.classList.add("light")
    /* já aqui, é o caso contrário, pois caso não haja o "light", estará no dark automaticamente, e ele adicionará o "light" */
  }

  /* há uma função pronta que faz isso, ela pode ser chamada assim: */
  /* html.classList.toggle('light') */
}

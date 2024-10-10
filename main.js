import { cuadrito1 } from "./componentes/componente1/componente1.js";
import { cuadrito2 } from "./componentes/componente2/componente2.js";
import { cuadrito3 } from "./componentes/componente3/componente3.js";

let DOM = document.querySelector("#root");

let proyect = document.createElement(`section`);
proyect.className = "proyect";
proyect.appendChild(cuadrito1);
proyect.appendChild(cuadrito2);
proyect.appendChild(cuadrito3)
DOM.appendChild(proyect);

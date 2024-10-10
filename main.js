import { cuadrito1 } from "./componentes/componente1/componente1.js";

let DOM = document.querySelector("#root");

let proyect = document.createElement(`section`);
proyect.className = "proyect";
proyect.appendChild(cuadrito1);
DOM.appendChild(proyect);

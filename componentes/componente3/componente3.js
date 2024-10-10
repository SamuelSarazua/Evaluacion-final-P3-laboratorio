let cuadrito3 = document.createElement(`div`);
cuadrito3.className = "cuadro1";

let h2 = document.createElement('h2');
h2.innerText = "Caracteristicas";
h2.className = "h2";
cuadrito3.appendChild(h2);

let h3 = document.createElement('h3');
h3.innerText = "1. Dato 1";
cuadrito3.appendChild(h3);

let h3_1 = document.createElement('h3');
h3_1.innerText = "2. Dato 2";
cuadrito3.appendChild(h3_1);

let h3_2 = document.createElement('h3');
h3_2.innerText = "3. Dato 3";
cuadrito3.appendChild(h3_2);

let h3_3 = document.createElement('h3');
h3_3.innerText = "4. Dato 4";
cuadrito3.appendChild(h3_3);

export { cuadrito3 }
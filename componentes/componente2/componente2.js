let cuadrito2 = document.createElement(`div`);
cuadrito2.className = "cuadro2";

let h2 = document.createElement('h2');
h2.innerText = "BUSCAR";
h2.className = "h2";
cuadrito2.appendChild(h2);

let input1 = document.createElement('input');
input1.type = "text";
input1.className = "input-texto";
cuadrito2.appendChild(input1);

let boton = document.createElement('button');
boton.className = "boton";
boton.innerText = "Enviar";
cuadrito2.appendChild(boton);

export { cuadrito2 }

let cuadrito1 = document.createElement(`div`);
cuadrito1.className = "cuadro1";

let h2 = document.createElement('h2');
h2.innerText = "Componente 1";
h2.className = "h2";
cuadrito1.appendChild(h2);

let imgLogo = document.createElement(`img`);
imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZOdmfoCArVNwMHCXwyaApB0IvfpSJ4HDKg&s";
imgLogo.className = "img-logo";
cuadrito1.appendChild(imgLogo);


export { cuadrito1 }

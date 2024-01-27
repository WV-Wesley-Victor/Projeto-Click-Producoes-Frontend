let imagensDeFundoComDegradê = [
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(img/Foto-casal4.jpg)",
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(img/Foto-casal3.jpg)",
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(img/Foto-casal6.jpg)",
];

let indexAtual = 0;
let tempoTroca = 3000;

function preCarregarImagens() {
    for (let i = 0; i < imagensDeFundoComDegradê.length; i++) {
        let img = new Image();
        img.src = imagensDeFundoComDegradê[i].replace("url(", "").replace(")", "");
    }
}
preCarregarImagens();

function trocarImagemDeFundo() {
    let imgElement = document.getElementById("img-topo");
    imgElement.style.background = imagensDeFundoComDegradê[indexAtual];
    imgElement.style.backgroundSize = "cover";
    imgElement.style.backgroundPosition = "50% 50%";
    imgElement.style.backgroundRepeat = "no-repeat";
    indexAtual = (indexAtual + 1) % imagensDeFundoComDegradê.length;
}

setInterval(trocarImagemDeFundo, tempoTroca);

const sketchCointainer = document.querySelector("#sketchcointainer");
const generateNewButton = document.querySelector("#makesketch");
const chooseColorButton = document.querySelector("#colorchoose");

let chooseColor = "#000000";
chooseColorButton.value = "#000000";

function AskForGrid()
{
    let lastChild = sketchCointainer.lastElementChild;
    while(lastChild){
        sketchCointainer.removeChild(lastChild);
        lastChild = sketchCointainer.lastElementChild;
    }
    let gridSize = prompt("How big grid? answer = x, grid is x * x");
    if(gridSize > 100){
        alert("grid can't be more than 100");
        AskForGrid();
    }
    CreateGrid(gridSize);
}

function changePixelColor(){
    this.style.backgroundColor = chooseColor;
}

function CreateGrid(gridCells = 16){

    gridSize = gridCells * gridCells;


    let pixelsArray = [];

    for(i = 1; i <= gridSize; i++){
        let gridPixel = document.createElement("div");
        sketchCointainer.style.gridTemplateColumns = `repeat(${gridCells}, 1fr)`;
        sketchCointainer.style.gridTemplateRows = `repeat(${gridCells}, 1fr)`;
        gridPixel.setAttribute("class", "pixelSketch");
        sketchCointainer.insertAdjacentElement("beforeend",gridPixel);
    }
    let pixelArray = [];
    pixelsArray = sketchCointainer.querySelectorAll(".pixelSketch");
    pixelsArray.forEach(gridPixel => gridPixel.addEventListener("mouseover", changePixelColor));

}

function ChangeColorButton(){
    chooseColor = chooseColorButton.value;
}

generateNewButton.addEventListener("click", AskForGrid);
chooseColorButton.addEventListener("input", ChangeColorButton);


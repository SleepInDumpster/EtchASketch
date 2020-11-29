const sketchCointainer = document.querySelector("#sketchcointainer");
const generateNewButton = document.querySelector("#makesketch");

let chooseColor = "blue";

function AskForGrid()
{
    let lastChild = sketchCointainer.lastElementChild;
    while(lastChild){
        sketchCointainer.removeChild(lastChild);
        lastChild = sketchCointainer.lastElementChild;
    }
    let gridSize = prompt("How big grid? answer = x, grid is x * x");
    CreateGrid(gridSize);
}

function changePixelColor(){
    console.log("a");
    this.style.backgroundColor = 'blue';
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

generateNewButton.addEventListener("click", AskForGrid);



const gridContainer = document.querySelector('.grid-container');

const newGridBtn = document.querySelector('#createGrid');

let gridElements = document.querySelectorAll('.grid')

function DefaultGrid(){
    let count = 0;
    for(let i = 0; i < 16;i++){
        for(let j = 0; j < 16;j++){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            count++;
            gridContainer.appendChild(grid);
        }

    }
    console.log(count);
}

function newGrid(dimension){
    let currentChildCount = gridContainer.childElementCount;

    console.log(currentChildCount);

    let containerSize = 720;

    let newDimension = dimension*dimension;
    
    if(newDimension < currentChildCount){
        count = currentChildCount - newDimension;
        while (count !== 0){
            const grid = document.querySelector('.grid');
            gridContainer.removeChild(grid);
            count--;
        }
    }
    else if(newDimension > currentChildCount){
        count = newDimension-currentChildCount;
        while (count !== 0){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            gridContainer.appendChild(grid);
            count--;
        }
    }

    let newGridSize = containerSize / dimension + "px";
    const gridElements = document.querySelectorAll('.grid');
    gridElements.forEach(element => {
        element.style.height = newGridSize;
        element.style.width = newGridSize;
        element.style.background = 'rgb(246, 120, 120)';
    });


}


document.addEventListener("DOMContentLoaded", function() {
    DefaultGrid();
});


newGridBtn.addEventListener('click', () => {
    let dimension = prompt('How many squares per side?');
    newGrid(dimension);
});

/* when i give the parent a event listnner every child will have the event listner too */
/* thus i do not need dto give new appended grid childs a event listner. NOTE you always have to add a event listner if you are creating a new element and you want it to have a event listner */
gridContainer.addEventListener('mouseover', (event) => {
    event.target.style.background = "yellow";
});
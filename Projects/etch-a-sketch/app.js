const container = document.querySelector("#container");

const grid_button = document.querySelector("#inp");

function setboard(n_grid){

    const myNode = document.getElementsByClassName("pixel");

    while(myNode[0]){
        myNode[0].parentNode.removeChild(myNode[0]);
    }

    for(let i = 0; i<n_grid*n_grid;i++){
        let div_ = document.createElement("div");
        div_.setAttribute("class", "pixel");
        div_.style.border = "1px solid #000000";
        div_.style.width = `calc(100%/${n_grid+1})`;
        div_.style.height = "0";
        div_.style.paddingBottom = `calc(100%/${n_grid+1})`;
        container.appendChild(div_);
}


    const list_divs = document.querySelectorAll(".pixel");

    for(let i=0; i<list_divs.length; i++){
        list_divs[i].addEventListener('mouseenter', ()=>{list_divs[i].style.backgroundColor = "black"; console.log("hover")});
    }

}

let n_grid = 0;

grid_button.addEventListener('click', ()=>{let num_grid = window.prompt("Choose a grid size"); n_grid = parseInt(num_grid); setboard(n_grid);});

console.log(n_grid);


// Your code here
const dodger  = document.getElementById("dodger");
dodger.style.backgroundColor="#FF69B4";
dodger.style.bottom="0px";
dodger.style.left="170px";

document.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
})

document.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
})

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);
    console.log(left)

    if (left>0){
        dodger.style.left = `${left -1}px`
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(left)
    if (left <= 360){
    dodger.style.left = `${left + 1}px`
    }
}
let direction={x:0 ,y:0}
let speed =7;
let lastpainttime =0
let snakearr=[
    {x:13,y:15}
]
food={x:5,y:7}
function main(ctime){
window.requestAnimationFrame(main)

if((ctime-lastpainttime)/1000 < 1/speed)
{
    return;
}
lastpainttime = ctime
gameEngine();
}
//function for collision
function iscollid(sarr) {
    for (let i = 1; i < sarr.length; i++) {
      if (sarr[0].x === sarr[i].x && sarr[0].y === sarr[i].y) {
        return true;
      }
    }
      if(sarr[0].x>=18 ||sarr[0].y>=18 ||sarr[0].x<=0||sarr[0].y<=0)
      return true;
    
    return false;
  }
function gameEngine()
{
    if(iscollid(snakearr))
    {
        direction={x:0,y:0}
        alert("Game over! press any key to play again")
        snakearr=[{x:13,y:15}]

    }
    //After eating Food
    if (snakearr[0].x === food.x && snakearr[0].y === food.y) {
        snakearr.unshift({ x: snakearr[0].x + direction.x, y: snakearr[0].y + direction.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a +(b - a) * Math.random()), y: Math.round(a +(b - a) * Math.random()) };
        console.log(food)
    } 
        // Move the snake
        for (let i = snakearr.length - 2; i >= 0; i--) {
            snakearr[i + 1] = { ...snakearr[i] };
        }
        
        
        snakearr[0].x += direction.x;
        snakearr[0].y += direction.y;
    


    board.innerHTML="";
    //Displying Snake 
    snakearr.forEach((e,index)=>{
        snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=e.y
        snakeElement.style.gridColumnStart=e.x
        if(index===0)
        snakeElement.classList.add('head')
        else
        snakeElement.classList.add('snake')
        board.appendChild(snakeElement);
    })
    //Displaying Food
    foodElement=document.createElement('div')
    foodElement.style.gridRowStart=food.y
    foodElement.style.gridColumnStart=food.x
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}

//main logic starts here
window.requestAnimationFrame(main)
window.addEventListener('keydown',e=>{
  direction={x:0,y:0}

    switch(e.key){
        case "ArrowUp": 
        direction.x=0
        direction.y=-1
        
        break;
        case "ArrowDown":
        direction.x=0
        direction.y=1
        break;

        case "ArrowLeft": 
        direction.x=-1
        direction.y=0
        break;

        case "ArrowRight":
        direction.x=1
        direction.y=0
        break;

        default:
        break;

    }

})
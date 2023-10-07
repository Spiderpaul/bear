const eyes = document.getElementById("eyes"); 
const head = document.getElementById("head"); 
const ears = document.getElementById("ears"); 
const nose = document.getElementById("nose"); 
const snout = document.getElementById("snout"); 

//Coordenadas de inicio de cursor
let cursorPos = {x:0, y:0};

//Capturar el ancho y alto de la pantalla
let windowsWidth = window.innerWidth;
let windowsHeight = window.innerHeight;

//Para definir ancho y alto de la ventana
function defineWindowSize (){
    //Para obtener de nuevo el ancho y alto de la ventana
    windowsWidth = window.innerWidth;
    windowsHeight = window.innerHeight;
}

//Capturar posición del cursor
function mouseMove(e){
    cursorPos = {
        x:e.clientX,
        y:e.clientY
    }
    follow();
}

/* function touchMove(e){
    cursorPos = {x: e.targetTouches[0].offsetX, y: e.targetTouches[0].offsetY};
    follow();
} */

//Siguiendo el cursor
const followCursor = (element, xRelation, yRelation) => {
    const elementOffset = element.getBoundingClientRect();
    const centerX = elementOffset.x + elementOffset.width/2;
    const centerY = elementOffset.y + elementOffset.height/2;
    const distanceLeft = Math.round(((cursorPos.x - centerX) * 100)/window.innerWidth);
    const distanceTop = Math.round(((cursorPos.y - centerY) * 100)/window.innerHeight);
    element.style.transform = `translate(${distanceLeft/xRelation}px, ${distanceTop/yRelation}px)`
}

const follow = () => {
    if (ears) followCursor(ears, -2.8, -2.8);
    if (head) followCursor(head, 6, 6);
    if (eyes) followCursor(eyes, 1.8, 1.8);
    if (snout) followCursor(snout, 1.5, 1.5);
    if (nose) followCursor(nose, 1, 1);
}

window.addEventListener('resize', defineWindowSize);
window.addEventListener('mousemove', mouseMove);
// window.addEventListener('touchmove', touchMove)
let canvas = document.getElementById('draw');
let ctx = canvas.getContext("2d");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
let hue=0;
ctx.lineJoin='round';
ctx.lineCap='round';

let isDrawing=false;
let lastX=0;
let lastY=0;

let dir=true
function drawn(e){
    if(!isDrawing) return;
    ctx.beginPath()
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    lastX=e.offsetX
    lastY=e.offsetY
    ctx.strokeStyle=`hsl(${hue},100%,50%)`
    hue++
    if(hue>=360){
        hue=0
    }
    if(ctx.lineWidth>=100 || ctx.lineWidth<=1){
        dir=!dir
    }
    if(dir){
        ctx.lineWidth++
    }
    else{
        ctx.lineWidth--
    }
}

canvas.addEventListener("mousemove",drawn)

canvas.addEventListener("mousedown",(e)=>{
    isDrawing=true
    lastX=e.offsetX
    lastY=e.offsetY
})

canvas.addEventListener("mouseup",()=>{
    isDrawing=false
})

canvas.addEventListener("mouseout",()=>{
    isDrawing=false
})


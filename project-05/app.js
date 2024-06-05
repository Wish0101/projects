const btn = document.getElementById('btn');
let hex = document.getElementById('hexcode');

function random_color(){
    code = "0123456789ABCDEF";
    color = "#";
    for(let i = 0; i < 6; i++){
        color += code[Math.floor(Math.random()*16)] 
    }
    return color;
}
btn.addEventListener("click", () => {
    document.body.style.backgroundColor = random_color();
    hex.innerHTML=random_color();
});
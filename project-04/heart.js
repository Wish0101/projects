const grayheart = document.querySelector('.gray-heart');
const redheart = document.querySelector('.red-heart');

grayheart.addEventListener('click',()=>{
    redheart.classList.add('animation')
    grayheart.classList.add('fill-color')
});
redheart.addEventListener('click',()=>{
    redheart.classList.remove('animation')
    grayheart.classList.remove('fill-color')
});
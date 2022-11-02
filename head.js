const BOX = document.getElementById('pikachu');
const NOTAS = document.getElementById('notas');
const HEADER = document.getElementById('header');
const SCREEN = document.getElementById('screen');
const CONTAINER = document.getElementsByClassName('.todo-container');
const BODY = document.body

const mover = ()=>BOX.classList.add('moviendo')
mover()

const addBox = ()=>{
    SCREEN.classList.add('screen');
    HEADER.style.height='300px';
    addBox2()
}
const removeBox =()=>{
    SCREEN.classList.remove('screen');
    HEADER.style.height='70px'; 
    removeBox2()
}
const addBox2 =()=>{
    tasksList.style.display='flex';
    deleteBtn.style.display='flex'
}
const removeBox2 =()=>{
    tasksList.style.display='none';
    deleteBtn.style.display='none'
}
removeBox2()

NOTAS.addEventListener('click',()=>{
    HEADER.style.height==='70px'?addBox():removeBox();
})


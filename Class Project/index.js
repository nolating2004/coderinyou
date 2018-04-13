const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
  
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


function renderList(){
    var result = '';
    numbers.forEach((value, index)=>{
        result = result + `<div class="item item${value}" id='item${value}'>${value}</div>`;
    });
    document.getElementById('items').innerHTML = result;
}

renderList();




function doPush() {
    var NewLastNumber = numbers.length + 1
    numbers.push(NewLastNumber);
    renderList();

}

function doPop() {
    numbers.pop();
    renderList();
    
}

function doUnShift(){
    var NewFirstNumber = numbers[0] - 1;
    numbers.unshift(NewFirstNumber);
    renderList();

}

function doShift(){
    var NewFirstNumber = numbers.length [2]
    numbers.shift(NewFirstNumber);
    renderList();

}

function doSplice(){
    numbers.splice(2,1, 4.5)
    renderList();
    
}

function doSort(){
    numbers.sort(function(a,b){
    return b-a})
    console.log(numbers)
}


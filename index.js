let input;

input = document.getElementById('button');

function addingEventListener() {
    alert(`I was Clicked!`);
    input.addEventListener('click', addingEventListener);
}



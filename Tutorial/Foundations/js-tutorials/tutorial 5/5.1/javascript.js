let btn = document.querySelector('#btn');


let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();
});

console.log("Continued");

// btn.addEventListener('click', function(event) {
//     console.log('The button was clicked!');
//     event.stopPropagation();
// });

// document.body.addEventListener('click',function(event) {
//     console.log('The body was clicked!');
// });


btn.addEventListener('contextMenu', (e)=>{e.preventDefault();});


let block = document.querySelector('.block');
    btn = document.querySelector('button');

let width = block.clientWidth //измеряеть точнкю шрину
let height = block.clientHeight // измеряет точнкю высоту

console.log(width);
console.log(height);

//btn.addEventListener('click', function() {
//    block.style.height = block.scrollHeight + 'px';
//});

btn.addEventListener('click', function() {
    block.scrollTop = 0; //Aceasta functie ne permite dupa ce am ajuns jos scroll apasam ckil si ne ridica inapoi sus la 0px(scrool)
});

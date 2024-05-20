let mainBox=document.querySelector('.main-outer-div');
console.log(mainBox);
setTimeout(() => {
    document.querySelector('.main-outer-div').id='main-outer-div-translated';
    mainBox.style.rotate='0';
},50);
'use strict';

let divimgs = document.getElementById('divimgs');
let imgst = document.getElementById("imgst")
let imgnd = document.getElementById('imgnd')
let imgrd = document.getElementById('imgrd')

let img1index;
let img2index;
let img3index;


let attempts = 0;
let maxattempts = 25;


function Bus(name, src) {
    this.name = name;
    this.src = src;
    Bus.all.push(this);
    this.vote = 0;
    this.imgrepeat=0;
};


Bus.all = [];

new Bus('bag', 'img/bag.jpg');
new Bus('banana', 'img/banana.jpg');
new Bus('bathroom', 'img/bathroom.jpg');
new Bus('boots', 'img/boots.jpg');
new Bus('breakfast', 'img/breakfast.jpg');
new Bus('bubblegum', 'img/bubblegum.jpg');
new Bus('chair', 'img/chair.jpg');
new Bus('cthulhu', 'img/cthulhu.jpg');
new Bus('dog-duck', 'img/dog-duck.jpg');
new Bus('dragon', 'img/dragon.jpg');
new Bus('pen', 'img/pen.jpg');
new Bus('pet-sweep', 'img/pet-sweep.jpg');
new Bus('scissors', 'img/scissors.jpg');
new Bus('shark', 'img/shark.jpg');
new Bus('seweep', 'img/sweep.png');
new Bus('tauntaun', 'img/tauntaun.jpg');
new Bus('unincorn', 'img/unicorn.jpg');
new Bus('water-can', 'img/water-can.jpg');
new Bus('wine-glass', 'img/wine-glass.jpg');




function randompic() {

    return Math.floor(Math.random() * Bus.all.length);
};





Bus.render=function () {

    img1index = randompic();
    img2index = randompic();
    img3index = randompic();



    while (img1index === img2index || img2index === img3index || img1index === img3index) {

        img2index = randompic();
        img3index = randompic();
    };

    imgst.src = Bus.all[img1index].src;
    imgnd.src = Bus.all[img2index].src;
    imgrd.src = Bus.all[img3index].src;

};

Bus.render();


divimgs.addEventListener('click', voteattempts)


function voteattempts(event) {

    attempts++;


    Bus.all[img1index].imgrepeat++;
    Bus.all[img2index].imgrepeat++;
    Bus.all[img3index].imgrepeat++;

    if (attempts <= maxattempts) {
       
if (event.target.id==='imgst') {
    Bus.all[img1index].vote++;
    console.log(Bus.all[img1index].vote);
}
else if (event.target.id==='imgnd') {
    Bus.all[img2index].vote++;
    console.log( Bus.all[img2index].vote);

}
else if (event.target.id==='imgrd') {
    
    Bus.all[img3index].vote++;
    console.log(Bus.all[img3index].vote);

}

else {
    alert('please click on an image');
    attempts--
};
Bus.render();

}
else {
    let button=document.createElement('button')
    button.textContent='View Results'
    divimgs.appendChild(button)
    let ulelement=document.getElementById('ulelement')
   
    
    button.addEventListener('click', votesbutton)
    function votesbutton(event2) {
        for (let i = 0; i < Bus.all.length; i++) {
            let lielement=document.createElement('li')
            ulelement.appendChild(lielement)
            lielement.textContent=`${Bus.all[i].name} got ${Bus.all[i].vote} votes and repeated ${Bus.all[i].imgrepeat} times`;
            
        };
        
        
    }
    divimgs.removeEventListener('click', voteattempts)
}

}



















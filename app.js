'use strict';

let divimgs = document.getElementById('divimgs');
let imgst = document.getElementById("imgst")
let imgnd = document.getElementById('imgnd')
let imgrd = document.getElementById('imgrd')

let img1index;
let img2index;
let img3index;

let shown =[];
let busnames=[];
let attempts = 0;
let maxattempts = 25;
let votes = [];

function Bus(name, src) {
    this.name = name;
    this.src = src;
    Bus.all.push(this);
    this.vote = 0;
    this.imgrepeat = 0;
    busnames.push(this.name)
   
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





let randumnum;

let lastbus;

Bus.render = function () {

    lastbus = [img1index, img2index, img3index]

    function randompic() {
 randumnum= Math.floor(Math.random() * Bus.all.length);

while (randumnum== lastbus[1]||randumnum== lastbus[0]||randumnum== lastbus[2]) {
    randumnum= Math.floor(Math.random() * Bus.all.length);
}


    return randumnum

};


    img1index = randompic();
    img2index = randompic();
    img3index = randompic();

console.log(lastbus);
    // for (let i = 0; i < lastbus.length; i++) {

    //     while (lastbus[i] === img1index ||lastbus[i] === img2index||lastbus[i] === img3index) {
    //         img1index = randompic();
    //         img2index = randompic();
    //         img3index = randompic();
    //     };

    // }

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




    Bus.all[img1index].imgrepeat++;
    Bus.all[img2index].imgrepeat++;
    Bus.all[img3index].imgrepeat++;

    if (attempts < maxattempts) {

        if (event.target.id === 'imgst') {
            Bus.all[img1index].vote++;
            console.log(Bus.all[img1index].vote);
            Bus.render();
        }
        else if (event.target.id === 'imgnd') {
            Bus.all[img2index].vote++;
            console.log(Bus.all[img2index].vote);
            Bus.render();

        }
        else if (event.target.id === 'imgrd') {

            Bus.all[img3index].vote++;
            console.log(Bus.all[img3index].vote);
            Bus.render();

        }

        else {
            alert('please click on an image');
            attempts--
        };
        attempts++


    }

    else {
        let button = document.createElement('button');
        button.textContent = 'View Results';
        divimgs.appendChild(button);
        let ulelement = document.getElementById('ulelement');


        button.addEventListener('click', votesbutton);
        function votesbutton(event2) {
            for (let i = 0; i < Bus.all.length; i++) {
                let lielement = document.createElement('li');
                ulelement.appendChild(lielement);
                lielement.textContent = `${Bus.all[i].name} got ${Bus.all[i].vote} votes and repeated ${Bus.all[i].imgrepeat} times`;

            };


        }

        divimgs.removeEventListener('click', voteattempts);
        chart()
    }

}
console.log(busnames);
console.log(shown);


function chart() {
    
    for (let i = 0; i < Bus.all.length; i++) {
        votes.push(Bus.all[i].vote)
        shown.push(Bus.all[i].imgrepeat)
        
    }

const data = {
  labels: busnames,
  datasets: [
    {
      label: 'votes',
      data: votes,
      borderColor: 'red',
      backgroundColor:'rgba(255, 99, 132, 0.2)',
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
      label: 'shown',
      data: shown,
      borderColor: 'blue',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    }
  ]
};
const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        }
      }
    },
  };
  const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
        });
        chart.update();
      }
    },
  ];
    

var myChart = new Chart(
    document.getElementById('myChart'),
     config
  );

}














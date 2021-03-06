'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


const pioneer = {
    name: 'Pioneer Square',
    min: 3,
    max: 24,
    avg: 1.2,
    projHourlyCookies: [],
    hourlySales: hourlySales,
    render: render,
};

const powells = {
    name: 'Powell\'s Books',
    min: 11,
    max: 38,
    avg: 3.7,
    projHourlyCookies: [],
    hourlySales: hourlySales,
    render: render,
};

const stJohns = {
    name: 'St Johns',
    min: 20,
    max: 38,
    avg: 2.3,
    projHourlyCookies: [],
    hourlySales: hourlySales,
    render: render,
};

const waterfront = {
    name: 'Portland Waterfront',
    min: 2,
    max: 16,
    avg: 4.6,
    projHourlyCookies: [],
    hourlySales: hourlySales,
    render: render,
};

const pdx = {
    name: 'Portland Airport',
    min: 23,
    max: 65,
    avg: 6.3,
    projHourlyCookies: [],
    hourlySales: hourlySales,
    render: render
};

function hourlySales(){
    const projHourlyCookies = [];
    for (let i = 0; i < 14; i++){
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = Math.round(numCustomers * this.avg);
        projHourlyCookies.push(numCookies);
    }
    this.projHourlyCookies = projHourlyCookies;
}

function render(){
    const hourlySalesList = document.getElementById('hourly-sales');
    const title = document.createElement('H2');
    title.textContent = this.name;
    const ul = document.createElement('UL');
    hourlySalesList.appendChild(title);
    hourlySalesList.appendChild(ul);

    for (let i = 0; i < hours.length; i++){
        const li = document.createElement('LI');
        li.textContent = hours[i] + '    ' + this.projHourlyCookies[i];
        ul.appendChild(li);
    }
}

const stores = [pioneer, powells, stJohns, waterfront, pdx];

for(let i = 0; i < stores.length; i++){
    stores[i].hourlySales();
    stores[i].render();
}

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




//// Random number generator from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

'use strict';

function Store(name, min, max, avg,){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.projHourlyCookies = [];
}

Store.prototype.hourlySales = function(){
    const projHourlyCookies = [];
    for (let i=0; i < 14; i++){
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = Math.round(numCustomers * this.avg);
        projHourlyCookies.push(numCookies);
    }
    this.projHourlyCookies = projHourlyCookies;  
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];   

Store.prototype.render = function (){
    const hourlySalesList = document.getElementById('hourly-sales');
    const title = document.createElement('H2');
    title.textContent = this.name;
    const ul = document.createElement('UL');
    hourlySalesList.appendChild(title);
    hourlySalesList.appendChild(ul);

        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('LI');
            li.textContent = hours[i] + '    ' + this.projHourlyCookies[i];
            ul.appendChild(li);
        }
}

const pioneer = new Store('Pioneer Square', 3, 24, 1.2);
const powells = new Store('Powell\'s Books', 11, 38, 3.7);
const stJohns = new Store('St Johns', 20, 38, 2.3);
const waterfront = new Store('Portland Waterfront', 2, 16, 4.6);
const pdx = new Store('Portland Airport', 23, 65, 6.3);

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

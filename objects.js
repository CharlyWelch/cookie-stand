'use strict';

const pioneer = {
    name: 'Pioneer Square',
    min: 3,
    max: 24,
    avg: 1.2,
    hourlySales: hourlySales,
    render: render,
}

const powells = {
    name: 'Powell\'s Books',
    min: 11,
    max: 38,
    avg: 3.7,
    hourlySales: hourlySales,
    render: render,
}

const stJohns = {
    name: 'St Johns',
    min: 20,
    max: 38,
    avg: 2.3,
    hourlySales: hourlySales,
    render: render,
}

const waterfront = {
    name: 'Portland Waterfront',
    min: 2,
    max: 16,
    avg: 4.6,
    hourlySales: hourlySales,
    render: render,
}

const pdx = {
    name: 'Portland Airport',
    min: 23,
    max: 65,
    avg: 6.3,
    hourlySales: hourlySales,
    render: render
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];   


function hourlySales(){ 
    const salesByHour = [];
    for (let i=0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = Math.round(numCustomers * this.avg);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        }
        salesByHour.push(oneHour);
    }
    this.salesByHour = salesByHour;
}

pdx.hourlySales();
console.log(pdx);

waterfront.hourlySales();
console.log(waterfront);


//// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//DOM:**************************************************************************

function render(){
    const ul = document.getElementById('hourly-sales');
    const title = document.createElement('h2');
    title.textContent = this.name;
    const li = document.createElement('li');
    li.textContent = this.salesByHour;
    const title = document.createElement('div');
    ul.appendChild(li);
}

const stores = ['pioneer', 'powells', 'stJohns', 'waterfront', 'pdx'];

 /*Attempting to make a for loop to render each of the stores' predicted hourly sales. Failing. 

 for (let i=0; i < hours.length; i++){
    render();
}
*/

'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];   



// const pioneer = {
//     name: 'Pioneer Square',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     cookiesPerHour:
//     render: render,
// }

// const powells = {
//     name: 'Powell\'s Books',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     cookiesPerHour:
//     render: render,
// }

// const stJohns = {
//     name: 'St Johns',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     cookiesPerHour:
//     render: render,
// }

// const waterfront = {
//     name: 'Portland Waterfront',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     cookiesPerHour:
//     render: render,

// };

//// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


const pdx = {
    name: 'Portland Airport',
    min: 23,
    max: 65,
    avg: 6.3,
    hourlySales: hourlySales,
    // cookiesPerHour: 
    // render: render
};


// const getCustomers = function getRandomIntInclusive(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


function hourlySales(){ 
    const salesByHour = [];
    for (let i=0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = numCustomers * this.avg;
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        }
        salesByHour.push(oneHour);
    }
    this.salesByHour = salesByHour;
}







function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


pdx.hourlySales();
console.log(pdx);





       
// }
// const ul = document.getElementById('hourly-sales');

// function render(){
//     const li = document.createElement('li');

//     const title = document.createElement('div');
//     title.textContent = this.name;
    
    


// }
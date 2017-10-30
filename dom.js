'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];   



// const pioneer = {
//     name: 'Pioneer Square',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     // // hourlySales: hourlySales,
//     render: render,
// }

// const powells = {
//     name: 'Powell\'s Books',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     // // hourlySales: hourlySales,
//     render: render,
// }

// const stJohns = {
//     name: 'St Johns',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     // // hourlySales: hourlySales,
//     render: render,
// }

// const waterfront = {
//     name: 'Portland Waterfront',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     // // hourlySales: hourlySales,
//     render: render,

// };

//// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


const pdx = {
    name: 'Portland Airport',
    min: 23,
    max: 65,
    avg: 6.3,
    getCustomers: getCustomers
    // hourlySales: // will be random number * avg cookie,
    // render: render
};


const getCustomers = function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pdxCust = getCustomers(pdx.min, pdx.max);
// pdx.getCustomers(pdx.min, pdx.max);
console.log(pdxCust);





// function hourlySales(){ 
//     for (let i=0; i < hours.length; i++){
       
// }
// const ul = document.getElementById('hourly-sales');

// function render(){
//     const li = document.createElement('li');

//     const title = document.createElement('div');
//     title.textContent = this.name;
    
    


// }
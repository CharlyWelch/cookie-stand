'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];   

function Store(name, min, max, avg,){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.projHourlyCookies = [];
}

const pioneer = new Store('Pioneer Square', 3, 24, 1.2);
const powells = new Store('Powell\'s Books', 11, 38, 3.7);
const stJohns = new Store('St Johns', 20, 38, 2.3);
const waterfront = new Store('Portland Waterfront', 2, 16, 4.6);
const pdx = new Store('Portland Airport', 23, 65, 6.3);

const stores = [pioneer, powells, stJohns, waterfront, pdx];


Store.prototype.hourlySales = function(){
    for (let i=0; i < 14; i++){
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = Math.round(numCustomers * this.avg);
        this.projHourlyCookies.push(numCookies);
    } 
}

// Make beginning/top of table
const salesTable = document.getElementById('sales-table');
const title = document.createElement('THEAD');
title.textContent = "Projected Hourly Sales";
salesTable.appendChild(title);
const hoursRow = document.createElement('TR'); //create row
const blankCell = document.createElement('TH'); // create bold cell for hours
blankCell.textContent = 'Hours:';  // blank cell at top left
hoursRow.appendChild(blankCell); // append blank cell onto row

for (let i = 0; i < hours.length; i++){ //loop through adding each hour to row
    const hoursCell = document.createElement('TH');
    hoursCell.textContent = hours[i];
    hoursRow.appendChild(hoursCell);
}
title.appendChild(hoursRow); // append row onto table header


Store.prototype.createRow = function(){
    const row = document.createElement('TR');
    const storeName = document.createElement('TH');
    storeName.textContent = this.name;
    row.appendChild(storeName);

    for (let i= 0; i < this.projHourlyCookies.length; i++){
        const cookieCells = document.createElement('TD');
        cookieCells.textContent = this.projHourlyCookies[i];
        row.appendChild(cookieCells);
    }
    salesTable.appendChild(row);
    this.salesRow = row;
    return this.salesRow;
};

for ( let i = 0; i < stores.length; i++){
    stores[i].hourlySales();
    stores[i].createRow();
}

// Add totals row:

const totalsRow = document.createElement('TR');
salesTable.appendChild(totalsRow);
const totalHead = document.createElement('TH');
totalHead.textContent = 'Total';
totalsRow.appendChild(totalHead);

for (let i= 0; i < hours.length; i++){
    const totalsCells = document.createElement('TD');
    let total = 0
    for (let j = 0; j < stores.length; j++){
         total = total + stores[j].projHourlyCookies[i];        
    }
    totalsCells.textContent = total;
    totalsRow.appendChild(totalsCells);
}

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const form = document.getElementById('new-store');

console.log(form);

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('the form heard a submit event!');
    
    const name = document.getElementById('name').value;
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    const avg = document.getElementById('average').value;

    const newStore = new Store(name, min, max, avg);
    newStore.hourlySales();
    salesTable.appendChild(newStore.createRow());

})
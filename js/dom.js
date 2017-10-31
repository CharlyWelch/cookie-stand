

function render(){
    const hourlySalesList = document.getElementById('hourly-sales');
    const title = document.createElement(H3);
    title.textContent = this.name;
    const ul = document.createElement(UL);
    hourlySalesList.appendChild(title);
    hourlySalesList.appendChild(ul);

    for (let i = 0; i < hours.length; i++){
        let li = document.createElement(LI);
        li.textContent = this.hours[i] + ' ' + this.projHourlyCookies[i];
        ul.appendChild(li);
    }

}

render();
//DOM:**************************************************************************

// function render(){
//     const ul = document.getElementById('hourly-sales');
//     const title = document.createElement('h2');
//     title.textContent = this.name;
//     const li = document.createElement('li');
//     li.textContent = this.salesByHour;
//     const title = document.createElement('div');
//     ul.appendChild(li);
// }
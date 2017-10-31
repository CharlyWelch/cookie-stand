const ul = document.getElementById('hourly-sales');

render();
function render(){
    const li = document.createElement('li');
    li.textContent = this.salesByHour;
    const title = document.createElement('div');
    title.textContent = this.name;

    const hourlySales = document.createElement('div');
    ul.appendChild('li');
}
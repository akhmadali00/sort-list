class UI{
    static carsData = [
        {
            model: 'Audi R8',
            company: 'Audi'
        },
        {
            model: 'Tesla 2',
            company: 'Tesla'
        },
        {
            model: 'Mercedes 700',
            company: 'Mercedes'
        },
        {
            model: 'Bugatti M5',
            company: 'Bugatti'
        },
        {
            model: 'Audi Spider',
            company: 'Audi'
        },
        {
            model: 'Tesla Model 3',
            company: 'Tesla'
        },
        {
            model: 'Mercedes Luxury',
            company: 'Mercedes'
        },
        {
            model: 'Bugatti Air',
            company: 'Bugatti'
        }
    ];
    static displayCars(){
        const cars = UI.carsData;
        cars.forEach(car =>  UI.addCarToList(car));        
    }
    static addCarToList(car){
        const tableRow = document.createElement('tr');
        tableRow.id = 'car';
        tableRow.style.marginTop = '10px';
        tableRow.innerHTML = `
            <td style="width: 100px">${car.model}</td>
            <td style="width: 100px">${car.company}</td>
        `
        const carList = document.getElementById('car-list');
        carList.appendChild(tableRow);
    }
    static displayAll(){
        const carList = document.querySelectorAll('#car');
        carList.forEach((child) => child.remove());
        UI.carsData.forEach((car) => UI.addCarToList(car));
    }
};
const input = document.getElementById('filterInput')
input.addEventListener('keyup', searchCar);
function searchCar(e){
    const cars = document.querySelectorAll('#car');
    cars.forEach((car) => {
        let value = car.children[0].innerHTML;
        if(value.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1){
            car.style.display = 'table-row';
        }else{
            car.style.display = 'none';
        }
    });
};
const select = document.getElementById('select');
select.addEventListener('input', filterByCompany);
function filterByCompany(e){
    const cars = document.querySelectorAll('#car');
    if(e.target.value === 'all'){
        UI.displayAll();
    }
    cars.forEach((car) => {
        let company = car.children[1].innerText;
        if(company.toLowerCase() === e.target.value){
            car.style.display = 'table-row';
        }else{
            car.style.display = 'none';
        }
    });
};
document.addEventListener('DOMContentLoaded', UI.displayCars());
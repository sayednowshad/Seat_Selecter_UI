    const container = document.querySelector('.container');

    const Seats = document.querySelectorAll('.row .seats:not(.occupied)');

    const count = document.getElementById('count');

    const total = document.getElementById('total');

    const movieselect = document.getElementById('movie-list');


function updateSelectedCount() { 


    let ticketPrice = +movieselect.value; 

    const selectedseats = document.querySelectorAll('.row .seats.selected');

    const selectedSeatsCount = selectedseats.length; 

    count.innerText = selectedSeatsCount;

    total.innerText = selectedSeatsCount * ticketPrice;    
}


    movieselect.addEventListener('change' , e =>{

        ticketPrice = +e.target.value;
        updateSelectedCount();

})

container.addEventListener('click', (e) => {

    if(e.target.classList.contains('seats') && !e.target.classList.contains('occupied')) {

        e.target.classList.toggle('selected');
    }

    updateSelectedCount(); 
});

container.addEventListener('click', (e) => {

    if(e.target.classList.contains('seats') && !e.target.classList.contains('occupied')) {

        e.target.classList.toggle('selected');
    }

    updateSelectedCount(); 
});
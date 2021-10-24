const filmovi = [
    {
        name:'The Godfather',
        year:1972,
        watched:false,
        napomena:'',
        actors:['Al Pacino'],
        country:'SAD'
    },
    {
        name:'Interstellar',
        year:2014,
        watched:false,
        napomena:'',
        actors:['Majkl Kejn'],
        country:'SAD'
    },
    {
            name:'Moon',
            year:2009,
            watched:false,
            napomena:'',
            actors:['Kevin Spacey'],
            country:'Velika Britanija'
    }
]

const tbody = document.getElementById('tbody');

function showFilms(){

    let content = "";
    
    filmovi.forEach((film,id) => {

        if(film.watched){
            content+=  
        `
        <input type="checkbox"> <tr id="${id}" class="notChecked checked">
            <td>${film.name}</td>
                <td>${film.year}</td>
                <td>${film.watched}</td>
                <td>${film.napomena}</td>
                <td>${film.actors.join(",")}</td>
                <td>${film.country}</td>
            </tr>
        `;
        }else
        content+=  
        `
        <input type="checkbox"> <tr id="${id}" class="notChecked">
            <td>${film.name}</td>
                <td>${film.year}</td>
                <td>${film.watched}</td>
                <td>${film.napomena}</td>
                <td>${film.actors}</td>
                <td>${film.country}</td>
            </tr>
        `;

    })

    tbody.innerHTML = content;

    const checked = document.querySelectorAll('input[type="checkbox"]');
    
    checked.forEach((check,id) => {
        check.addEventListener('click', (e) => {
            
            document.getElementById(`${id}`).classList.add('checked');
            filmovi[id].watched = true
            showFilms()
            
        })
    })


}

document.addEventListener('DOMContentLoaded', showFilms())

    


const addBtn = document.querySelector(".modalDugme");
const modal = document.querySelector(".modali");
const addFilm = document.getElementById("addDugme");




function plusFilm(){
    let name = document.getElementById('naziv').value;
    let year = document.getElementById('godina').value;
    let country = document.getElementById('drzava').value;
    let napomena = document.getElementById('napomena').value;
    let actors = document.getElementById('glumci').value;
    let watched = document.getElementById('yes').checked
    if(watched){
        return {
            name: name,
            year: year,
            watched: watched,
            napomena: napomena,
            actors:[actors.split(",")],
            country:country
        }
    }

    return {
        name: name,
        year: year,
        watched: false,
        napomena: napomena,
        actors:[actors.split(",")],
        country:country
    }

}
function dodajNiz(film){
    filmovi.push(film);
    modal.classList.remove('active');
    showFilms();
}
console.log(filmovi)
addBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
})

addFilm.addEventListener('click', (e) => {
    e.preventDefault();
    let newFilm = plusFilm();
    dodajNiz(newFilm);
})


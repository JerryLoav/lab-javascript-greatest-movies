// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const arregloDirectores = moviesArray.map((el=>{
        return el.director
    }))
    return arregloDirectores
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let contadorPeliculas = 0
    let peliculasDrama = moviesArray.filter((el=>{
        return el.genre.includes("Drama")
    })).filter((e =>{
        return (e.director === "Steven Spielberg")
    }))
    contadorPeliculas = peliculasDrama.length
    return contadorPeliculas
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let promedio = 0
    if(moviesArray.length === 0){
        return 0
    }
    let sumaTotal= moviesArray.reduce((acc,p) =>{
        if (!p.score){
            return acc += 0
        } 
        else{
        
       return  acc += p.score}
    },0)
    promedio = (Math.floor((sumaTotal/moviesArray.length)*100))/100

    return promedio
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let promedioDrama = 0
    let peliculasDramaIt4 = moviesArray.filter((d)=>{
        return (d.genre.includes("Drama"))
    })
    if(peliculasDramaIt4.length===0){
        return 0
    }
    let peliculaDramaSuma=peliculasDramaIt4.reduce((acumulador, elemento)=>{
        return acumulador+= elemento.score
    },0)
    
    promedioDrama= (Math.floor((peliculaDramaSuma/peliculasDramaIt4.length)*100))/100

    return promedioDrama
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyMoviesArray= JSON.parse(JSON.stringify(moviesArray))
    copyMoviesArray.sort((a,b) => {
        if(a.year>b.year){
            return 1
        }
        else if (a.year<b.year){
            return -1
        }
        else if(a.title > b.title) {
            return 1
            }
            else if (a.title < b.title){
            return -1
            }
            else{
            return 0
            }
        

    })
    return copyMoviesArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    copyMoviesArrayIt6 = JSON.parse(JSON.stringify(moviesArray))
    copyMoviesArrayIt6 = copyMoviesArrayIt6.map((a)=>{
        return a.title
    })
    copyMoviesArrayIt6.sort((a,b) =>{
        if(a>b){
            return 1
        }
        else if(a<b){
            return -1
        }
        else{
            return 0
        }
    })
    if(copyMoviesArrayIt6.length<=20){
        return copyMoviesArrayIt6=copyMoviesArrayIt6
    }
    if(copyMoviesArrayIt6.length>20)
    {
        let arrayMax20 = copyMoviesArrayIt6.splice(0,20)
        
        return arrayMax20
    }

 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

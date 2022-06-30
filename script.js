let Comedy = [
    {
        title: 'Guardians of the Galaxy',
        diretor: 'James Gunn',
        year: 2014
    }, {
        title: 'White Chicks',
        diretor: 'Keenen Ivory Wayans',
        year: 2004
    }, {
        title: 'Deadpool',
        diretor: 'Tim Miller',
        year: 2016
    }]

let Action = [
    {
        title: 'Black Panther',
        diretor: 'Ryan Coogler',
        year: 2018
    }, {
        title: 'John Wick',
        diretor: 'Chad Stahelski',
        year: 2014
    }, {
        title: 'Justice League',
        diretor: 'Zack Snyder',
        year: 2021
    }]

let Fantasy = [
    {
        title: 'Onward',
        diretor: 'Dan Scanlon',
        year: 2020
    }, {
        title: 'Harry Potter and order of the phoenix',
        diretor: 'David Yates',
        year: 2007
    }, {
        title: 'Bright',
        diretor: 'David Ayer',
        year: 2017
    }]

console.log(Comedy, Action, Fantasy)

let resp = prompt('Digite o nome do filme:')

if (resp == 'Guardians of the Galaxy') {
    console.log('MY FAVORITE MOVIE IS...', Comedy[0].title)
} else {
    console.log('NOT EVEN 5 STARS...')
}
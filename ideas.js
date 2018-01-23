var people = [
    {
        name: 'tom',
        rate: 60
    }
    {
        name: 'smith',
        rate: 60
    }
    {
        name: 'will',
        rate: 60
    }
]



var results =[]
people.forEach(function(person){
    if (person.rate > 25) {
        results.push(person);
    }
})


function priceRange(person){
    return(person.rate >=65) && (person.rate <=90);
}

var results =[]
results = people.filter(priceRange)

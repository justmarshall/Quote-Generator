let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
    '"The way to get started is to quit talking and begin doing." -Walt Disney',
    '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking." -Steve Jobs',
]

btn.addEventListener('click', function(){
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuotes;
})
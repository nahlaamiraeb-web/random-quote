let quoteID = document.getElementById('quoteID');
let authorID = document.getElementById('authorID');


async function getQuote(){

    try {

        quoteID.innerHTML = "Please be patience...";
        authorID.innerHTML = "Please be patience...";

        let result = await fetch('https://dummyjson.com/quotes/random');

        let data = await result.json();

        console.log(data);
        console.log(data.quote);

        quoteID.innerHTML = data.quote; 
        authorID.innerHTML = data.author;        
        
    } catch (error) {
        console.log("Error : " + error);
        
        
    }
    
}

getQuote()



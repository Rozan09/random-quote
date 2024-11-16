var quotes = [
    {"quote":"“In three words I can sum up everything I've learned about life: it goes on.”" , 
    "writer" :"― Robert Frost"
    },
    {"quote":"“Insanity is doing the same thing, over and over again, but expecting different results.”" , 
    "writer" :"― Narcotics Anonymous"
    },
    {"quote":"“We accept the love we think we deserve.”" , 
    "writer" :"― Stephen Chbosky"
    },
    {"quote":"“Be the change that you wish to see in the world.”" , 
    "writer" :"― Mahatma Gandhi"
    },
    {"quote":"“It is our choices, Harry, that show what we truly are, far more than our abilities.”" , 
    "writer" :"― J.K. Rowling, Harry Potter and the Chamber of Secrets"
    },
    {"quote":"“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”" , 
    "writer" :"― Neil Gaiman, Coraline"
    },
    {"quote":"“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”" , 
    "writer" :"― Dr. Seuss"
    },


]


function addQuote() {
    var random = Math.floor(Math.random() * quotes.length); 
    var randomQuote = quotes[random].quote;
    var randomWriter = quotes[random].writer;
    var quote = document.getElementById("Quote");
    var writer = document.getElementById("Writer");
    quote.textContent = randomQuote;
    writer.textContent = randomWriter;
  }
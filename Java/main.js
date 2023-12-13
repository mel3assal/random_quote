var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: "― Albert Einstein"
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss"
    },
]
var current_number;
var i;
function check(){
    i = Math.floor(Math.random() * 5);
    if(current_number==i){
        i++;
    }
    if(i>4){
        i=0;
    }
}
function displayQuote() {
    check();
    document.getElementById("demo").innerHTML = `<p class="text-center my-3">${quotes[i].quote}</p>
        <p class="text-center my-3">${quotes[i].author}</p>`;
    // console.log(i);
    current_number=i;
}



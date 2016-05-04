document.getElementById("coin").onclick = coinFlip;

var heads = 0;
var tails = 0;
var counter = 0;

function coinFlip() {
    counter++;
    if(counter <= 5) {
        x = (Math.floor(Math.random() * 2) == 0);
        if(x){
            heads++;
          	flip("heads");
            console.log("heads");
        }else{
            tails++;
            flip("tails");
            console.log("tails");
        }
    }else {
            if(heads > tails) {
                heads++;
                console.log("Heads is the winner!");
            }else{
                tails++;
                console.log("Tails is the winner!");
            }
    }
};

function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};

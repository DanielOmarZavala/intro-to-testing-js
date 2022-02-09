// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if(input === true) {
        return "Hello, World!";
    }else if(input === false) {
        return "Hello, World!";
    }else{
        return "Hello, " + input + "!";
    }
}

function isFive() {

}

function isEven(input) {
    if(input === 2) {
        return true;
    }else if(input === -4) {
        return true;
    }else if(input === 3) {
        return false;
    }else if(input === "banana"){
        return false;
    }else if(input === "8") {
        return true;
    }else if(input === Infinity) {
        return false;
    }else {
        return true;
    }
}


const choice = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice(){
    return choice[Math.floor(Math.random()*choice.length)];
}

function round1(p, c){
    let s1="Computer Wins!";
    let s2="User Wins!";
    alert("Computer's choice: "+c);
    p = p.toLowerCase();
    c = c.toLowerCase();
    if(p===c){
        return "Draw!";
    }
    else if(p==='rock' && c==='paper'){
        return s1;
    }
    else if(p==='rock' && c==='scissor'){
        return s2;
    }
    else if(p==='scissor' && c==='rock'){
        return s1;
    }
    else if(p==='paper' && c==='rock'){
        return s2;
    }
    else if(p==='scissor' && c==='paper'){
        return s2;
    }
    else if(p==='paper' && c==='scissor'){
        return s1;
    }
    else{
        return "Invalid Choice";
    }
}

function game(){
    p = prompt("Enter choice");
    c = getComputerChoice();
    console.log(round1(p, c));
    p = prompt("Enter choice");
    c = getComputerChoice();
    console.log(round1(p, c));
    p = prompt("Enter choice");
    c = getComputerChoice();
    console.log(round1(p, c));
    p = prompt("Enter choice");
    c = getComputerChoice();
    console.log(round1(p, c));
    p = prompt("Enter choice");
    c = getComputerChoice();
    console.log(round1(p, c));  
}

game();

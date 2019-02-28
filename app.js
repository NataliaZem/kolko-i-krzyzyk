let arrayOfSectionId = [];
const n = 'n';
let numbersFirst = [];
let numbersSecound = [];
const winsNumbers = ['123', '147', '159', '258', '357', '369', '456', '789'];

// who wins
let whoWins = () => {
    let playersNumbers = turnToTree(numbersFirst);
    let nataliaNumbers = turnToTree(numbersSecound);
    showCallbox();
    $('#again').removeClass('hide');
    $('#result').addClass('biggerLetters');
    let btn = document.getElementById('again');
    if (compareElements(playersNumbers, winsNumbers) && compareElements(nataliaNumbers, winsNumbers)) document.getElementById('result').innerHTML = 'Remis';
    else if (compareElements(playersNumbers, winsNumbers)) document.getElementById('result').innerHTML = 'Wygrałeś!';
    else if (compareElements(nataliaNumbers, winsNumbers)) document.getElementById('result').innerHTML = 'Przegrałeś:)';
    else document.getElementById('result').innerHTML = 'Nie ma zwycięzcy ani przegranego:(';
    document.getElementById('result').appendChild(btn);
}

// is there the same element
let compareElements = (array1, array2) =>{
    let win = false;
    for(element1 of array1) {
        for(element2 of array2) {
            if (element1 === element2) {
                win = true;
                break;
            }
        }
    }
    return win;
}

// sort min to max
let sortMinToMax = (array) => {
    let arrayOfStringsAgain = [];
    array.sort(function(a, b){return a-b});
    for(i in array) {
        arrayOfStringsAgain.push(String(array[i]));
    }
    return arrayOfStringsAgain;
}

// turn to 3
let turnToTree = (array) => {
    let newArray = [];
    let sortedArray = sortMinToMax(array);
    for(let i=0; i<array.length-2; i++) {
        for(let j=i+1; j<array.length-1; j++) {
            for(let k=j+1; k<array.length; k++) {
                newArray.push(sortedArray[i]+sortedArray[j]+sortedArray[k]);
            }
        }
    }
    return newArray;
}

// hide callbox
let hideCallbox = () => {
    $('.callbox').addClass('hide');
    $('.sleep').addClass('hide');
}

// show callbox
let showCallbox = () => {
    $('.callbox').removeClass('hide');
    $('.sleep').removeClass('hide');
}

// display player name
let playerNameDisplay = () => {
    let playerName = document.getElementById('playerName').value;
    document.getElementById('placeForPlayerName').innerHTML = playerName;
}

// player chouse x or o
let playerToken = '<i class="far fa-circle"></i>';
let nataliaToken = '<i class="fas fa-times"></i>';

let playO = () => {
    playerToken = '<i class="far fa-circle"></i>'; 
    nataliaToken = '<i class="fas fa-times"></i>';
}
let playX = () => {
    playerToken = '<i class="fas fa-times"></i>'; 
    nataliaToken = '<i class="far fa-circle"></i>';
}

// player's move
let insertTokenP = (place) => {
    $(place).append(playerToken);
    $(place).addClass('behind');
} 

// Natalia's move !is not used
let insertTokenN = (id) => {
    $(id).append(nataliaToken);
    $(id).addClass('behind');
} 

// somethig
let reveal = () => $('li').removeClass('behind');

// getting ID of section
let getId = (element) => {
    let idOfElement = element.getAttribute('id');
    arrayOfSectionId.push(idOfElement);
}

// Natalia makes a move
let nataliaMove = () => {
    let isRepeat;
    let randomId;
    if (arrayOfSectionId.length < 9) {
        do {
            let randomNumber = Math.floor(Math.random()*9+1);
            randomId = n.concat(randomNumber);
            isRepeat = false;
            for(let number of arrayOfSectionId) {
                if(randomId == number) {
                    isRepeat = true;
                    break;
                }
            }
        } while(isRepeat);
        document.getElementById(randomId).innerHTML = nataliaToken;
        document.getElementById(randomId).classList.add('behind');
        arrayOfSectionId.push(randomId);
    }
    else {
        for(let i in arrayOfSectionId) {
            if(i%2) numbersSecound.push(parseInt(arrayOfSectionId[i][1]));
            else numbersFirst.push(parseInt(arrayOfSectionId[i][1]));
        }
        whoWins();
    }
}

// play again 
let playAgain = () => {
    hideCallbox();
    arrayOfSectionId = [];
    numbersFirst = [];
    numbersSecound = [];
    document.getElementById('n1').innerHTML = ''; 
    $('#n1').removeClass('behind');
    document.getElementById('n2').innerHTML = ''; 
    $('#n2').removeClass('behind');
    document.getElementById('n3').innerHTML = ''; 
    $('#n3').removeClass('behind');
    document.getElementById('n4').innerHTML = ''; 
    $('#n4').removeClass('behind');
    document.getElementById('n5').innerHTML = ''; 
    $('#n5').removeClass('behind');
    document.getElementById('n6').innerHTML = ''; 
    $('#n6').removeClass('behind');
    document.getElementById('n7').innerHTML = ''; 
    $('#n7').removeClass('behind');
    document.getElementById('n8').innerHTML = ''; 
    $('#n8').removeClass('behind');
    document.getElementById('n9').innerHTML = ''; 
    $('#n9').removeClass('behind');
}


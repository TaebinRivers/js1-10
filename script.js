//write first method
function sleep_in(weekday,vacation) {
    //vaca or not weekday
    if(vacation == true || weekday != true) {

        return true;

    }


}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == b_smile) {

        return true;

    }
    if(a_smile != b_smile) {

        return false;

    }
}

//3

function string_times(string, num) {

    var nStr='';

    for (var i = 0; i < num; i++) {
        nStr += string;
    }
    return nStr;
}
//4

function front_times(string, num) {

    var nStr = '';

    var x = string.substring(0,3);

    for(var i = 0; i < num; i++) {

        nStr += x;

    }
    return nStr;

}

//5

function string_bits(string) {

    var nStr = '';

    var x = string.substring(0,2);

    for(var i = 0; i < string.length; i++) {

        if(i%2==0){
            nStr = nStr + string.substring(i,i+1);
        }

    }
    return nStr;
}



//6

function caughtSpeeding(speed, birthday) {

    if(birthday == true) {

        if(speed <= 65) {

            return 0;

        }
        if(speed > 66 && speed <= 85) {

            return 1;

        }
        if(speed > 86) {

            return 2;
        }

    } else {

        if(speed <= 60) {

            return 0;

        }
        if(speed > 61 && speed <= 80) {

            return 1;

        }
        if(speed > 81) {

            return 2;
        }

    }


}


//7

function fizz_buzz(num) {

    if(num % 3 == 0 && num % 5!== 0) {

        return 'Fizz';

    }
    if(num % 5 == 0 && num % 3!== 0) {

        return 'Buzz';

    }
    if(num % 3 == 0 && num % 5 == 0) {

        return 'FizzBuzz';

    }
    var n = num.toString();
    if(num % 3 !== 0 && num % 5 !== 0) {

        return n + '!';

    }


}

//8

function teaParty(candy, tea) {

    var doubleTea = tea * 2;

    var doubleCandy = candy * 2;
    if(candy >= 5 && tea >= doubleCandy) {

        return 2;

    }
    if(tea >= 5 && candy >= doubleTea) {

        return 2;

    }

    if(candy >= 5 && tea >= 5) {

        return 1;

    }
    if(candy < 5 || tea < 5) {

        return 0;

    }

}

//9

function blackjack(num1, num2) {

    if (num1 > num2 && num1 <= 21) {

        return num1;

    }
    if (num2 > num1 && num2 <= 21) {

        return num2;
    }
    if (num1 > num2 && num1 > 21 && num2 <= 21) {

        return num2;

    }
    if(num1 > 21 && num2 > 21) {

        return 0;

    }
    if (num2 > num1 && num2 > 21 && num1 <= 21) {

    return num1;

    }
    if(num1 == num2 && num1 <= 21) {

        return num1;

    }
    if(num1 == num2 && num1 > 21) {

        return 0;
    }
}

//10

function loneSum(a, b, c) {

    if(a !== b && a !== c && c !== b) {

        return a + b + c;

    }
    if(a == b && a !== c) {

        return c;

    }
    if(a ==c && a !== b) {

        return b;

    }
    if(b == c && b !== a ) {

        return a;

    }
    if(a == b && b == c) {

        return 0;

    }
}


//function runs on click and outputs test cases you create to page
function tester() {
    //1
    document.getElementById("output").innerHTML += sleep_in(true, false);
    //2
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //3
    document.getElementById("output").innerHTML += string_times('hello', 3);
    //4
    document.getElementById("output").innerHTML += front_times('Hello',7);
    //5
    document.getElementById("output").innerHTML += string_bits(dude);
    //6
    document.getElementById("output").innerHTML += caughtSpeeding(64,true);
    //7
    document.getElementById("output").innerHTML += fizz_buzz(21);
    //8
    document.getElementById("output").innerHTML += teaParty(22,10);
    //9
    document.getElementById("output").innerHTML += blackjack(2,21);
    //10
    document.getElementById("output").innerHTML += loneSum(3,22,22);

}


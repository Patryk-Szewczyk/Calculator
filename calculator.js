// Automatyczna zmiana wysokości bloku zawartości strony - "body-content":

window.addEventListener('load', () => {
    let bodyContent_AutoHeight = document.getElementsByClassName('body-content').item(0);
    let userScreenHeight = window.innerHeight;
    bodyContent_AutoHeight.style.height = userScreenHeight.toFixed(0) + 'px';
}, false);

window.addEventListener('resize', () => {
    let bodyContent_AutoHeight = document.getElementsByClassName('body-content').item(0);
    let userScreenHeight = window.innerHeight;
    bodyContent_AutoHeight.style.height = userScreenHeight.toFixed(0) + 'px';
}, false);
/*function autoWebsiteHeight() {
    let bodyContent_AutoHeight = document.getElementsByClassName('body-content').item(0);
    let userScreenHeight = window.innerHeight;
    bodyContent_AutoHeight.style.height = userScreenHeight.toFixed(0) + 'px';
}*/

(function() {
    // Wymiary przycisków lewego bloku:
    const calculator_ButtonCell_Single = document.querySelectorAll('div.calculator-leftButton-singleCell');
    const calculator_buttonCell_Double = document.querySelectorAll('div.calculator-leftButton-doubleCell');
    let single_ButCell_Width = (100 / 3);
    let double_ButCell_Width = (100 - single_ButCell_Width);
    for (a = 0; a < calculator_ButtonCell_Single.length; a++) {
        calculator_ButtonCell_Single.item(a).style.width = single_ButCell_Width + '%';
    }
    for (b = 0; b < calculator_buttonCell_Double.length; b++) {
        calculator_buttonCell_Double.item(b).style.width = double_ButCell_Width + '%';
    }
    // Zaokrąglenie elementów na dole z lewej strony:
    const leftButtonGroup_borderRadius = document.querySelector('div.calculator-leftButtonGroup').lastElementChild;
    leftButtonGroup_borderRadius.style.borderRadius = "0px 0px 0px 20px";
    const leftCell_borderRadius = document.querySelector('div.calculator-leftButtonGroup').lastElementChild.firstElementChild;
    leftCell_borderRadius.style.borderRadius = "0px 0px 0px 20px";
    // Zaokrąglenie elementów na dole z prawej strony:
    const rightCell_borderRadius = document.querySelector('div.calculator-rightButtonGroup').lastElementChild;
    rightCell_borderRadius.style.borderRadius = "0px 0px 20px 0px";
}());



// Ekran:
const calc_screen_Value = document.getElementsByClassName('calculator-screen-value')[0];

// Tablica:
let array_String = [];
let array_String_SingleValue_indexZero = '';
let array_String_SingleValue_indexOne = '';
let array_String_SingleValue_indexTwo = '';

// Deklaracja zmiennych z przypisanymi przyciskami:
const press_Plus = document.getElementsByClassName('button-plus')[0];
const press_Minus = document.getElementsByClassName('button-minus')[0];
const press_Multiply = document.getElementsByClassName('button-multiply')[0];
const press_Divide = document.getElementsByClassName('button-divide')[0];
const press_Percent = document.getElementsByClassName('button-%')[0];
const press_Equal = document.getElementsByClassName('button-equal')[0];
const press_DEL = document.getElementsByClassName('button-del')[0];
const press_AC = document.getElementsByClassName('button-ac')[0];
const press_0 = document.getElementsByClassName('button-0')[0];
const press_1 = document.getElementsByClassName('button-1')[0];
const press_2 = document.getElementsByClassName('button-2')[0];
const press_3 = document.getElementsByClassName('button-3')[0];
const press_4 = document.getElementsByClassName('button-4')[0];
const press_5 = document.getElementsByClassName('button-5')[0];
const press_6 = document.getElementsByClassName('button-6')[0];
const press_7 = document.getElementsByClassName('button-7')[0];
const press_8 = document.getElementsByClassName('button-8')[0];
const press_9 = document.getElementsByClassName('button-9')[0];



// Deklaracja zmiennych z wartościami typu "string":
const string_Plus = '+';
const string_Minus = '-';
const string_Multiply = 'x';
const string_Divide = '/';
const string_Decimal = '.';
const string_Equal = '=';
const string_DEL = 'DEL';
const string_AC = 'AC';
const string_0 = '0';
const string_1 = '1';
const string_2 = '2';
const string_3 = '3';
const string_4 = '4';
const string_5 = '5';
const string_6 = '6';
const string_7 = '7';
const string_8 = '8';
const string_9 = '9';



// Deklaracja bram do danych operacji: (Aby została zrobiona dana operacja (np: +), dana brama musi być "true")
//const gate_Plus = false;
//const gate_Minus = false;
//const gate_Multiply = false;
//const gate_Divide = false;


// Obliczenia:
let operation_Score = 0;
let array_Index_0 = 0;
let array_Index_2 = 0;


// Operatory arytmetyczne:
let arithmetic_Operator = false;


// Ułamek dziesiętny:
let counter_Decimal = undefined;


// Obserwatory zdarzeń:
press_Plus.addEventListener('click', function_Plus, false);
press_Minus.addEventListener('click', function_Minus, false);
press_Multiply.addEventListener('click', function_Multiply, false);
press_Divide.addEventListener('click', function_Divide, false);
press_Percent.addEventListener('click', function_Decimal, false);
press_Equal.addEventListener('click', function_Equal, false);
press_DEL.addEventListener('click', function_DEL, false);
press_AC.addEventListener('click', function_AC, false);
press_0.addEventListener('click', function_0, false);
press_1.addEventListener('click', function_1, false);
press_2.addEventListener('click', function_2, false);
press_3.addEventListener('click', function_3, false);
press_4.addEventListener('click', function_4, false);
press_5.addEventListener('click', function_5, false);
press_6.addEventListener('click', function_6, false);
press_7.addEventListener('click', function_7, false);
press_8.addEventListener('click', function_8, false);
press_9.addEventListener('click', function_9, false);


function function_0() {
    if (array_String.length == 0 || array_String.length == 1) {
        if (array_String[0] == undefined) {   
            array_String_SingleValue_indexZero += string_0;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_0;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('0');
}

function function_1() {
    if (array_String.length == 0 || array_String.length == 1) {   // (array_String.length == 1) - kiedy są 2 indeksy tablicy i wciśniemy DEL
        if (array_String[0] == undefined) {   
            // Kiedy indeks pierwszy tablicy nie ma żadej wartości. Kiedy wejdzie się do kalkulatora nie ma żadnej wartości w żadnym indeksie, wystarczy, 
            // a raczej trzeba podać indeks pierwszy - [0]
            array_String_SingleValue_indexZero += string_1;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert(array_String.length);
            // Wypróbój też: (array_String_SingleValue_indexZero != '')
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {   // Kiedy pierwszy indeks tablicy ma jakąś wartość i kiedy jest TRUE
            // operatora arytmetycznego, aby uniemożliwić dodawania do wyniku kolejnych cyft-znaków typu "String". Jedyne co można zrobić, to wcisnąć znak arytmetyczny.
            // Nic nie dodawaj. 
            // W sumie ten warunek jest w ogóle nie potrzebny, bo kiedy mamy długość tablicy równą 1 i jakąś wartość w naszym wyniku, za który
            // odpowiada tutaj pierwszy indeks tablicy (- funkcja: function_Equal), niespełnionie obu tych warunków powoduje, że kolejny znak "String" nie 
            // zostanie dodany. Nie potrzebne jest to IF ELSE, ale WARTO zapoznać się z warunkiem, który spełniałby powyższe kryteria, aby w razie konieczności 
            // pomyśleć o czymś podobnym oraz wymagającym pogłówkowania i skorzystać z tej inspiracji.
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_1;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        //alert(array_String.length);
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('1');
}

function function_2() {
    if (array_String.length == 0 || array_String.length == 1) {
        if (array_String[0] == undefined) {   
            array_String_SingleValue_indexZero += string_2;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_2;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('2');
}

function function_3() {
    if (array_String.length == 0 || array_String.length == 1) {
        if (array_String[0] == undefined) {   
            array_String_SingleValue_indexZero += string_3;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_3;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('3');
}

function function_4() {
    if (array_String.length == 0 || array_String.length == 1) {
        if (array_String[0] == undefined) {   
            array_String_SingleValue_indexZero += string_4;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_4;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('4');
}

function function_5() {
    if (array_String.length == 0 || array_String.length == 1) {
        if (array_String[0] == undefined) {   
            array_String_SingleValue_indexZero += string_5;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_5;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('5');
}

function function_6() {
    if (array_String.length == 0 || array_String.length == 1) {
        if (array_String[0] == undefined) {   
            array_String_SingleValue_indexZero += string_6;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_6;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('6');
}

function function_7() {
    if (array_String.length == 0 || array_String.length == 1) {
        if (array_String[0] == undefined) {   
            array_String_SingleValue_indexZero += string_7;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_7;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('7');
}

function function_8() {
    if (array_String.length == 0 || array_String.length == 1) {
        if (array_String[0] == undefined) {   
            array_String_SingleValue_indexZero += string_8;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_8;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('8');
}

function function_9() {
    if (array_String.length == 0 || array_String.length == 1) {
        if (array_String[0] == undefined) {   
            array_String_SingleValue_indexZero += string_9;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        } else if (array_String[0] != undefined && arithmetic_Operator == true) {
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('blokada');
        }
    } else if (array_String.length == 2) {
        array_String_SingleValue_indexTwo += string_9;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    arithmetic_Operator = false;
    if (counter_Decimal == undefined) {
        counter_Decimal = 0;
        return;
    }
    //alert('9');
}



function function_Decimal() {
    if (counter_Decimal == 0) {
        if (array_String.length == 0 || array_String.length == 1) {
            if (array_String[0] == undefined) {   
                array_String_SingleValue_indexZero += string_Decimal;
                calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
                counter_Decimal += 1;
            } else if (array_String[0] != undefined && arithmetic_Operator == true) {
                calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
                //alert('blokada');
            }
        } else if (array_String.length == 2) {
            array_String_SingleValue_indexTwo += string_Decimal;
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            counter_Decimal += 1;
        }
        arithmetic_Operator = false;
    } else {

    }
    //alert('.');
}



function function_Plus() {   // indexZero - liczba | indexOne - znak
    if (array_String_SingleValue_indexZero.length > 0 && array_String_SingleValue_indexOne.length == 0 || array_String[0] == 0) {   // /*array_String.length == 0*/
        arithmetic_Operator = true;
        counter_Decimal = undefined;
        // Tutaj są uzupełniane indeksty tablicy: [0] i [1].
        // Po wybraniu znaku arytmerycznego następuje konwersja "String'a" na "Number" i włożenie tej cyfry do pierwszego indeksu tablicy (array_String[0]).
        array_String[0] = Number(array_String_SingleValue_indexZero);    // Włożenie do indeksu pierwszego tabliy array_String zmienionej ze "String" na "Number" wartości
        array_String_SingleValue_indexOne += string_Plus;
        array_String[1] = array_String_SingleValue_indexOne;    // Włożenie do indeksu drugiego tabliy array_String wartości "String": (+)
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        //alert(array_String.length);
        //alert(array_String.length + "   " + array_String[0]);   // Test poprawności: OK
    } else if (array_String_SingleValue_indexZero != 0 && array_String.length == 1) {
        arithmetic_Operator = true;
        counter_Decimal = undefined;
        // Tutaj jest uzupełniany indeks tablicy: [1].
        array_String_SingleValue_indexOne += string_Plus;
        array_String[1] = array_String_SingleValue_indexOne;    // Włożenie do indeksu drugiego tabliy array_String wartości "String": (+)
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        //alert(array_String.length);
    }
//alert('plus');
}

function function_Minus() {
    if (array_String_SingleValue_indexZero.length > 0 && array_String_SingleValue_indexOne.length == 0 || array_String[0] == 0) {
        arithmetic_Operator = true;
        counter_Decimal = undefined;
        array_String[0] = Number(array_String_SingleValue_indexZero);
        array_String_SingleValue_indexOne += string_Minus;
        array_String[1] = array_String_SingleValue_indexOne;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    } else if (array_String_SingleValue_indexZero != 0 && array_String.length == 1) {
        arithmetic_Operator = true;
        counter_Decimal = undefined;
        array_String_SingleValue_indexOne += string_Minus;
        array_String[1] = array_String_SingleValue_indexOne;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    //alert('minus');
}

function function_Multiply() {
    if (array_String_SingleValue_indexZero.length > 0 && array_String_SingleValue_indexOne.length == 0 || array_String[0] == 0) {
        arithmetic_Operator = true;
        counter_Decimal = undefined;
        array_String[0] = Number(array_String_SingleValue_indexZero);
        array_String_SingleValue_indexOne += string_Multiply;
        array_String[1] = array_String_SingleValue_indexOne;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    } else if (array_String_SingleValue_indexZero != 0 && array_String.length == 1) {
        arithmetic_Operator = true;
        counter_Decimal = undefined;
        array_String_SingleValue_indexOne += string_Multiply;
        array_String[1] = array_String_SingleValue_indexOne;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    //alert('mnożenie');
}

function function_Divide() {
    if (array_String_SingleValue_indexZero.length > 0 && array_String_SingleValue_indexOne.length == 0 || array_String[0] == 0) {
        arithmetic_Operator = true;
        counter_Decimal = undefined;
        array_String[0] = Number(array_String_SingleValue_indexZero);
        array_String_SingleValue_indexOne += string_Divide;
        array_String[1] = array_String_SingleValue_indexOne;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    } else if (array_String_SingleValue_indexZero != 0 && array_String.length == 1) {
        arithmetic_Operator = true;
        counter_Decimal = undefined;
        array_String_SingleValue_indexOne += string_Divide;
        array_String[1] = array_String_SingleValue_indexOne;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    //alert('dzielenie');
}



function function_Equal() {
    if (array_String.length == 2 && array_String_SingleValue_indexTwo.length > 0) {
        array_String[2] = Number(array_String_SingleValue_indexTwo);    // Włożenie do indeksu trzeciego tabliy array_String zmienionej ze "String" na "Number" wartości
        //array_String_SingleValue_indexOne += string_Equal;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        array_Index_0 = array_String[0];
        array_Index_2 = array_String[2];
        switch (array_String[1]) {
            case '+':
                operation_Score = (array_Index_0 + array_Index_2);
                break;
            case '-':
                operation_Score = (array_Index_0 - array_Index_2);
                break;
            case 'x':
                operation_Score = (array_Index_0 * array_Index_2);
                break;
            case '/':
                operation_Score = (array_Index_0 / array_Index_2);
                break;
        }
        array_String_SingleValue_indexOne = '';
        array_String_SingleValue_indexTwo = '';
        array_String.pop();
        array_String.pop();
        array_String_SingleValue_indexZero = operation_Score;
        array_String[0] = array_String_SingleValue_indexZero;
        if (array_String[0] == Infinity || isNaN(array_String[0])) {
            array_String[0] = 0;
            array_String_SingleValue_indexZero = 0;
        } else {}
        calc_screen_Value.textContent = array_String_SingleValue_indexZero;
        //alert(array_String.length);
    } else {}
    if (counter_Decimal == 1) {
        counter_Decimal = 0;
        return;
    }
    //alert('równa się');
}



function function_AC() {
    array_String.pop();
    array_String.pop();
    array_String.pop();
    array_String.pop();
    array_String_SingleValue_indexZero = '';
    array_String_SingleValue_indexOne = '';
    array_String_SingleValue_indexTwo = '';
    calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    if (counter_Decimal == 1) {
        counter_Decimal = 0;
        return;
    }
    //alert('ac');
}

function function_DEL() {
    if (array_String.length == 0) {   // Kiedy nie istnieje żaden indeks
        array_String.pop();
        array_String_SingleValue_indexZero = '';
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        //alert('del-i-0');
        
    } else if (array_String.length == 1) {   // Kiedy istnieje: 1 indeks
        array_String.pop();
        array_String_SingleValue_indexZero = '';
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        //alert('del-i-1');
    }
    else if (array_String.length == 2 && array_String_SingleValue_indexTwo.length == 0) {   // Kiedy istnieją: 2 indeksy   // (.length == 0) jest tym samym co ('')
        array_String.pop();
        array_String_SingleValue_indexOne = '';
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        //alert('del-i-2');
    }
    else if (array_String.length == 2 && array_String_SingleValue_indexTwo.length > 0) {
        array_String[2] = Number(array_String_SingleValue_indexTwo);    // Włożenie do indeksu trzeciego tabliy array_String zmienionej ze "String" na "Number" wartości
        if (array_String.length == 3) {   // Kiedy istnieją: 3 index
            array_String.pop();
            array_String_SingleValue_indexTwo = '';
            calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
            //alert('del-i-2');
            
        } else {
             
        }
    }
    if (counter_Decimal == 1) {
        counter_Decimal = 0;
        return;
    }
}



function arrayLength() {
    alert(array_String.length);
}

function arrayItem0() {
    alert(array_String[0]);
}
(function() {
    let but = document.getElementsByTagName('button');
    for (i = 0; i < but.length; i++) {
        but[i].setAttribute('class', 'button-hide');
    }
}());



// Zaawansowany DEL: (Kasowanie pojedyńczych indeksów eelementów tablicy, po uprzedniej konwersji na typ danych "String")

// Pomysł na usuwanie poszczególnych cyfr i znaków opiera się w głównej mierze na pobieraniu poszczególnych indeksów tablicy,
// zamianie [0] i [2] indeksu na typ danych "String", przeprowadzenie operacji ".slice()", w celu pozbycia się ostatniego indeksu
// ciągu tekstowego (znaku), a następnie zmianie typy na "Number", włożenie wartości do tego samego indekstu tablicy i wyświetlenie
// na ekranie aktualnego stanu działania (działanie mniejsze o 1 cyfrę lub znak);\:
// Projekt nie był planowany od początku i z tego powodu nie kontynuowałem prac nad nim, a zostawiłem go na później, aby na 
// spokojnie zająć się nim.

/*let DEL_array_index_0;
let DEL_array_index_1;
let DEL_array_index_2;
let String_DEL_array_index_0;
let String_DEL_array_index_1;
let String_DEL_array_index_2;
let New_DEL_array_index_0;
let New_DEL_array_index_1;
let New_DEL_array_index_2;

function function_DEL() {
    DEL_array_index_0 = array_String_SingleValue_indexZero;
    DEL_array_index_1 = array_String_SingleValue_indexOne;
    DEL_array_index_2 = array_String_SingleValue_indexTwo;
    if (array_String.length == 0 && DEL_array_index_0.length > 0) {   // Kiedy nie istnieje żaden indeks
        String_DEL_array_index_0 = String(DEL_array_index_0);
        New_DEL_array_index_0 = String_DEL_array_index_0.slice(0, -1);
        array_String_SingleValue_indexZero = Number(New_DEL_array_index_0);
        array_String[0] = array_String_SingleValue_indexZero;
        if (array_String.length == 1) {
            array_String.pop();
        } else {

        }
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        
    } else if (array_String.length == 1) {   // Kiedy istnieje: 1 indeks
        String_DEL_array_index_0 = String(DEL_array_index_0);
        New_DEL_array_index_0 = String_DEL_array_index_0.slice(0, -1);
        array_String_SingleValue_indexZero = Number(New_DEL_array_index_0);
        array_String[0] = array_String_SingleValue_indexZero;
        if (array_String.length == 1) {
            array_String.pop();
        } else {

        }
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
    }
    else if (array_String.length == 2 && DEL_array_index_1.length == 1) {   // Kiedy istnieją: 2 indeksy
        New_DEL_array_index_1 = DEL_array_index_1.slice(0, -1);
        array_String_SingleValue_indexOne = New_DEL_array_index_1;
        array_String[1] = array_String_SingleValue_indexOne;
        calc_screen_Value.textContent = array_String_SingleValue_indexZero + array_String_SingleValue_indexOne + array_String_SingleValue_indexTwo;
        if (array_String.length == 2) {
            array_String.pop();
        } else {
            
        }

    } else if (array_String.length == 2 && DEL_array_index_2.length > 0) {   // Kiedy istnieją: 3 index
        
    }
    alert('del');
}



function arrayLength() {
    alert(array_String.length);
}*/
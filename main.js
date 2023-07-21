// Завданяя 1

const selectedDrink = document.querySelector("#result1");

const selectDrink = document.querySelector("[name=product-drink]");

function drinkHandler() {
    switch (selectDrink.value) {

        case "nothing":
            selectedDrink.textContent = "Нічого не обрано";
        break
        
        case "coffee":
            selectedDrink.textContent = "Обрано каву";
        break

        case "tea":
            selectedDrink.textContent = "Обрано чай";
        break
    
        case "juice":
            selectedDrink.textContent = "Обрано сік";
        break    

    }
}

selectDrink.addEventListener("click", drinkHandler);

// Завдання 2

const checkDayInput = document.querySelector("#check-day-input");

const inputedDay = document.querySelector("#result2");

const btn1 = document.querySelector("#btn1");

function checkDayHandler() {

    switch (checkDayInput.value) {

        case "Понеділок":
        case "Вівторок":
        case "Середа":
        case "Четвер":
        case "П'ятниця":
            inputedDay.textContent = "Це робочий день";
        break
        
        case "Субота":
        case "Неділя":
            inputedDay.textContent = "Це вихідний день";
        break
        
        default:
            inputedDay.textContent = "Введіть день тижня";

    }
}

btn1.addEventListener("click", checkDayHandler);

// Завдання 3

const monthInput1 = document.querySelector("#month-number-input1");

const btn2 = document.querySelector("#btn2");

const InputedMonthSeason = document.querySelector("#result3");

function monthNumberHandler() {

    switch (monthInput1.value.toString()) {

        case "12":
        case "1":
        case "2":
            InputedMonthSeason.textContent = "Це місяць зими";
        break
        
        case "3":
        case "4":
        case "5":
            InputedMonthSeason.textContent = "Це місяць весни";
        break
        
        case "6":
        case "7":
        case "8":
            InputedMonthSeason.textContent = "Це місяць літа";
        break 

        case "9":
        case "10":
        case "11":
            InputedMonthSeason.textContent = "Це місяць осені";
        break

        default:
            InputedMonthSeason.textContent = "Це не номер місяця";

    }
}

btn2.addEventListener("click", monthNumberHandler);

// Завдання 4

const monthInput2 = document.querySelector("#month-number-input2");

const days = document.querySelector("#result4");

const btn3 = document.querySelector("#btn3");

function daysInMonth() {

    switch (monthInput2.value.toString()) {

        case "4":
        case "6":
        case "9":
        case "11":
            days.textContent = "У цьому місяці 30 днів";
        break
        
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            days.textContent = "В цьому місяці 31 день";
        break
        
        case "2":
            days.textContent = "В цьмоу місяці 28 днів";
        break
        
        default:
            days.textContent = "Це не номер місяця";
            
    }
}

btn3.addEventListener("click", daysInMonth);

// Завдання 5

const colorInput = document.querySelector("#color-input");

const btn4 = document.querySelector("#btn4");

const colorAction = document.querySelector("#result5");

function colorHandler() {

    switch (colorInput.value) {

        case "Червоний":
            colorAction.textContent = "Стоп";
        break
        
        case "Жовтий":
            colorAction.textContent = "Чекати";
        break
        
        case "Зелений":
            colorAction.textContent = "Йти";
        break
        
        default:
            colorAction.textContent = "Це не назва кольору";
        
    }
}

btn4.addEventListener("click", colorHandler);

// Завдання 6

const numberInput1 = document.querySelector("#number-input1");

const numberInput2 = document.querySelector("#number-input2");

const btn5 = document.querySelector("#btn5");

const mathOperation = document.querySelector("#choose-operation");

const operationResult = document.querySelector("#result6");

function operationHandler() {

    if (numberInput1.value && numberInput2.value) {

    switch (mathOperation.value) {

        case "+":
            operationResult.textContent = parseInt(numberInput1.value) + parseInt(numberInput2.value);
        break
        
        case "-":
            operationResult.textContent = parseInt(numberInput1.value) - parseInt(numberInput2.value);
        break
        
        case "*":
            operationResult.textContent = parseInt(numberInput1.value) * parseInt(numberInput2.value);
        break
        
        case "/":
            if (numberInput2.value === "0") {
                alert("На нуль ділити не можна");
            } else {
                operationResult.textContent = parseInt(numberInput1.value) / parseInt(numberInput2.value);
            }
        break
        }
        
    }

}

btn5.addEventListener("click", operationHandler);
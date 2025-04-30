let input = document.querySelector(".input");

let buttons = document.querySelectorAll(".buttons");

let buttonsArray = Array.from(buttons);

let string = "";

buttonsArray.forEach((btn) => {

    btn.addEventListener('click', (event) => {

        if (event.target.innerHTML == "DEL") {

            string = string.substring(0, string.length - 1);
            input.value = string;

        } else if (event.target.innerHTML == "C") {

            string = '';
            input.value = string;

        }
        else if (event.target.innerHTML == "=") {

            string = eval(string);
            input.value = string;

        }
        else {

            string += event.target.innerHTML;
            input.value = string;

        }

    });

})
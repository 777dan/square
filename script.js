let intervalId;
let bottom = false,
    right = false,
    time = 400;
let leftOffset = 0;
let topOffset = 0;
let counter = 0;
let box = document.querySelector('#box');

function moveBox() {
    box.style.left = leftOffset + "px";
    box.style.top = topOffset + "px";

    if (leftOffset > 200) {
        right = true
    } else if (leftOffset == 0) {
        right = false;
    }

    if (topOffset > 200) {
        bottom = true
    } else if (topOffset == 0) {
        bottom = false;
    }

    if (bottom == false && right == false) {
        topOffset = topOffset + 30;
    }

    if (bottom == false && right == true) {
        leftOffset = leftOffset - 30;
    }

    if (bottom == true && right == false) {
        leftOffset = leftOffset + 30;
    }

    if (bottom == true && right == true) {
        topOffset = topOffset - 30;
    }
};
intervalId = setInterval(moveBox, time);

const showResult = (result) => {
    box.textContent = `You ${result}!`;
    box.style.fontSize = "16px";
    clearInterval(intervalId);
}

box.addEventListener('click', (event) => {
    if (counter < 10) {
        counter++;
        if (counter === 10) {
            showResult('won');
        } else {
            time -= 30;
            event.target.textContent = counter;
            clearInterval(intervalId);
            intervalId = setInterval(moveBox, time);
        }
    }
});

setTimeout(() => {
    if (counter < 10) {
        showResult('lose');
    }
}, 10000);
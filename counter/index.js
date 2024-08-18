let numElements = document.getElementsByClassName("num");

function startCounter(element, speed, delay) {
    let num = 0;
    let targetValue = parseInt(element.getAttribute("data-val")); 

    setTimeout(() => {
        let id = setInterval(() => {
            num += 1;
            element.innerHTML = num;

            if (num >= targetValue) {
                clearInterval(id);
                console.log("Counter stopped at:", num);
            }
        }, speed); 
    }, delay); 
}

Array.from(numElements).forEach((element, index) => {
    startCounter(element, 10, index * 1000); 
});



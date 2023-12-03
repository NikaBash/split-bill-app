const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if(bill === "" || people === "" || people < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!',
            })
            return false;
    }
    let amountPerPerson = bill/people;
    let tipPerPerson = (bill * tip)/people;
    let totalSum = amountPerPerson + tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalSum;
}

gsap.from("h1", {
    y:-200,
    ease:"power2.inOut",
    duration:3,
    delay:1,
    opacity:0.5,
})
gsap.from("#billSplit", {
    x: -200,
    ease:"power2.inOut",
    duration:3,
    delay:3,
    opacity:0,
})
gsap.from("#totalTip", {
    y: 200,
    ease:"power2.inOut",
    duration:3,
    delay:3,
    opacity:0,
})
gsap.from("#totalAmount", {
    x: 200,
    ease:"power2.inOut",
    duration:3,
    delay:3,
    opacity:0,
})
gsap.from("form", {
    x:-200,
    ease:"power2.inOut",
    duration:3,
    delay:2,
    opacity:0,
})

function ageGroupFinder(age) {
    if (age < 5) {
        return "Baby";
    } else if (age < 13) {
        return "Child";
    } else if (age < 18) {
        return "Teenager";
    } else if (age < 26) {
        return "Young Adult";
    } else if (age < 61) {
        return "Adult";
    } else {
        return "Old";
    }
}

const triggerFinder = () => {
    let age = document.getElementById("age").value;
    let result = ageGroupFinder(age);
    document.getElementById("result").innerHTML = `You are ${result}`;
}

document.getElementById("age").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        triggerFinder();
    }
});

document.getElementById("btn").addEventListener("click", function() {
    triggerFinder();
});

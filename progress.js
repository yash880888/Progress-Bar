let prev = document.getElementById("prev")
let next = document.getElementById("next")
let num = document.querySelectorAll(".circle")
let count = 0;
let progress = document.querySelector(".progress");

console.log(num);

next.addEventListener("click", () => {
    if (count < num.length) {         //count length thi ocho hase tyaa condition true
        count += 1;
        num[count].classList.add('active');
        prev.disabled = false;
        prev.style.backgroundColor = "blueviolet";

    }
    progress.style.width = (count / (num.length - 1)) * 88 + "%";

    if (count == num.length - 1) {   // jo count and length banne equal hoy to next button disabled thase and color gray thase

        // console.log("above limit");
        next.disabled = true;
        next.style.backgroundColor = "grey";
        // count = num.length + 1;
    }


})

prev.addEventListener("click", () => {
    if (count > 0) {
        num[count].classList.remove("active");
        next.disabled = false;
        next.style.backgroundColor = "blueviolet";
        count -= 1;

    }
    progress.style.width = (count / (num.length - 1)) * 88 + "%";

    if (count < 1) {

        // console.log("above limit");
        prev.disabled = true;
        prev.style.backgroundColor = "grey";
        // count = -1;
    }

})

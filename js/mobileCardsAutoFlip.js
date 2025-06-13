document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(callback, options);

    if (window.getComputedStyle(document.querySelector(".cards-container")).flexDirection == "column"){
        let cards = document.querySelectorAll(".card-static");
        for (let card of cards){
            observer.observe(card);
        }
    }
});
const options = {
    root: null,
    rootMargin: "-5% -5% -5% -5%",
    threshold: 1.0,
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        entry.target.querySelector(".card").style.transform = "rotateY(180deg)";
        let cards = document.querySelectorAll(".card-static");
        for (let card of cards){
            if (card != entry.target){
                card.querySelector(".card").style.transform = "rotateY(0deg)";
            }
        }
    });
};
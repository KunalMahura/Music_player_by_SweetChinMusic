document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;

            if (details.style.display === "block") {
                details.style.display = "none";
                button.textContent = "Read More";
            } else {
                details.style.display = "block";
                button.textContent = "Read Less";
            }
        });
    });
});

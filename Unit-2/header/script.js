"use strict"
{
    const button = document.querySelector("button.toggle-dark-mode");
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    })
}
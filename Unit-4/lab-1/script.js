function main() {
    const growMe = document.getElementById("grow-me");
    growMe.classList.add("big");

    const shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

    const li = document.querySelectorAll("li");
    for(i of li) {
        console.log(i.innerText);
    }

    const link = document.querySelector(".link");
    link.setAttribute("href", "https://www.example.com");
    link.innerText = "somewhere";

    const hideMe = document.getElementById("hide-me");
    hideMe.setAttribute("style", "display: none");

    const showMe = document.getElementById("show-me");
    showMe.setAttribute("style", "display: block");

    let name = document.getElementById("name");
    const h1 = document.querySelector("h1");
    
    if(name.value != ""){
    h1.innerText = `Welcome ${name.value}`;
}

}

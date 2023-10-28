let yol1 ="../public/frontend/css/gunduz/index.css"
let yol2 ="../public/frontend/css/gece/index.css"
let css = document.getElementById("theme")

let ico = document.getElementById("switch")
console.log(css)
ico.addEventListener("change", function() {
    if (this.checked) {
        css.setAttribute("href",yol1)
    } else {
        css.setAttribute("href",yol2)
    }
})

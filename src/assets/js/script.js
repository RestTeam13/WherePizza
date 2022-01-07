document.addEventListener('DOMContentLoaded', function () {
    filterBtn()
})

function filterBtn() {
    document.querySelector(".catalog__filters").addEventListener("click", evt => {
        document.querySelector(".filter-popup").classList.add("active")
    })
    document.querySelector(".filter-popup__title-cross").addEventListener("click", evt => {
        document.querySelector(".filter-popup").classList.remove("active")
    })
}

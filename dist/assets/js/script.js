document.addEventListener('DOMContentLoaded', function () {
    filterBtn()
    handlerSwitch()
    openPopup()
    openMobileMenu()
})

function filterBtn() {
    if( document.querySelector(".catalog__filters")){
        document.querySelector(".catalog__filters").addEventListener("click", evt => {
            document.querySelector(".filter-popup").classList.add("active")
            document.querySelector(".background-blur").classList.add("active")
        })
        document.querySelector(".filter-popup__title-cross").addEventListener("click", evt => {
            document.querySelector(".filter-popup").classList.remove("active")
            document.querySelector(".background-blur").classList.remove("active")
        })
    }
}

function handlerSwitch() {
    document.querySelectorAll(".switch").forEach(currentSwitch => {
        let switchBtns = currentSwitch.querySelectorAll(".switch__btn")
        let switchBg = currentSwitch.querySelector(".switch__bg")
        switchBtns.forEach(currentSwitchBtn => {
            if (currentSwitchBtn.classList.contains("active")) {
                switchBg.style.left = currentSwitchBtn.offsetLeft + "px"
                switchBg.style.width = getComputedStyle(currentSwitchBtn).width
            }
            currentSwitchBtn.addEventListener("click", evt => {
                switchBtns.forEach(currentBtn => {
                    currentBtn.classList.remove("active")
                })
                currentSwitchBtn.classList.add("active")
                switchBg.style.left = currentSwitchBtn.offsetLeft + "px"
                switchBg.style.width = getComputedStyle(currentSwitchBtn).width
            })
        })
    })
}

function openPopup() {
    document.querySelectorAll(".catalog__item-card").forEach(currentBtn => {
        currentBtn.addEventListener("click", evt => {
            document.querySelector(".current-popup").classList.add("active")
            document.querySelector(".background-blur").classList.add("active")

        })
        document.querySelectorAll(".current-popup__cross").forEach(popupCross => {
            popupCross.addEventListener("click", evt => {
                document.querySelector(".current-popup").classList.remove("active")
                document.querySelector(".background-blur").classList.remove("active")
            })
        })

    })

}

function openMobileMenu() {
    document.querySelector(".menu__burger").addEventListener("click", evt => {
        document.querySelector(".menu__burger").classList.toggle("active")
        document.querySelector(".mobile-menu").classList.toggle("active")
        document.querySelector(".background-blur").classList.toggle("active")
    })
}


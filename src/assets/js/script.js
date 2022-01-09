document.addEventListener('DOMContentLoaded', function () {
    filterBtn()
    handlerSwitch()
    openCurrentPopup()
    openMobileMenu()
    togglingBtn()
    resettingBtn()
})

function filterBtn() {
    function closeFilter() {
        document.querySelector(".filter-popup").classList.remove("active")
        document.querySelector(".background-blur").classList.remove("active")
    }

    document.querySelector(".catalog__filters").addEventListener("click", evt => {
        document.querySelector(".filter-popup").classList.add("active")
        document.querySelector(".background-blur").classList.add("active")
    })
    document.querySelector(".filter-popup__title-cross").addEventListener("click", evt => {
        closeFilter()

    })
    document.querySelectorAll(".current-popup__cross_mobile").forEach(mobileCross => {
        mobileCross.addEventListener("click", evt => {
            closeFilter()

        })
    })
    document.querySelector(".filter-popup__button_apply").addEventListener("click", evt => {
        closeFilter()

    })
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

function openCurrentPopup() {
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
        document.querySelector(".header__menu").classList.toggle("active")
    })
}

function togglingBtn() {
    let toggleBtn = document.querySelectorAll(".toggle-btn").forEach(currentToggleBtn => {
        currentToggleBtn.addEventListener("click", evt => {
            currentToggleBtn.classList.toggle("active")
        })
    })

}

function resettingBtn() {
    document.querySelector(".filter-popup__button_orange").addEventListener("click", evt => {
        document.querySelectorAll(".filter-popup__block-item.active").forEach(activeBtns => {
            activeBtns.classList.remove("active")
        })
    })


}


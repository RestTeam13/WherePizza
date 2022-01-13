document.addEventListener('DOMContentLoaded', function () {
    filterBtn()
    handlerSwitch()
    openPopup()
    openMobileMenu()
    openMiniPopups()
    resettingBtn()
    openCart()
    select()
    startSlider()
    swipeForm()
    openText()
    summary()
    openHistory()
    changeForm()
    hideFirstHeaderRow()
})

function select() {
    if (document.querySelectorAll(".custom-select")) {
        document.querySelectorAll(".custom-select").forEach(currentSelect => {
            let headerSelect = currentSelect.querySelector('.custom-select__header')
            let itemSelects = currentSelect.querySelectorAll(".custom-select__list-item > p")
            headerSelect.addEventListener('click', evt => {
                headerSelect.classList.toggle('active')
                itemSelects.forEach(select => {
                    select.parentElement.style.display = ''
                    if (select.textContent === headerSelect.querySelector('p').textContent) {
                        select.parentElement.style.display = 'none'
                    }
                })
            })

            itemSelects.forEach(currentItem => {
                currentItem.addEventListener('click', evt => {
                    headerSelect.querySelector('p').textContent = currentItem.textContent
                    headerSelect.classList.remove('active')
                })
            })
        })
    }
}

function openCart() {
    if (document.querySelector(".menu__cart ")) {
        let cartPopup = document.querySelector(".cart-popup")
        document.querySelector(".menu__cart ").addEventListener("click", evt => {
            cartPopup.classList.add("active")
            document.querySelector(".background-blur").classList.add("active")
        })
        document.querySelector(".cart-popup").querySelector('.filter-popup__title-cross').addEventListener("click", evt => {
            cartPopup.classList.remove("active")
            document.querySelector(".background-blur").classList.remove("active")
        })
        document.querySelectorAll(".current-popup__cross_mobile").forEach(mobileCross => {
            mobileCross.addEventListener("click", evt => {
                cartPopup.classList.remove("active")
                document.querySelector(".background-blur").classList.remove("active")
            })
        })
    }
}

function closeFilter() {
    if (document.querySelector(".filter-popup")) {
        document.querySelector(".filter-popup").classList.remove("active")
        document.querySelector(".background-blur").classList.remove("active")
    }

}

function filterBtn() {
    if (document.querySelector(".catalog__filters")) {
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
}

function handlerSwitch() {
    if (document.querySelectorAll(".switch")) {
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
}

function openPopup() {
    if (document.querySelectorAll(".catalog__item-card")) {
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
            document.querySelector('.current-popup__result-btn').addEventListener('click', evt => {
                document.querySelector(".current-popup").classList.remove("active")
                document.querySelector(".background-blur").classList.remove("active")
                document.querySelector(".menu__cart-popup").classList.add("active")
                setTimeout(function () {
                    document.querySelector(".menu__cart-popup").classList.remove("active")
                }, 3000)


            })

        })
    }
}

function openMobileMenu() {
    if (document.querySelector(".menu__burger")) {
        document.querySelector(".menu__burger").addEventListener("click", evt => {
            document.querySelector(".menu__burger").classList.toggle("active")
            document.querySelector(".mobile-menu").classList.toggle("active")
            document.querySelector(".background-blur").classList.toggle("active")
            document.querySelector(".header__menu").classList.add("active")
            if (!document.querySelector(".menu__burger.active")) {
                setTimeout(function () {
                    document.querySelector(".header__menu").classList.remove("active")

                }, 300)
            }
        })
    }
}

function openMiniPopups() {
    document.querySelectorAll(".toggle-btn").forEach(currentToggleBtn => {
        currentToggleBtn.addEventListener("click", evt => {
            currentToggleBtn.classList.toggle("active")
        })
    })

}

function resettingBtn() {
    if (document.querySelector(".filter-popup__button_orange")) {
        document.querySelector(".filter-popup__button_orange").addEventListener("click", evt => {
            document.querySelectorAll(".filter-popup__block-item.active").forEach(activeBtns => {
                activeBtns.classList.remove("active")
            })
        })
    }
}

function startSlider() {
    $('.slick-slider').slick(
        {
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        variableWidth: true
                    }
                }
            ]
        }
    )
}

function swipeForm() {
    if (document.querySelector(".swipe-btn")) {
        document.querySelector(".swipe-btn").addEventListener("click", evt => {
            let formBlocks = document.querySelectorAll(".swiping-form")
            document.querySelectorAll(".switch__btn").forEach((currentBtn, index) => {
                if (currentBtn.classList.contains("active")) {
                    formBlocks.forEach((currentForm, indexForm) => {
                        currentForm.classList.remove("active")
                        if (indexForm === index) {
                            currentForm.classList.add("active")
                        }
                    })
                }
            })
        })
    }
}

function openText() {
    if (document.querySelector(".about-delivery__show-more-btn")) {
        let deliveryBtn = document.querySelector(".about-delivery__show-more-btn")
        let deliveryText = document.querySelector(".about-delivery__text")
        deliveryBtn.addEventListener("click", evt => {
            deliveryBtn.classList.add("active")
            deliveryText.classList.toggle("active")
        })
    }
}

function summary() {
    if (document.querySelector(".order-list__item")) {
        document.querySelectorAll(".order-list__item").forEach(currentOrder => {
            currentOrder.querySelectorAll(".order-details__svg-button").forEach(currentBtn => {
                currentBtn.addEventListener("click", evt => {
                    currentBtn.classList.toggle("active")
                    currentOrder.querySelector(".order-products").classList.toggle("active")
                })
            })
        })
    }
}

function openHistory() {
    if (document.querySelectorAll(".order-list__item")) {
        if (window.matchMedia("(max-width: 767px)").matches) {
            let listItem = document.querySelectorAll(".order-list__item")
            let popup = document.querySelector(".account-popup")
            let content = document.querySelector(".block__content_account")
            listItem.forEach(currentItem => {
                currentItem.addEventListener("click", evt => {
                    popup.classList.add("active")
                    content.classList.add("active")
                    content.style.height = getComputedStyle(popup).height

                })
            })
            document.querySelector('.account-popup__title-back').addEventListener("click", evt => {
                popup.classList.remove("active")
                content.classList.remove("active")
                content.style.height = "unset"
            })
        }
    }


}

function changeForm() {
    if (document.querySelector(".personal-data__button-text")) {
        let blocks = document.querySelectorAll(".account-data__list")
        blocks.forEach(currentBlock => {
            currentBlock.querySelector(".personal-data__button-text").addEventListener("click", event => {
                currentBlock.querySelectorAll(".input-text").forEach(currentInput => {
                    currentInput.removeAttribute("disabled")
                    currentInput.classList.add("active")
                })
                currentBlock.querySelector(".personal-data__button-text").classList.add("active")
                currentBlock.querySelector(".account-data__list-btn").classList.add("active")
                currentBlock.querySelector(".personal-data__title").classList.add("active")
                currentBlock.querySelectorAll(".input-text__wrapper").forEach(wrapperInput => {
                    wrapperInput.classList.add("active")
                })

            })
            currentBlock.querySelector(".account-data__list-btn").addEventListener("click", evt => {
                currentBlock.querySelectorAll(".input-text").forEach(currentInput => {
                    currentInput.getAttribute("disabled")
                    currentInput.classList.remove("active")
                })
                currentBlock.querySelector(".personal-data__button-text").classList.remove("active")
                currentBlock.querySelector(".account-data__list-btn").classList.remove("active")
                currentBlock.querySelector(".personal-data__title").classList.remove("active")
                currentBlock.querySelectorAll(".input-text__wrapper").forEach(wrapperInput => {
                    wrapperInput.classList.remove("active")
                })

            })
        })

    }

}

function hideFirstHeaderRow() {
    const headerTopRow = document.querySelector('.menu__row_top')
    window.addEventListener('scroll', () => {
        const isTop = window.scrollY < 100
        if (!isTop) {
            headerTopRow.classList.add('hidden')
        } else {
            headerTopRow.classList.remove('hidden')
        }
    });
}
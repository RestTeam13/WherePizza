document.addEventListener('DOMContentLoaded', function () {
    select()
    handlerSwitch()

    openMobileMenu()
    openCart()
    resetBtnHandler()
    startSlider()
    swipeForm()
    openText()
    summary()
    openHistory()
    changeForm()
    headerHandler()
    addTimeInputs()
    auth()

    addFilterBtnsHandler()

    popupsHandler()
})

function select() {
    if (document.querySelectorAll(".custom-select")) {
        document.querySelectorAll(".custom-select").forEach(currentSelect => {
            const headerSelect = currentSelect.querySelector('.custom-select__header')
            const itemSelects = currentSelect.querySelectorAll(".custom-select__list-item > p")
            const area = currentSelect.querySelector('.custom-select__area')

            area.addEventListener('click', evt => {
                headerSelect.classList.remove('active')
                area.classList.remove('active')
            })

            headerSelect.addEventListener('click', evt => {
                headerSelect.classList.toggle('active')
                area.classList.toggle('active')
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
                    area.classList.remove('active')
                })
            })
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

function openCart() {
    if (document.querySelector(".menu__cart")) {
        let cartPopup = document.querySelector(".cart-popup")
        document.querySelector(".menu__cart ").addEventListener("click", evt => {
            cartPopup.classList.add("active")
            document.querySelector(".background-blur").classList.add("active")
        })
        document.querySelector(".cart-popup").querySelector('.filter-popup__title-cross').addEventListener("click", evt => {
            cartPopup.classList.remove("active")
            document.querySelector(".background-blur").classList.remove("active")
        })
        document.querySelectorAll(".choose-item-popup__cross_mobile").forEach(mobileCross => {
            mobileCross.addEventListener("click", evt => {
                cartPopup.classList.remove("active")
                document.querySelector(".background-blur").classList.remove("active")
            })
        })
    }
}

function resetBtnHandler() {
    if (!document.querySelector(".standard-btn[data-reset]")) return
    document.querySelector(".standard-btn[data-reset]").addEventListener("click", () => {
        document.querySelectorAll(".filter-popup__filter-btn.active").forEach(activeBtn => {
            activeBtn.classList.remove("active")
        })
    })

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

function headerHandler() {
    const header = document.querySelector('.header'),
        headerTopRow = document.querySelector('.menu__row_top'),
        headerBottomRow = headerTopRow.nextElementSibling

    if (document.querySelector('.standalone-menu')) {
        const standaloneMenu = document.querySelector('.standalone-menu')
        window.addEventListener('scroll', () => {
            if (standaloneMenu.getBoundingClientRect().bottom < 0) {
                header.classList.add('fixed')
                headerTopRow.classList.add('hidden')
                headerBottomRow.querySelector('.menu__nav').classList.add('active')
            } else {
                header.classList.remove('fixed')
                headerTopRow.classList.remove('hidden')
                headerBottomRow.querySelector('.menu__nav').classList.remove('active')
            }
        })
    } else {
        headerBottomRow.querySelector('.menu__nav').classList.add('active')
        header.classList.add('fixed')

        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100
            if (!isTop) {
                headerTopRow.classList.add('hidden')
            } else {
                headerTopRow.classList.remove('hidden')
            }
        });
    }


}

function addTimeInputs() {
    if (document.querySelector('.payment__form-radio-row_time')) {

        document.querySelector('.payment__form-radio-row_time').querySelectorAll('input[name="time"]').forEach(radio => {
            radio.addEventListener('click', () => {
                radio.value === 'time' && radio.checked ? document.querySelector('.payment__form-pick-date').classList.add('active')
                    : document.querySelector('.payment__form-pick-date').classList.remove('active')
            })
        })
    }
}

function auth() {
    if (document.querySelector('.menu__login')) {
        const loginBtn = document.querySelector('.menu__login'),
            loginPopup = document.querySelector(".authorization-popup"),
            blur = document.querySelector(".background-blur"),
            contentBlocks = loginPopup.querySelectorAll('.block__content')

        if (loginBtn.hasAttribute('data-login')) {
            loginBtn.addEventListener('click', () => {
                loginPopup.classList.add("active")
                blur.classList.add("active")
            })
            loginPopup.querySelector('.choose-item-popup__cross_pc').addEventListener('click', () => {
                loginPopup.classList.remove('active')
            })

            loginPopup.querySelector('.authorization-content__button-text.standard-btn').addEventListener('click', () => {
                contentBlocks[0].setAttribute('hidden', true)
                contentBlocks[1].removeAttribute('hidden')
            })
        }
    }

}

function addFilterBtnsHandler() {
    if (!document.querySelector('.filter-popup')) return
    document.querySelector('.filter-popup').querySelectorAll('.filter-popup__filter-btn.toggle-btn').forEach(filterBtn => {
        filterBtn.addEventListener('click', ()=>{
            filterBtn.classList.toggle('active')
        })
    })
}

//popups

function popupsHandler() {
    if (document.querySelector('[data-popup-name]')) {
        let openPopupElements = document.querySelectorAll('[data-popup-name]'),
            blur = document.querySelector('.background-blur')

        openPopupElements.forEach(currentOpenPopupElement => {
            let popup = getPopup(currentOpenPopupElement)
            handlerClosePopupElements(popup)

            currentOpenPopupElement.addEventListener('click', event => {
                event.preventDefault()
                popup.classList.add('active')
                currentOpenPopupElement.hasAttribute('data-open-blur') ?
                    blur.classList.add('active') : null
            })
        })
    }
}

function getPopup(openPopupElement) {
    const popupName = openPopupElement.getAttribute('data-popup-name')
    return document.querySelector(`.${popupName}`)
}

function handlerClosePopupElements(popup) {
    if (popup.querySelectorAll('[data-popup-close]')) {
        let allClosePopupElements = popup.querySelectorAll('[data-popup-close]')

        allClosePopupElements.forEach(popupCloseElement => {
            popupCloseElement.addEventListener('click', event => {
                event.preventDefault()
                popup.classList.remove('active')
                document.querySelector('.background-blur').classList.remove('active')
            })
        })
    }
}

function closePopupOnClickBlur() {
    if (!document.querySelector('.background-blur')) return


}
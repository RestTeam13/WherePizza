document.addEventListener('DOMContentLoaded', function () {
    select()
    handlerSwitch()
    openMobileMenu()
    resetBtnHandler()
    startSlider()
    addTabsHandler()
    openText()
    summary()
    openHistory()

    changeAccountForm()
    headerHandler()
    addTimeInputs()
    auth()
    timerHandler()
    addInputCountersHandler()
    addToggleBtnsHandler()
    popupsHandler()
    closePopupOnClickBlur()
})


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
            document.querySelector(".header__menu").classList.add("active")
            if (!document.querySelector(".menu__burger.active")) {
                setTimeout(function () {
                    document.querySelector(".header__menu").classList.remove("active")

                }, 300)
            }
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

function addTabsHandler() {
    if (!document.querySelector("[data-open-tab]")) return
    const openTabsBtn = document.querySelectorAll("[data-open-tab]"),
        allTabs = document.querySelectorAll("[data-tab]")

    openTabsBtn.forEach(openTabBtn => {
        openTabBtn.addEventListener("click", () => {
            allTabs.forEach(tab => {
                tab.classList.remove('active')
                if (openTabBtn.getAttribute('data-open-tab') === tab.getAttribute('data-tab')) {
                    tab.classList.add('active')
                }
            })
        })
    })
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
            let popup = document.querySelector(".account-popup")
            let content = document.querySelector(".block__content_account")
            content.addEventListener('click', evt => {

            })
        }
    }
}

function changeAccountForm() {
    if (document.querySelector(".personal-data__btn-change")) {
        const blocks = document.querySelectorAll(".account-data__list.account-data__list_data")
        blocks.forEach(currentBlock => {
            currentBlock.querySelector(".personal-data__btn-change").addEventListener("click", event => {
                currentBlock.querySelectorAll(".input-text").forEach(currentInput => {
                    currentInput.removeAttribute("disabled")
                    currentInput.classList.add("active")
                })

                currentBlock.querySelector(".personal-data__btn-change").classList.add("active")
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
                currentBlock.querySelector(".personal-data__btn-change").classList.remove("active")
                currentBlock.querySelector(".account-data__list-btn").classList.remove("active")
                currentBlock.querySelector(".personal-data__title").classList.remove("active")
                currentBlock.querySelectorAll(".input-text__wrapper").forEach(wrapperInput => {
                    wrapperInput.classList.remove("active")
                })

            })

        })
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
        const loginPopup = document.querySelector(".authorization-popup"),
            contentBlocks = loginPopup.querySelectorAll('.authorization-content__block')
        let timerStartEvent = new Event('startTimer')

        loginPopup.querySelector('.authorization-content__button.standard-btn').addEventListener('click', () => {
            contentBlocks[0].classList.remove('active')
            contentBlocks[1].classList.add('active')
            document.querySelector('[data-start-timer]').dispatchEvent(timerStartEvent)
        })
    }
}

function addToggleBtnsHandler() {
    if (!document.querySelector('.toggle-btn')) return
    document.querySelectorAll('.toggle-btn').forEach(toggleBtn => {
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('active')
        })
    })
}

function addInputCountersHandler() {
    if (!document.querySelector('.input-counter')) return

    const allInputCounters = document.querySelectorAll('.input-counter')

    allInputCounters.forEach(inputCounter => {
        const btnMinus = inputCounter.querySelector('[data-input-minus]'),
            btnPlus = inputCounter.querySelector('[data-input-plus]')
        let counter = inputCounter.querySelector('.input-counter__num')

        btnMinus.addEventListener('click', () => {
            let num = +counter.textContent
            num > 0 ? counter.textContent = --num : null
        })
        btnPlus.addEventListener('click', () => {
            let num = +counter.textContent
            counter.textContent = ++num
        })
    })
}

function timerHandler() {
    if (!document.querySelector('[data-start-timer]')) return
    const timerTextBlock = document.querySelector('[data-start-timer]')
    let time = 59,
        timerId = null,
        timerEndEvent = new Event('endTimer')

    function updateTimer() {
        if (time <= 0) {
            timerTextBlock.dispatchEvent(timerEndEvent)
            clearInterval(timerId);
            return
        }
        timerTextBlock.querySelector('span').textContent = `${time}`
        time--
    }

    timerTextBlock.addEventListener('startTimer', () => {
        timerId = setInterval(updateTimer, 1000)
    })
    timerTextBlock.addEventListener('endTimer', () => {
        timerTextBlock.innerHTML = `Отправить код ещё раз через: <button>Отправить</button>`
    })
}

//popups

function popupsHandler() {
    if (!document.querySelector('[data-popup-name]')) return

    let openPopupEvent = new Event('openPopup')

    let openPopupElements = document.querySelectorAll('[data-popup-name]'),
        blur = document.querySelector('.background-blur')

    openPopupElements.forEach(currentOpenPopupElement => {
        let popup = getPopup(currentOpenPopupElement)
        handlerClosePopupElements(popup)

        currentOpenPopupElement.addEventListener('click', event => {
            event.preventDefault()
            popup.classList.add('active')
            popup.dispatchEvent(openPopupEvent)
            if (!currentOpenPopupElement.hasAttribute('data-scroll')) {
                document.body.style.overflow = 'hidden'
            }
            currentOpenPopupElement.hasAttribute('data-open-blur') ? blur.classList.add('active') : null
        })
    })
}

function getPopup(openPopupElement) {
    const popupName = openPopupElement.getAttribute('data-popup-name')
    return document.querySelector(`.${popupName}`)
}

function handlerClosePopupElements(popup) {
    if (!popup.querySelector('[data-popup-close]')) return
    let allClosePopupElements = popup.querySelectorAll('[data-popup-close]')

    allClosePopupElements.forEach(popupCloseElement => {
        const closeTime = +popupCloseElement.getAttribute('data-popup-close')

        if (closeTime > 0) {
            popup.addEventListener('openPopup', () => {
                setTimeout(() => {
                    popup.classList.remove('active')
                    document.querySelector('.background-blur').classList.remove('active')
                    document.body.style.overflow = ''
                }, closeTime)
            })
        }

        popupCloseElement.addEventListener('click', event => {
            event.preventDefault()
            popup.classList.remove('active')
            document.querySelector('.background-blur').classList.remove('active')
            document.body.style.overflow = ''
        })
    })

}

function closePopupOnClickBlur() {
    if (!document.querySelector('.background-blur')) return
    document.querySelector('.background-blur').addEventListener('click', () => {
        document.querySelector('.popup.active').classList.remove('active')
        document.querySelector('.background-blur').classList.remove('active')
        document.body.style.overflow = ''
    })
}
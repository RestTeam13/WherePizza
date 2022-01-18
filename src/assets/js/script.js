document.addEventListener('DOMContentLoaded', function () {
    select()
    handlerSwitch()
    mobileMenuHandler()
    resetBtnHandler()
    startSlider()
    addTabsHandler()
    openText()
    summary()
    openOrderHistory()
    promoCodeHandler()

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
        navMenu = headerTopRow.nextElementSibling.querySelector('.menu__nav')

    if (document.querySelector('.standalone-menu')) {
        const standaloneMenu = document.querySelector('.standalone-menu'),
            logo = header.querySelector('.logo')

        window.addEventListener('scroll', () => {
            if (standaloneMenu.getBoundingClientRect().bottom < 0) {
                header.classList.add('fixed')
                headerTopRow.classList.add('hidden')
                navMenu.classList.add('active')
                logo.querySelector('.logo__main').style.display = 'none'
                logo.querySelector('.logo__mobile').style.display = 'unset'
            } else {
                header.classList.remove('fixed')
                headerTopRow.classList.remove('hidden')
                navMenu.classList.remove('active')
                logo.querySelector('.logo__main').style.display = ''
                logo.querySelector('.logo__mobile').style.display = 'none'
            }
        })
    } else {
        navMenu.classList.add('active')
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

function mobileMenuHandler() {
    if (!document.querySelector(".menu__burger")) return

    document.querySelector(".menu__burger").addEventListener("click", evt => {
        document.querySelector(".menu__burger").classList.toggle("active")
        document.querySelector(".mobile-menu").classList.toggle("active")
        document.querySelector(".header__menu").classList.add("active")
        document.body.style.overflow = 'hidden'
        if (!document.querySelector(".menu__burger.active")) {
            setTimeout(function () {
                document.querySelector(".header__menu").classList.remove("active")
                document.body.style.overflow = ''
            }, 300)
        }
    })

    document.querySelectorAll('[data-close-mobMenu]').forEach(closeMenuBtn => {
        closeMenuBtn.addEventListener('click', () => {
            document.querySelector(".header__menu").classList.remove("active")
            document.querySelector(".menu__burger").classList.remove("active")
            document.querySelector(".mobile-menu").classList.remove("active")
            document.body.style.overflow = ''
        })
    })

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

function openOrderHistory() {
    if (!document.querySelectorAll(".order-list__item")) return
    if (window.matchMedia('(max-width: 767px)').matches) {
        const allOrderBlocks = document.querySelectorAll('.wrapper .order-list__item')

        allOrderBlocks.forEach(orderBlock => {
            orderBlock.setAttribute('href', 'order-details.html')
            orderBlock.addEventListener('click', () => {
                document.location.href = orderBlock.getAttribute('href')
            })
        })
    }
}

function changeAccountForm() {
    if (!document.querySelector(".personal-data__btn-change")) return

    const changingBlocks = document.querySelectorAll(".account-data__list.account-data__list_data")
    changingBlocks.forEach(currentBlock => {
        const changeBtn = currentBlock.querySelector(".personal-data__btn-change"),
            saveBtn = currentBlock.querySelector(".account-data__list-btn")

        changeBtn.addEventListener("click", () => {
            currentBlock.classList.add('active')
            currentBlock.querySelectorAll(".input-text")
                .forEach(currentInput => currentInput.removeAttribute("disabled"))
        })

        saveBtn.addEventListener("click", () => {
            currentBlock.classList.remove('active')
            currentBlock.querySelectorAll(".input-text")
                .forEach(currentInput => currentInput.getAttribute("disabled"))
        })
    })

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

function promoCodeHandler() {
    if (!document.querySelector('.payment__promo-btn')) return
    const promoBtn = document.querySelector('.payment__promo-btn'),
        promoInput = document.querySelector('.payment__promo-wrapper > input'),
        priceBlock = document.querySelector('.payment__promo-cost')

    promoBtn.addEventListener('click', () => {
        if (promoInput.value === '301202012') {
            priceBlock.innerHTML = `Итого: 2 199₽ <span class="payment__promo-cost-new">${priceBlock.textContent}</span>`
        }
    })

}


//popups

function popupsHandler() {
    if (!document.querySelector('[data-popup-name]')) return

    const openPopupElements = document.querySelectorAll('[data-popup-name]'),
        blur = document.querySelector('.background-blur')

    openPopupElements.forEach(currentOpenPopupElement => {
        let popup = getPopup(currentOpenPopupElement)
        handlerClosePopupElements(popup)

        addClickListenerToOpenPopupElement(currentOpenPopupElement, popup, blur)
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

function addClickListenerToOpenPopupElement(openPopupElement, popup, blur) {
    let openPopupEvent = new Event('openPopup')

    openPopupElement.addEventListener('click', event => {
        event.preventDefault()
        popup.classList.add('active')
        popup.dispatchEvent(openPopupEvent)
        if (!openPopupElement.hasAttribute('data-scroll')) {
            document.body.style.overflow = 'hidden'
        }
        openPopupElement.hasAttribute('data-open-blur') ? blur.classList.add('active') : null
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
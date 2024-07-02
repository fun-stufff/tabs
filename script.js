const tabs = document.querySelectorAll("[data-tab-target]")
const tabContents = document.querySelectorAll("[data-tab-content]")

tabs.forEach(tab => {
    tab.addEventListener("click", ()=> {
        // Remove current active tab
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active")
        })

        // To access data-* attribute use camelCase name/key
        // console.log(document.querySelector(tab.dataset["tabTarget"]))
        // console.log(document.querySelector(tab.dataset.tabTarget))
        const target = document.querySelector(tab.dataset["tabTarget"])
        tab.classList.add("active")
        target.classList.add("active")
    })
})

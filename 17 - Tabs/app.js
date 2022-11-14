const tabs = document.querySelector('.tabs')
const tabBtn = tabs.querySelectorAll('[role="tab"]')
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');


function handleTabClick(e) {
    tabPanels.forEach(panel => {
        panel.hidden = true
    })

    tabBtn.forEach(tab => {
        tab.setAttribute('arai-selected', false)
    })

    e.currentTarget.setAttribute('aria-selected', true)

    const { id } = e.currentTarget
    const tabPanel = tabs.querySelector(`[aria-labelledby = "${id}"`)
    tabPanel.hidden = false

    tabPanels.find()
}



tabBtn.forEach(btn => btn.addEventListener('click', handleTabClick))

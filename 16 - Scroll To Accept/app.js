const terms = document.querySelector('.terms-and-conditions')
const btn = document.querySelector('.accept')

function scrollToAccept(payload){
    if(payload[0].intersectionRatio === 1){
        btn.disabled = false;
        ob.unobserve(terms.lastElementChild)
    }  
}

const ob =  new IntersectionObserver(scrollToAccept, {
    root: terms,
    threshold: 1,
})

ob.observe(terms.lastElementChild)


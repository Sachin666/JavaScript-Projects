const cardBtn = document.querySelectorAll('.card button')
const modalInner = document.querySelector('.modal-inner')
const modalOuter = document.querySelector('.modal-outer')


function handleCardBtn(e){
    const button = e.currentTarget
    const card = button.closest('.card')
    const imgSrc = card.querySelector('img').src
    const desc = card.dataset.description
    const name = card.querySelector('h2').textContent
    modalInner.innerHTML = `
                        <img src="${imgSrc.replace('200', 600)}" 
                        alt=${name}>
                        <p>${desc}</p>
                        `
    modalOuter.classList.add('open')
}

cardBtn.forEach(button => 
    button.addEventListener('click', handleCardBtn)
) 

function closeModal(){
    modalOuter.classList.remove('open')
}

modalOuter.addEventListener('click', function(e){
    const isOutside = !e.target.closest('.modal-inner')
    if(isOutside){
        closeModal()
    }
})

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        closeModal()
    }
})
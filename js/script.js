const listInfo = document.querySelector('.list-info')
const nextBtn = document.querySelector('.next-button')
const prevBtn = document.querySelector('.prev-button')
const listItem = document.querySelector('.list-img')
const bgs = document.querySelectorAll('.bg')

let index = 0

nextBtn.addEventListener('click', () => {
    
    index = (index < 3) ? index + 1 : 3

    listInfo.style.transform = `translateY(${index *  - 25}%)`
    listItem.style.transform = `translateY(${index *  - 100}%)`

    bgs[index].classList.add('active')
})

prevBtn.addEventListener('click', () => {
    
    indexPrev = (index > 0) ? index : 0
    index = (index > 0) ? index - 1 : 0

    listInfo.style.transform = `translateY(${index *  - 25}%)`
    listItem.style.transform = `translateY(${index *  - 100}%)`

    bgs[indexPrev].classList.remove('active')
})


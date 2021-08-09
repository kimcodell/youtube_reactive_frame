const moreBtn = document.querySelector('body > div > section.info > div.metadata > div > button');
const title = document.querySelector("body > div > section.info > div.metadata > div > span");

moreBtn.addEventListener('click', () => {
    console.log('클릭 됨')
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

// document.querySelector("body > div > section.info > div.metadata > div > button")
// document.querySelector("body > div > section.info > div.metadata > div > span")
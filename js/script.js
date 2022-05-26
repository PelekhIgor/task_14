const tabItem = document.querySelectorAll('.tab_item')
const tabContent = document.querySelectorAll('.tab_content')


tabItem.forEach(function (e,i){
    e.addEventListener('click', getClick)

function getClick(){
    tabContent.forEach(function (content){
        content.classList.remove('active')
    })
    tabItem.forEach(function(tab) {
        tab.classList.remove('active')
    })
    tabContent[i].classList.add('active')
    tabItem[i].classList.add('active')
}
})



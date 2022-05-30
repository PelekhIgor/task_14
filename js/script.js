
class Tab{
    tabs = []
    texts = []
    constructor(element) {
        this.init(element)
    }

    init(element){
        this.tabs = [...element.children[0].children]
        this.texts = [...element.children[1].children]
        element.children[0].addEventListener('click', this.onClick )
    }

    onClick = (el) => {
        this.el = this.tabs.indexOf(el.target)
        this.activateEl(this.tabs, 'active')
        this.activateEl(this.texts, 'active')
    }

    activateEl(elements,showClass) {
        elements.forEach((e,i) =>{
            if(i === this.el){
                e.classList.add(showClass)
            }else {
                e.classList.remove(showClass)
            }
        })
    }

}

const tabsE = new Tab(document.querySelector('.tabs'))
console.log(tabsE)












// const tabItem = document.querySelectorAll('.tab_item')
// const tabContent = document.querySelectorAll('.tab_content')
//
//
// tabItem.forEach(function (e,i){
//     e.addEventListener('click', getClick)
//
// function getClick(){
//     tabContent.forEach(function (content){
//         content.classList.remove('active')
//     })
//     tabItem.forEach(function(tab) {
//         tab.classList.remove('active')
//     })
//     tabContent[i].classList.add('active')
//     tabItem[i].classList.add('active')
// }
// })



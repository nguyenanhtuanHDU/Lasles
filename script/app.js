const peopleList = document.querySelector('.people_list');
const dotNext = document.querySelector('.dot__next')
const dotPrev = document.querySelector('.dot__prev')
const dotItem = document.querySelectorAll('.dot_item')

const templatePeople1 = 
`      
<div class="people_item">
    <div class="people_head">
    <div class="people_info">
        <img src="./image/Ellipse 175.png" alt="">
        <div class="people_text">
        <h5 class="people_name">Yessica Christy</h4>
            <p class="people_city">Shanxi, China</p>
        </div>
    </div>
    <div class="people_star">
        <span>4.5</span>
        <i class="fa-solid fa-star"></i>
    </div>
    </div>
    <div class="people_body">
    <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there
        have been no problems. LaslesVPN always the best”.</p>
    </div>
</div>`

const templatePeople2 = `      
<div class="people_item">
    <div class="people_head">
    <div class="people_info">
        <img src="./image/Ellipse 175 (1).png" alt="">
        <div class="people_text">
        <h5 class="people_name">Yessica Christy</h5>
        <p class="people_city">Shanxi, China</p>
        </div>
    </div>
    <div class="people_star">
        <span>4.5</span>
        <i class="fa-solid fa-star"></i>
    </div>
    </div>
    <div class="people_body">
    <p>“I like it because I like to travel far and still can connect with high speed.”.</p>
    </div>
</div>`

const templatePeople3 = `      
<div class="people_item">
    <div class="people_head">
    <div class="people_info">
        <img src="./image/Ellipse 175 (2).png" alt="">
        <div class="people_text">
        <h5 class="people_name">Kim Young Jou</h4>
            <p class="people_city">Seoul, South Korea</p>
        </div>
    </div>
    <div class="people_star">
        <span>4.5</span>
        <i class="fa-solid fa-star"></i>
    </div>
    </div>
    <div class="people_body">
    <p>“This is very unusual for my business that currently requires a virtual private network that has high
        security.”.</p>
    </div>
</div>`
const templateArr = [
    templatePeople1,
    templatePeople2,
    templatePeople3,
]
peopleList.insertAdjacentHTML('afterbegin', templatePeople3)
peopleList.insertAdjacentHTML('afterbegin', templatePeople2)
peopleList.insertAdjacentHTML('afterbegin', templatePeople1)
peopleList.insertAdjacentHTML('afterbegin', templatePeople3)
peopleList.insertAdjacentHTML('afterbegin', templatePeople2)
peopleList.insertAdjacentHTML('afterbegin', templatePeople1)
const peopleItem = peopleList.querySelectorAll('.people_item');

const widthItem = peopleItem[0].offsetWidth + 50
let valueWidth = -1;
let templateIndex = -1;
let dotIndex = 0;
let peopleItemActive = 0;
peopleItem[0].classList.add('active')
dotNext.addEventListener('click', function(){

    valueWidth += widthItem;
    // dot add active
    dotIndex += 1
    dotItem.forEach(item => {
        item.classList.remove('active')
    });
    if(dotIndex === dotItem.length){
        dotIndex = 0
    }
    dotItem[dotIndex].classList.add('active')
    
    // add Item last
    templateIndex += 1;
    if(templateIndex === templateArr.length){
        templateIndex = 0;
    }
    peopleList.scroll(valueWidth, 0);
    peopleList.insertAdjacentHTML('beforeend', templateArr[templateIndex]);

    let peopleItemLate = peopleList.querySelectorAll('.people_item')
    peopleItemActive += 1;
    peopleItemLate.forEach(item => item.classList.remove('active'))
    peopleItemLate[peopleItemActive].classList.add('active')
})

dotPrev.addEventListener('click', function(){
    valueWidth -= widthItem
    if(valueWidth < 0){
        valueWidth = 0
        dotIndex = 1
    }
    peopleList.scroll(valueWidth, 0)

    dotIndex -= 1
    dotItem.forEach(item => {
        item.classList.remove('active')
    });
    if(dotIndex === -1){
        dotIndex = dotItem.length - 1
    }
    dotItem[dotIndex].classList.add('active')

    let peopleItemLate = peopleList.querySelectorAll('.people_item')
    peopleItemActive -= 1;
    if(peopleItemActive < 0){
        peopleItemActive = 0
    }
    peopleItemLate.forEach(item => item.classList.remove('active'))
    peopleItemLate[peopleItemActive].classList.add('active')
})





//глобальные переменные для всего
let ourServices,
    workBlockButton,
    uploadingPictures,
    workBlockItems,
    allImg,
    dataSetNumberCurrent =0,
    countNumberWork =0,
    containerLoad,
    selectPhoto,
    descriptionPerson,
    namePerson,
    specialtyPerson,
    slider,
    shiftToLeft,
    shiftToRight,
    galleryBlockButton,
    imagGallery,
    partImg=17,
    countNumberGallery=0,
    $dataItem,
    $dataInformation,
    srcBreakNews,
    containerCardsBreakingNews;

//массив объектов для service block
const ourServicesItemsInformation = [
        {
            img:"img/web_design/web-design%20(1).jpg",
            text:"ITEM NUMBER1 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img:"img/web_design/web-design%20(2).jpg",
            text:"ITEM NUMBER2 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img:"img/web_design/web-design%20(3).jpg",
            text:"ITEM NUMBER3 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img:"img/web_design/web-design%20(4).jpg",
            text:"ITEM NUMBER4 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img:"img/web_design/web-design%20(5).jpg",
            text:"ITEM NUMBER5 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img:"img/web_design/web-design%20(6).jpg",
            text:"ITEM NUMBE6 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ],
    informationAboutPeople=[/*0-specialtyPerson,1-namePerson,3-descriptionPerson,4-src*/
        [
            'UX Designer',
            'Hasan Ali',
            'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
            "img/what_people_say_about/person%20(1).jpg"
        ],[
            'Frond End',
            "Jon Fob",
            "In software engineering, the terms front end and back end refer to the separation of concerns between the presentation layer, and the data access layer of a piece of software, or the physical infrastructure or hardware.",
            "img/what_people_say_about/person%20(2).jpg"
        ],[
            'Bob Marty',
            'Full Stack',
            'In computing, a solution stack or software stack is a set of software subsystems or components needed to create a complete platform such that no additional software is needed to support applications. Applications are said to "run on" or "run on top of" the resulting platform.',
            "img/what_people_say_about/person%20(3).jpg"
        ],[
            'Bob Bobovich',
            'Back End',
            'The front-end is also referred to as the client-side and is sometimes considered "web design". The back-end of the web industry is often called the server-side. Often when someone says they\'re a "web developer" they\'re saying they work on the back-end of sites.',
            "img/what_people_say_about/person%20(4).jpg"
        ],[
            'Justin Buber',
            "Java developer",
            "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
            "img/what_people_say_about/person%20(5).jpg"
        ],[
            'Fog Noc',
            "Python developer",
            'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace',
            "img/what_people_say_about/person%20(6).jpg"
        ],[
            'Noc Gogo',
            "MySQL",
            'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
            "img/what_people_say_about/person%20(7).jpg"
        ],[
            'Bad Boy',
            'Client',
            'A client is a piece of computer hardware or software that accesses a service made available by a server. The server is often on another computer system, in which case the client accesses the service by way of a network.',
            "img/what_people_say_about/person%20(8).jpg"
        ],[
            'Nic Bro',
            'C# developer',
            'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
            "img/what_people_say_about/person%20(9).jpg"
        ],[
            'Good Job',
            'C++',
            "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or \"C with Classes\".Bjarne Stroustrup as an extension of the C programming language, or \"C with Classes\"",
            "img/what_people_say_about/person%20(10).jpg"
        ]
    ];
//функция создана на две похожые кнопки
function eventButtonGeneralLoad(containerLoadAccount,countPutButton,button, callBackFunction){
    button.style.display = "none";
    containerLoad[containerLoadAccount].style.display ='block';
    setTimeout(function () {
        containerLoad[containerLoadAccount].style.display ='none';
        callBackFunction();
        if(countPutButton===0) {
            button.style.display = "flex";
        }
        else {
            countPutButton=0;
        }
    },3500);
}
//генерация путей к картинкам
//%20 исправлю как только найду прогу для удобного переименовния, пока что использовал стандартный windowса
function getSrcImgInFolder(folder,nameImg,amountImg,format){
    let array = [];
    for(let i =0;i<amountImg;i++){
        array[i]=`img/${folder}/${nameImg}%20(${i+1}).${format}`;
    }
    return array;
}
//инициализация всех переменных и событий произойдет после полной загрузки
window.onload = function () {
    //запуск параллакса который подключен плагином в тз не указываеться по личной инициативе
    $("[data-paroller-factor]").paroller();
    //region service block
    ourServices = document.getElementById('ourServices');
    //событие на выбор табки
    function selectTabs(targetElement,activeClass){
        let lastActiveElement = document.querySelector(`.${activeClass}`);
        if(lastActiveElement){
            lastActiveElement.classList.remove(activeClass);
            targetElement.classList.add(activeClass);
        }
    }
    ourServices.addEventListener('click', function (event) {
        let target =event.target;
        selectTabs(target,'service-items-link-check');
        document.getElementById('service-information-img').src = ourServicesItemsInformation[+target.dataset.number].img;
        document.getElementById('service-information-text').innerHTML =ourServicesItemsInformation[+target.dataset.number].text;
        event.preventDefault();
    });
    //end region service block

    //region work bock
    workBlockButton = document.getElementById('work-block-button');
    uploadingPictures = document.getElementById('uploading-pictures');
    workBlockItems = document.getElementById('work-block-items');
    containerLoad = document.querySelectorAll('.container-load');
    //массив массивов всех путей к картинкам
    allImg = [
        getSrcImgInFolder('graphic_design','graphic-design',36,'jpg'),
        getSrcImgInFolder('landing_page','landing-page',36,'jpg'),
        getSrcImgInFolder('web_design','web-design',36,'jpg'),
        getSrcImgInFolder('wordpress','wordpress',36,'jpg')
    ];
    //region work block
    //событие на выбор категории
    workBlockItems.addEventListener('click',function (event) {
        let target = event.target;
        selectTabs(target,'work-block-link-check');
        dataSetNumberCurrent = +target.dataset.number;
        workBlockButton.style.display = "flex";
        if(dataSetNumberCurrent===0){
            removeChild(uploadingPictures);
        }
        addImages();
        event.preventDefault();

    });
    //событие на клик кнопки подгрузки фото
    workBlockButton.addEventListener('click', function () {
        eventButtonGeneralLoad(0,countNumberWork,workBlockButton,function(){
            countNumberWork++;
            addImages();
        });
    });
    //загрузка фото при первой загрузке фото
    generationAllCategoryImg();
    //end region work block

    /*region what-people-say*/
    selectPhoto=document.getElementById('select-photo');
    descriptionPerson=document.getElementById('descriptionPerson');
    namePerson=document.getElementById('namePerson');
    specialtyPerson=document.getElementById('specialtyPerson');
    shiftToRight = document.getElementById('shiftToRight');
    shiftToLeft =document.getElementById('shiftToLeft');
    slider = document.getElementById('slider');
    slider.addEventListener('click',function (event) {
        let target = event.target;
        if(target.classList.contains('slider-item')) {
            removeSelectClasses('slider-item', 'slider-item-select');
            target.classList.add('slider-item-select');
            updateInformationAboutPerson(+target.dataset.numberPerson)
        }
    });
    shiftToLeft.addEventListener('click',function (event) {
        let target = event.target;
        if(shiftToRight.classList.contains('finish-direction')){
            shiftToRight.classList.remove('finish-direction')
        }
        let activeElement = document.querySelector('.slider-item-select');
        if(activeElement.previousElementSibling){
            target.classList.remove('finish-direction');
            removeSelectClasses('slider-item', 'slider-item-select');
            activeElement.previousElementSibling.classList.add('slider-item-select');
            updateInformationAboutPerson(+activeElement.previousElementSibling.dataset.numberPerson)
        }
        else {
            target.classList.add('finish-direction');
        }
        shiftDirection(false);
    });
    shiftToRight.addEventListener('click',function (event) {
        let target = event.target;
        if(shiftToLeft.classList.contains('finish-direction')){
            shiftToLeft.classList.remove('finish-direction')
        }
        let activeElement = document.querySelector('.slider-item-select');
        if(activeElement.nextElementSibling){
            target.classList.remove('finish-direction');
            removeSelectClasses('slider-item', 'slider-item-select');
            activeElement.nextElementSibling.classList.add('slider-item-select');
            updateInformationAboutPerson(+activeElement.nextElementSibling.dataset.numberPerson)
        }
        else {
            target.classList.add('finish-direction');
        }

        shiftDirection(true);
    });
    /*end region what-people-say*/

    /*region gallery*/
    $('.container-plugin-div-on-three').masonry({
        itemSelector: '.plugin-item-div-on-tree',
        columnWidth: '.plugin-item-div-on-tree',
        fitWidth: true

    });
    $('.container-plugin-div-on-two').masonry({
        itemSelector: '.plugin-item-div-on-two',
        columnWidth: '.plugin-item-div-on-two',
        fitWidth: true
    });
    imagGallery = getSrcImgInFolder('gallery','gallery',36,'png');
    let $container = $('.container-plugins').masonry({
        columnWidth: '.plugin-item',
        itemSelector: '.plugin-item'
    });
    galleryBlockButton= document.querySelector('#gallery-block-button');
    galleryBlockButton.addEventListener( 'click', function() {
        eventButtonGeneralLoad(1,countNumberGallery,galleryBlockButton,function(){
            countNumberGallery++;
            $container.masonryImagesReveal(getItems());
        });
    });
    /*end region gallery*/

    /*region scroll */
    $dataItem = $('[data-item]');
    $dataInformation = $('[data-item-information]');
    $dataItem.on('click',function (event) {
        let heightScroll = $dataInformation.eq(($(event.target).data('item')).toString()).offset().top;
        if(heightScroll)
            $('html, body').animate({scrollTop: heightScroll},1200)
    });
    /*end region scroll */

    /*region breaking news*/
    srcBreakNews= getSrcImgInFolder('brealing_news','news',8,'png');
    containerCardsBreakingNews = document.getElementById('containerCardsBreakingNews');
    generationNewsCards(containerCardsBreakingNews,srcBreakNews);
    /*end region breaking news*/
};
//region work block
//зачищает блок
function removeChild(element) {
    for(let i =0; i<element.childElementCount;){
        element.children[i].remove();
    }
}
//фунция подгрузки картинок
function addImages() {
    //оставить только 1 категорию стальные удалить
    if (dataSetNumberCurrent===0){
        generationAllCategoryImg();
    }
    else {
        let remove = filter();
        if(remove>12){
            remove = 12 - uploadingPictures.children.length;
        }
        if(remove<=0){
            remove=12;
        }
        for (let i =0;i<remove;i++){
            uploadingPictures.append(addImg());
        }
    }
}
//функция добавденния карнтинки возращает node елемента, вызывает в себе функцию проверки наличия картинки на странице
function addImg() {
    let newSrc = 'none';
    for(let i =0; i<allImg[dataSetNumberCurrent-1].length;i++){
        if(isImgInBlock(allImg[dataSetNumberCurrent-1][i])){
            newSrc = allImg[dataSetNumberCurrent-1][i];
            break;
        }
    }
    return  generationCard(dataSetNumberCurrent,newSrc);
}
//проверяет  наличие картинки, если такая картинка уже есть то возращает false
function isImgInBlock(src) {
    let trigger = true;
    let children = uploadingPictures.children;

    for(let i =0;i<children.length;i++){
        if(children[i].firstElementChild.src.includes(src)){
            trigger=false;
            break;
        }
    }
    return trigger;
}
//фильтрует картинки по категориям, картинка которая не соответствовует категории будет удалена и возращает количество удаленных картинок
function filter() {
    let countRemoveElement =0;
    if(dataSetNumberCurrent===0){
        return;
    }
    else{
        let children = uploadingPictures.children;
        //с конца потому что елементы удаляються и размер коллекции уменьшиваеться
        for(let i = children.length-1;i>=0;i--){
            if(+children[i].firstElementChild.dataset.number!==dataSetNumberCurrent){
                children[i].remove();
                countRemoveElement++;
            }
        }
    }
    return countRemoveElement;
}
//дает рандомный индекс для фото
function randomNumber(max) {
    return Number.parseInt(Math.floor(Math.random() * (max)));
}
//загрузка рандомных картинок
function generationAllCategoryImg() {
    for(let i =0;i<4;i++){
        for(let j=0;j<3;){
            let randomIndexCategory = randomNumber(4);
            let randomIndexURL = randomNumber(35);
            if(isImgInBlock(allImg[randomIndexCategory][randomIndexURL])){
                uploadingPictures.append(generationCard(randomIndexCategory + 1,allImg[randomIndexCategory][randomIndexURL]));
                j++;
            }

        }
    }
}
//создание dom елемента (тег, массив классов, массив имен dataset атрибутов, массив значений dataset атрибутов)
function createElement(tag,classesToCss,datasetName, dataset) {
    let element = document.createElement(tag);
    if(classesToCss) {
        classesToCss.forEach((cls)=>{
            element.classList.add(cls);
        });
    }
    if(dataset) {
        for (let i = 0; i < datasetName.length; i++) {
            element.dataset[datasetName[i]] = dataset[i];
        }
    }
    return element;
}
//генерация каждой карточки которая может вращаться
function generationCard(category,src) {
    let card = createElement('div',['card']);

    let frontImg = createElement('img',['front'],['number'],[category]);
    frontImg.src = src;
    frontImg.alt='not found';
    card.append(frontImg);

    let backImg = createElement('div',['back']);

    let faLink = createElement('a',['fa','fa-link']);
    faLink.setAttribute('aria-hidden',true);
    backImg.append(faLink);

    let faSearch = createElement('a',['fas','fa-search']);
    backImg.append(faSearch);

    let cardBackTitle = createElement('p',['card-back-title']);
    cardBackTitle.innerHTML = 'create design';
    backImg.append(cardBackTitle);

    let cardBackText = createElement('p',['card-back-text']);
    cardBackText.innerHTML = 'Web Design';
    backImg.append(cardBackText);

    card.append(backImg);
    return card;
}
//end region work block

/*region breaking news*/
function createElementBreakingNews(src) {
    let card = createElement('a',['card-breaking-news']);
    let firstDiv = createElement('div',["card-tools"]);
    let imgInFirstDiv = createElement('img');
    imgInFirstDiv.alt='not found';
    imgInFirstDiv.src=src;
    let divInFirstDiv = createElement('div',['top-block-date']);
    let firstpInDivInFirstDiv = createElement('p',['date-day']);
    firstpInDivInFirstDiv.innerHTML = '12';
    let secondPInDivInFirstDiv = createElement('p',['date-month']);
    secondPInDivInFirstDiv.innerHTML='Feb';
    divInFirstDiv.append(firstpInDivInFirstDiv);
    divInFirstDiv.append(secondPInDivInFirstDiv);
    firstDiv.append(imgInFirstDiv);
    firstDiv.append(divInFirstDiv);

    let secondDiv = createElement('div',['card-bottom']);
    let pFirstInsecondDiv = createElement('p',['bottom-title']);
    pFirstInsecondDiv.innerHTML = 'Amazing Image Post';
    let pSecondInsecondDiv = createElement('p',['bottom-owner']);
    pSecondInsecondDiv.innerHTML='By admin';
    let pThirdInsecondDiv = createElement('p',['bottom-amount-comment']);
    pThirdInsecondDiv.innerHTML='2 comment';
    secondDiv.append(pFirstInsecondDiv);
    secondDiv.append(pSecondInsecondDiv);
    secondDiv.append(pThirdInsecondDiv);

    card.append(firstDiv);
    card.append(secondDiv);

    return card;
}
function generationNewsCards(elementWhereToInsert,arraySrc) {
    arraySrc.forEach((element)=>{
        elementWhereToInsert.append(createElementBreakingNews(element));
    })
}
/*end region breaking news*/

/*region what-people-say*/
//двигает
function shiftDirection(direction){
    /*direction: false-left, true-right*/
    let shift = 0;
    let timerLeft = setInterval(function () {
        if(shift>(slider.firstElementChild.offsetWidth/slider.firstElementChild.childElementCount)-2){
            clearInterval(timerLeft);
            return false;
        }
        else {
            direction?slider.scrollLeft+=5:slider.scrollLeft-=5;
            shift+=5;
        }
    },20);

}
/*меняет текст в элементе*/
function updateHTMLTEXT(element,index,number) {
    element.innerHTML = informationAboutPeople[index][number];
}
/*обновление информации о персоне*/
function updateInformationAboutPerson(index) {
    selectPhoto.src=informationAboutPeople[index][3];
    updateHTMLTEXT(specialtyPerson,index,1);
    updateHTMLTEXT(namePerson,index,0);
    updateHTMLTEXT(descriptionPerson,index,2);
}
/*удаляет ранее выбраного человека*/
function removeSelectClasses(whereFind, classToRemove) {
    let temp = document.querySelectorAll(`.${whereFind}`);
    temp.forEach((element)=>{
        if(element.classList.contains(classToRemove)){
            element.classList.remove(classToRemove);
            return element;
        }
    })
}
/*end region what-people-say*/

/*region gallery*/
$.fn.masonryImagesReveal = function( $items ) {
    let msnry = this.data('masonry');
    let itemSelector = msnry.options.itemSelector;
    $items.hide();
    this.append( $items );
    $items.imagesLoaded().progress( function( imgLoad, image ) {
        let $item = $( image.img ).parents( itemSelector );
        $item.show();
        msnry.appended( $item );
    });

    return this;
};
function createGalleryIMG() {
    let item = `<div class="plugin-item"><img src="img/gallery/gallery%20(${partImg}).png" alt="img not found"/></div>`;
    partImg++;
    return item;
}
function getItems() {
    let items = '';
    for ( var i=0; i < 10&&partImg<36; i++ ) {
        items += createGalleryIMG();
    }
    return $( items );
}
/*end region gallery*/











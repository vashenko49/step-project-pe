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
    partImg=19,
    countNumberGallery=0;

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

//генерация путей к картинкам для work-block
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
    ourServices.addEventListener('click', function (event) {
        let target =event.target;
        let children = ourServices.children;
        for(let i =0;i<ourServices.childElementCount;i++){
            children[i].classList.forEach((elem)=>{
                if(elem==='service-items-link-check'){
                    children[i].classList.remove('service-items-link-check');
                }
            })
        }
        target.classList.add('service-items-link-check');
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
        let children = workBlockItems.children;
        for(let i =0;i<workBlockItems.childElementCount;i++){
            children[i].classList.forEach((elem)=>{
                if(elem==='work-block-link-check'){
                    children[i].classList.remove('work-block-link-check');
                }
            })
        }
        target.classList.add('work-block-link-check');
        dataSetNumberCurrent = +target.dataset.number;
        workBlockButton.style.display = "flex";
        if(dataSetNumberCurrent===0){
            removeChild(uploadingPictures);
        }
        addImages(dataSetNumberCurrent);
        event.preventDefault();

    });
    //событие на клик кнопки подгрузки фото
    workBlockButton.addEventListener('click', function () {
        workBlockButton.style.display = "none";
        containerLoad[0].style.display ='block';
        let timer = setTimeout(function () {
            containerLoad[0].style.display ='none';
            addImages(dataSetNumberCurrent);
            if(countNumberWork===0) {
                workBlockButton.style.display = "flex";
                countNumberWork++;
            }
            else {
                countNumberWork=0;
            }
        },3500);
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
    shiftToLeft.addEventListener('click',function () {
        let activeElement = document.querySelector('.slider-item-select');
        if(activeElement.previousElementSibling){
            removeSelectClasses('slider-item', 'slider-item-select');
            activeElement.previousElementSibling.classList.add('slider-item-select');
            updateInformationAboutPerson(+activeElement.previousElementSibling.dataset.numberPerson)
        }
        let shift = 0;
        let timerLeft = setInterval(function () {
            if(shift>document.querySelector('.direct').offsetWidth/10-4*4.3){
                clearInterval(timerLeft);
                return false;
            }
            else {
                slider.scrollLeft-=3;
                shift+=3;
            }
        },20);

    });
    shiftToRight.addEventListener('click',function () {
        let activeElement = document.querySelector('.slider-item-select');
        if(activeElement.nextElementSibling){
            removeSelectClasses('slider-item', 'slider-item-select');
            activeElement.nextElementSibling.classList.add('slider-item-select');
            updateInformationAboutPerson(+activeElement.nextElementSibling.dataset.numberPerson)
        }
        let shift = 0;
        let timerLeft = setInterval(function () {
            if(shift>document.querySelector('.direct').offsetWidth/10+4*2){
                clearInterval(timerLeft);
                return false;
            }
            else {
                slider.scrollLeft+=3;
                shift+=3;
            }
        },20);
    });
    /*end region what-people-say*/

    /*region gallery*/
    $('.container-plugin-div-on-three').masonry({
        itemSelector: '.plugin-item-div-on-tree',
        columnWidth: 7,
        fitWidth: true

    });
    $('.container-plugin-div-on-two').masonry({
        itemSelector: '.plugin-item-div-on-two',
        columnWidth: 7,
        fitWidth: true
    });
    imagGallery = getSrcImgInFolder('gallery','gallery',36,'png');
    let grid = document.querySelector('.container-plugins');
    let msnry = new Masonry( grid, {
        columnWidth: 20,
        itemSelector: '.plugin-item',
        fitWidth: true
    });
    galleryBlockButton= document.querySelector('#gallery-block-button');
    galleryBlockButton.addEventListener( 'click', function() {

        galleryBlockButton.style.display = "none";
        containerLoad[1].style.display ='block';
        let timer = setTimeout(function () {
            containerLoad[1].style.display ='none';
            let elements = [];
            let fragment = document.createDocumentFragment();
            for ( let i = 0; i < 10; i++ ) {
                let elem = createImgGallery(partImg+i,'plugin-item');
                grid.appendChild( elem );
                msnry.appended( elem );
            }


            if(countNumberWork===0) {
                galleryBlockButton.style.display = "flex";
                countNumberWork++;
            }
            else {
                countNumberWork=0;
            }
        },3500);




    });
    /*end region gallery*/

};
//region work block
//зачищает блок
function removeChild(element) {
    for(let i =0; i<element.childElementCount;){
        element.children[i].remove();
    }
}
//фунция подгрузки картинок
function addImages(category) {
    //оставить только 1 категорию стальные удалить
    if (category===0){
        generationAllCategoryImg();
    }
    else {
        let remove = filter(category);
        if(remove>12){
            remove = 12 - uploadingPictures.children.length;
            console.log(uploadingPictures.length);
        }
        if(remove<=0){
            remove=12;
        }
        for (let i =0;i<remove;i++){
            uploadingPictures.append(addImg(category));
        }
    }
}
//функция добавденния карнтинки возращает node елемента, вызывает в себе функцию проверки наличия картинки на странице
function addImg(numberCategory) {
    let newSrc = 'none';
    for(let i =0; i<allImg[numberCategory-1].length;i++){
        if(isImgInBlock(allImg[numberCategory-1][i])){
            newSrc = allImg[numberCategory-1][i];
            break;
        }
    }
    return  generationCard(numberCategory,newSrc);
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
function filter(category) {
    let countRemoveElement =0;
    if(category===0){
        return;
    }
    else{
        let children = uploadingPictures.children;
        //с конца потому что елементы удаляються и размер коллекции уменьшиваеться
        for(let i = children.length-1;i>=0;i--){
            if(+children[i].firstElementChild.dataset.number!==category){
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


/*region what-people-say*/
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
function createImgGallery(index,classItems) {
    let htmlImageElement = document.createElement('img');
    htmlImageElement.alt='not found';
    htmlImageElement.src=imagGallery[index];
    htmlImageElement.classList.add(classItems);
    return htmlImageElement;
}
/*end region gallery*/




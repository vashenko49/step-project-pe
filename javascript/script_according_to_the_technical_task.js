//глобальные переменные для всего
let ourServices,
    workBlockButton,
    uploadingPictures,
    workBlockItems,
    allImg,
    dataSetNumberCurrent =0,
    countNumberWork =0;

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
];

//генерация путей к картинкам для work-block
function getSrcImgInFolder(folder,nameImg){
    let array = [];
    for(let i =0;i<36;i++){
        array[i]=`img/${folder}/${nameImg}%20(${i+1}).jpg`;
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
    //массив массивов всех путей к картинкам
    allImg = [
        getSrcImgInFolder('graphic_design','graphic-design'),
        getSrcImgInFolder('landing_page','landing-page'),
        getSrcImgInFolder('web_design','web-design'),
        getSrcImgInFolder('wordpress','wordpress')
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
    workBlockButton.onclick = function () {
        if(countNumberWork===0) {
            countNumberWork++;
        }
        else {
            workBlockButton.style.display = "none";
            countNumberWork=0;
        }
        addImages(dataSetNumberCurrent);
    };
    //загрузка фото при первой загрузке фото
    generationAllCategoryImg();
    //end region work block

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
function generationCard(number,src) {
    let card = createElement('div',['card']);

    let frontImg = createElement('img',['front'],['number'],[number]);
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

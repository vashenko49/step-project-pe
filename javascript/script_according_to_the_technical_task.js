window.onload = function () {
    $("[data-paroller-factor]").paroller();
    addImages(currentCategory);
};

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

let ourServices = document.getElementById('ourServices');

ourServices.onclick = function (event) {
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
};

////////////////////////////////////

function getSrcImgInFolder(folder,nameImg){
    let array = [];
    for(let i =1;i<=36;i++){
        array[i]=`img/${folder}/${nameImg}%20(${i}).jpg`;
    }
    return array;
}

let allImg = {
    "1":graphicDesign = getSrcImgInFolder('graphic_design','graphic-design'),
    '2':landingPage = getSrcImgInFolder('landing_page','landing-page'),
    '3':webDesign = getSrcImgInFolder('web_design','web-design'),
    '4':wordpress = getSrcImgInFolder('wordpress','wordpress')
};

let workBlockButton = document.getElementById('work-block-button');
let uploadingPictures = document.getElementById('uploading-pictures');
let workBlockItems = document.getElementById('work-block-items');

let currentCategory =0;

workBlockItems.onclick = function (event) {
    let target =event.target;
    let children = workBlockItems.children;
    for(let i =0;i<workBlockItems.childElementCount;i++){
        children[i].classList.forEach((elem)=>{
            if(elem==='work-block-link-check'){
                children[i].classList.remove('work-block-link-check');
            }
        })
    }
    target.classList.add('work-block-link-check');
    removeChild(uploadingPictures);
    workBlockButton.style.display = "flex";
    currentCategory = +target.dataset.number;
    addImages(currentCategory);
};
function removeChild(element) {
    for(let i =0; i<element.childElementCount;){
        element.children[i].remove();
    }
}
//фильтрация картинок по категории, прии изм категориии другие будут чиститься
function filter(category) {
    let countRemoveElement =0;
    if(category===0){
        return;
    }
    else{
        let children = uploadingPictures.children;
        //с конца потому что елементы удаляються и размер коллекции уменьшиваеться
        for(let i = children.length-1;i>-1;i--){
            if(+children[i].dataset.number!==category){
                children[i].remove();
                countRemoveElement++;
            }
        }
    }
    return countRemoveElement;
}
//проверь меня каак
//проверяет  наличие картинки
function isImgInBlock(src) {
    let trigger = true;
    let children = uploadingPictures.children;

    for(let i =0;i<children.length;i++){
        if(children[i].src.includes(src)){
            trigger=false;
        }
    }
    return trigger;

}

//создает картинку
function getImg(numberCategory,src) {
    let htmlImageElement = document.createElement('img');
    htmlImageElement.alt = 'not found img';
    htmlImageElement.dataset.number = numberCategory;
    htmlImageElement.src = src;
    return htmlImageElement;
}
//конечная функция добавденния карнтинки возращает node елемента
function addImg(numberCategory) {
    let newSrc = 'none';
    for(let i =1; i<=allImg[numberCategory.toString()].length;i++){
        if(isImgInBlock(allImg[numberCategory.toString()][i])){
            newSrc = allImg[numberCategory.toString()][i];
            break;
        }
    }

    return  getImg(numberCategory,newSrc);
}


function addImages(category) {
    //оставить только 1 категорию стальные удалить
    if (category===0){
        categoryAll();
    }
    else {
        let remove = filter(category);
        for (let i =0;i<12-remove;i++){
            uploadingPictures.append(addImg(category));
        }
    }


}
//отработка кнопки загрузки картинок
let countNumberWork =0;
workBlockButton.onclick = function () {
    if(countNumberWork===0) {
        addImages(currentCategory);
        countNumberWork++;
    }
    else if (countNumberWork===1) {
        addImages(currentCategory);
        workBlockButton.style.display = "none";
        countNumberWork=0;
    }
};

//нужно запилить
//function randomNumber(max) {
//    return Math.floor(Math.random() * (max));
//}

function categoryAll() {
    for(let i =1;i<=3;i++){
        for (let j = 1; j<=4;j++){
            uploadingPictures.append(addImg(i));
        }
    }
}
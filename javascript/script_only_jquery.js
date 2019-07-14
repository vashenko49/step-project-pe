//глобальные переменные для всего
let $workBlockButton,
    $uploadingPictures,
    $workBlockItems,
    $containerLoad,
    allImg,
    dataSetNumberCurrent =0,
    countNumberWork =0,
    $selectPhoto,
    $descriptionPerson,
    $namePerson,
    $specialtyPerson,
    $shiftToRight ,
    $shiftToLeft,
    $slider,
    $galleryBlockButton,
    imagGallery,
    partImg=17,
    countNumberGallery=0,
    srcBreakNews,
    $containerCardsBreakingNews;

//функция создана на две похожые кнопки
function eventButtonGeneralLoad(containerLoadAccount,countPutButton,button, callBackFunction){
    button.css({display:"none"});
    $($containerLoad[containerLoadAccount]).css({display:'block'});
    setTimeout(function () {
        $($containerLoad[containerLoadAccount]).css({display:'none'});
        callBackFunction();
        if(countPutButton===0) {
            button.css({display:"flex"});
        }
        else {
            countPutButton=0;
        }
    },3500);
}

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
//генерация путей к картинкам
function getSrcImgInFolder(folder,nameImg,amountImg,format){
    let array = [];
    for(let i =0;i<amountImg;i++){
        array[i]=`img/${folder}/${nameImg}%20(${i+1}).${format}`;
    }
    return array;
}

$(window).on("load",function () {
    //запуск параллакса который подключен плагином в тз не указываеться по личной инициативе
    $("[data-paroller-factor]").paroller();
    //region service block
    $("#ourServices").on('click',function (event) {
       let $target = $(event.target);
       $('.service-items-link-check').removeClass('service-items-link-check');
       $target.addClass('service-items-link-check');
       $('#service-information-img').attr('src',ourServicesItemsInformation[+$target.data("number")].img);
       $("#service-information-text").html(ourServicesItemsInformation[+$target.data("number")].text);
       event.preventDefault();
    });
    //end region service block
    //region work bock
    $workBlockButton = $('#work-block-button');
    $uploadingPictures = $('#uploading-pictures');
    $workBlockItems = $('#work-block-items');
    $containerLoad = $(".container-load");
    //массив массивов всех путей к картинкам
    allImg = [
        getSrcImgInFolder('graphic_design','graphic-design',36,'jpg'),
        getSrcImgInFolder('landing_page','landing-page',36,'jpg'),
        getSrcImgInFolder('web_design','web-design',36,'jpg'),
        getSrcImgInFolder('wordpress','wordpress',36,'jpg')
    ];
    generationAllCategoryImg();
    $workBlockItems.on('click',function (event) {
        let $target = $(event.target);
        $('.work-block-link-check').removeClass('work-block-link-check');
        $target.addClass('work-block-link-check');
        dataSetNumberCurrent = $target.data('number');
        $workBlockButton.css("display","flex");
        if(dataSetNumberCurrent===0){
            $uploadingPictures.empty();
        }
        addImages();
        event.preventDefault();
    });
    $workBlockButton.on('click',function () {
        eventButtonGeneralLoad(0,countNumberWork,$workBlockButton,function () {
            addImages();
            countNumberWork++;
        });
    });
    //end region work bock

    /*region what-people-say*/
    $selectPhoto=$('#select-photo');
    $descriptionPerson=$('#descriptionPerson');
    $namePerson=$('#namePerson');
    $specialtyPerson=$('#specialtyPerson');
    $shiftToRight = $('#shiftToRight');
    $shiftToLeft =$('#shiftToLeft');
    $slider = $('#slider');

    $slider.on('click',function (event) {
        let $target = $(event.target);
        if($target.hasClass('slider-item')) {
            removeSelectClasses('slider-item-select');
            $target.addClass('slider-item-select');
            updateInformationAboutPerson(+$target.attr('data-number-person'))
        }
    });
    $shiftToLeft.on('click',function () {
        let $activeElement = $('.slider-item-select');
        if($activeElement.prev().length){
            if($shiftToRight.hasClass('finish-direction')){
                $shiftToRight.removeClass('finish-direction')
            }
            removeSelectClasses('slider-item-select');
            $activeElement.prev().addClass('slider-item-select');
            updateInformationAboutPerson(+$activeElement.prev().attr('data-number-person'))
        }
        else {
            $shiftToLeft.addClass('finish-direction');
        }
        shiftDirection(false);

    });
    //функции не создавал бо потом происходят ошибки из за интервала идет налаживание один на одного если быстро или резко листать слайдер
    $shiftToRight.on('click',function () {
        let $activeElement = $('.slider-item-select');
        if($activeElement.next().length){
            if($shiftToLeft.hasClass('finish-direction')){
                $shiftToLeft.removeClass('finish-direction')
            }
            removeSelectClasses('slider-item-select');
            $activeElement.next().addClass('slider-item-select');
            updateInformationAboutPerson(+$activeElement.next().attr('data-number-person'))
        }
        else {
            $shiftToRight.addClass('finish-direction');
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
    $galleryBlockButton= $('#gallery-block-button');

    $galleryBlockButton.on( 'click', function() {
        eventButtonGeneralLoad(1,countNumberGallery,$galleryBlockButton,function () {
            $container.masonryImagesReveal(getItems());
            countNumberGallery++;
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
    $containerCardsBreakingNews = $("#containerCardsBreakingNews");
    generationNewsCards($containerCardsBreakingNews,srcBreakNews);
    /*end region breaking news*/
});

//region work block
//оставить только 1 категорию стальные удалить
function addImages() {
    //оставить только 1 категорию стальные удалить
    if (dataSetNumberCurrent===0){
        generationAllCategoryImg();
    }
    else {
        let remove = filter();
        debugger;
        if(remove>12){
            remove = 12 - $uploadingPictures.children().length;
        }
        if(remove<=0){
            remove=12;
        }
        for (let i =0;i<remove;i++){
            $uploadingPictures.append(addImg(dataSetNumberCurrent));
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
                $uploadingPictures.append(generationCard(randomIndexCategory + 1,allImg[randomIndexCategory][randomIndexURL]));
                j++;
            }

        }
    }
}
//фильтрует картинки по категориям, картинка которая не соответствовует категории будет удалена и возращает количество удаленных картинок
function filter() {
    let countRemoveElement =0;
    if(dataSetNumberCurrent===0){
        return;
    }
    else{

        let children = $uploadingPictures.children();
        //с конца потому что елементы удаляються и размер коллекции уменьшиваеться
        for(let i = children.length-1;i>=0;i--){
            if(+(children[i].firstElementChild.dataset.number)!==dataSetNumberCurrent){
                $(children[i]).remove();
                countRemoveElement++;
            }
        }
    }
    return countRemoveElement;
}
//создание dom елемента (тег, массив классов, массив имен dataset атрибутов, массив значений dataset атрибутов)
function createElement(tag,classesToCss,datasetName, dataset) {
    let $element = $(`<${tag}>`);
    if(classesToCss){
        classesToCss.forEach((cls)=>{
            $element.addClass(cls);
        })
    }
    if(datasetName){
        for(let i =0;i<datasetName.length;i++){
            $element.attr(`data-${datasetName[i]}`, dataset[i].toString());
        }
    }
    return  $element;
}
//генерация каждой карточки которая может вращаться
function generationCard(category,src) {
    let $card = createElement('div',['card']);

    let $frontImg = createElement('img',['front'],['number'],[category]);
    $frontImg.attr('src', src);
    $frontImg.attr('alt','img not found');
    $card.append($frontImg);

    let $backImg = createElement('div',['back']);

    let $faLink = createElement('a',['fa','fa-link']);
    $faLink.attr('aria-hidden','true');
    $backImg.append($faLink);

    let $faSearch = createElement('a',['fas','fa-search']);
    $backImg.append($faSearch);

    let $cardBackTitle = createElement('p',['card-back-title']);
    $cardBackTitle.html('create design');
    $backImg.append($cardBackTitle);

    let $cardBackText = createElement('p',['card-back-text']);
    $cardBackText.html('Web Design');
    $backImg.append($cardBackText);

    $card.append($backImg);
    return $card;
}
//проверяет на дубликат фото
function isImgInBlock(src) {
    let trigger = true;
    let $children = $uploadingPictures.children();
    for(let i=0;i<$children.length;i++){
        if($($children[i]).first().html().includes(src)){
            trigger=false;
            break;
        }
    }
    return trigger;
}
//end region work block


/*region breaking news*/
function generationNewsCards(elementWhereToInsert,arraySrc) {
    arraySrc.forEach((element)=>{
        elementWhereToInsert.append($(`<a class="card-breaking-news"><div class="card-tools"><img src="${element}" alt="not found img"><div class="top-block-date"><p class="date-day">12</p><p class="date-month">Feb</p></div></div><div class="card-bottom"><p class="bottom-title">Amazing Image Post</p><p class="bottom-owner">By admin</p><p class="bottom-amount-comment">2 comment</p></div></a>`));
    })
}
/*end region breaking news*/



/*region what-people-say*/
//двигает
function shiftDirection(direction){
    /*direction: false-left, true-right*/
    let shift = 0;
    let timerLeft = setInterval(function () {
        if(shift>($($slider.children()[0]).width()/$($slider.children()[0]).children().length)-2){
            clearInterval(timerLeft);
            return false;
        }
        else {
            direction?$slider.scrollLeft($slider.scrollLeft() +5):$slider.scrollLeft($slider.scrollLeft() -5);
            shift+=5;
        }
    },20);

}
/*меняет текст в элементе*/
function updateHTMLTEXT(element,index,number) {
    element.html(informationAboutPeople[index][number]);
}
/*обновление информации о персоне*/
function updateInformationAboutPerson(index) {
    $selectPhoto.attr('src',informationAboutPeople[index][3]);
    updateHTMLTEXT($specialtyPerson,index,1);
    updateHTMLTEXT($namePerson,index,0);
    updateHTMLTEXT($descriptionPerson,index,2);
}
/*удаляет ранее выбраного человека*/
function removeSelectClasses(classToRemove) {
    let $temp = $(`.${classToRemove}`);
    $temp.removeClass(classToRemove)
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
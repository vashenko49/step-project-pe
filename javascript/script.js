const ourServicesItemsInformation = [
    {
      img:"img/web_design/web-design1.jpg",
      text:"ITEM NUMBER1 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        img:"img/web_design/web-design2.jpg",
        text:"ITEM NUMBER2 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        img:"img/web_design/web-design3.jpg",
        text:"ITEM NUMBER3 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        img:"img/web_design/web-design4.jpg",
        text:"ITEM NUMBER4 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        img:"img/web_design/web-design5.jpg",
        text:"ITEM NUMBER5 NUMBER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        img:"img/web_design/web-design6.jpg",
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


};


let  graphicDesign=['img/graphic_design/graphic-design1.jpg',
    'img/graphic_design/graphic-design2.jpg',
    'img/graphic_design/graphic-design3.jpg',
    'img/graphic_design/graphic-design4.jpg',
    'img/graphic_design/graphic-design5.jpg',
    'img/graphic_design/graphic-design6.jpg',
    'img/graphic_design/graphic-design7.jpg',
    'img/graphic_design/graphic-design8.jpg',
    'img/graphic_design/graphic-design9.jpg',
    'img/graphic_design/graphic-design10.jpg',
    'img/graphic_design/graphic-design11.jpg',
    'img/graphic_design/graphic-design12.jpg',
    'img/graphic_design/graphic-design1.jpg',
    'img/graphic_design/graphic-design2.jpg',
    'img/graphic_design/graphic-design3.jpg',
    'img/graphic_design/graphic-design4.jpg',
    'img/graphic_design/graphic-design5.jpg',
    'img/graphic_design/graphic-design6.jpg',
    'img/graphic_design/graphic-design7.jpg',
    'img/graphic_design/graphic-design8.jpg',
    'img/graphic_design/graphic-design9.jpg',
    'img/graphic_design/graphic-design10.jpg',
    'img/graphic_design/graphic-design11.jpg',
    'img/graphic_design/graphic-design12.jpg',
    'img/graphic_design/graphic-design1.jpg',
    'img/graphic_design/graphic-design2.jpg',
    'img/graphic_design/graphic-design3.jpg',
    'img/graphic_design/graphic-design4.jpg',
    'img/graphic_design/graphic-design5.jpg',
    'img/graphic_design/graphic-design6.jpg',
    'img/graphic_design/graphic-design7.jpg',
    'img/graphic_design/graphic-design8.jpg',
    'img/graphic_design/graphic-design9.jpg',
    'img/graphic_design/graphic-design10.jpg',
    'img/graphic_design/graphic-design11.jpg',
    'img/graphic_design/graphic-design12.jpg',];
let  webDesign=['img/web_design/web-design1.jpg',
    'img/web_design/web-design2.jpg',
    'img/web_design/web-design3.jpg',
    'img/web_design/web-design4.jpg',
    'img/web_design/web-design5.jpg',
    'img/web_design/web-design6.jpg',
    'img/web_design/web-design7.jpg',
    'img/web_design/web-design1.jpg',
    'img/web_design/web-design2.jpg',
    'img/web_design/web-design3.jpg',
    'img/web_design/web-design4.jpg',
    'img/web_design/web-design5.jpg',
    'img/web_design/web-design6.jpg',
    'img/web_design/web-design7.jpg',
    'img/web_design/web-design1.jpg',
    'img/web_design/web-design2.jpg',
    'img/web_design/web-design3.jpg',
    'img/web_design/web-design4.jpg',
    'img/web_design/web-design5.jpg',
    'img/web_design/web-design6.jpg',
    'img/web_design/web-design7.jpg',
    'img/web_design/web-design1.jpg',
    'img/web_design/web-design2.jpg',
    'img/web_design/web-design3.jpg',
    'img/web_design/web-design4.jpg',
    'img/web_design/web-design5.jpg',
    'img/web_design/web-design6.jpg',
    'img/web_design/web-design7.jpg',
    'img/web_design/web-design1.jpg',
    'img/web_design/web-design2.jpg',
    'img/web_design/web-design3.jpg',
    'img/web_design/web-design4.jpg',
    'img/web_design/web-design5.jpg',
    'img/web_design/web-design6.jpg',
    'img/web_design/web-design7.jpg',
    'img/web_design/web-design1.jpg'];
let  landingPages=['img/landing_page/landing-page1.jpg',
    'img/landing_page/landing-page2.jpg',
    'img/landing_page/landing-page3.jpg',
    'img/landing_page/landing-page4.jpg',
    'img/landing_page/landing-page5.jpg',
    'img/landing_page/landing-page6.jpg',
    'img/landing_page/landing-page7.jpg',
    'img/landing_page/landing-page1.jpg',
    'img/landing_page/landing-page2.jpg',
    'img/landing_page/landing-page3.jpg',
    'img/landing_page/landing-page4.jpg',
    'img/landing_page/landing-page5.jpg',
    'img/landing_page/landing-page6.jpg',
    'img/landing_page/landing-page7.jpg',
    'img/landing_page/landing-page1.jpg',
    'img/landing_page/landing-page2.jpg',
    'img/landing_page/landing-page3.jpg',
    'img/landing_page/landing-page4.jpg',
    'img/landing_page/landing-page5.jpg',
    'img/landing_page/landing-page6.jpg',
    'img/landing_page/landing-page7.jpg',
    'img/landing_page/landing-page1.jpg',
    'img/landing_page/landing-page2.jpg',
    'img/landing_page/landing-page3.jpg',
    'img/landing_page/landing-page4.jpg',
    'img/landing_page/landing-page5.jpg',
    'img/landing_page/landing-page6.jpg',
    'img/landing_page/landing-page7.jpg',
    'img/landing_page/landing-page1.jpg',
    'img/landing_page/landing-page2.jpg',
    'img/landing_page/landing-page3.jpg',
    'img/landing_page/landing-page4.jpg',
    'img/landing_page/landing-page5.jpg',
    'img/landing_page/landing-page6.jpg',
    'img/landing_page/landing-page7.jpg',
    'img/landing_page/landing-page1.jpg'];
let  wordpress=['img/wordpress/wordpress1.jpg',
    'img/wordpress/wordpress2.jpg',
    'img/wordpress/wordpress3.jpg',
    'img/wordpress/wordpress4.jpg',
    'img/wordpress/wordpress5.jpg',
    'img/wordpress/wordpress6.jpg',
    'img/wordpress/wordpress7.jpg',
    'img/wordpress/wordpress8.jpg',
    'img/wordpress/wordpress9.jpg',
    'img/wordpress/wordpress10.jpg',
    'img/wordpress/wordpress1.jpg',
    'img/wordpress/wordpress2.jpg',
    'img/wordpress/wordpress3.jpg',
    'img/wordpress/wordpress4.jpg',
    'img/wordpress/wordpress5.jpg',
    'img/wordpress/wordpress6.jpg',
    'img/wordpress/wordpress7.jpg',
    'img/wordpress/wordpress8.jpg',
    'img/wordpress/wordpress9.jpg',
    'img/wordpress/wordpress10.jpg',
    'img/wordpress/wordpress1.jpg',
    'img/wordpress/wordpress2.jpg',
    'img/wordpress/wordpress3.jpg',
    'img/wordpress/wordpress4.jpg',
    'img/wordpress/wordpress5.jpg',
    'img/wordpress/wordpress6.jpg',
    'img/wordpress/wordpress7.jpg',
    'img/wordpress/wordpress8.jpg',
    'img/wordpress/wordpress9.jpg',
    'img/wordpress/wordpress10.jpg',
    'img/wordpress/wordpress1.jpg',
    'img/wordpress/wordpress2.jpg',
    'img/wordpress/wordpress3.jpg',
    'img/wordpress/wordpress4.jpg',
    'img/wordpress/wordpress5.jpg',
    'img/wordpress/wordpress6.jpg',];

let workBlockButton = document.getElementById('work-block-button');

let uploadingPictures = document.getElementById('uploading-pictures');
let workBlockItems = document.getElementById('work-block-items');

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
};


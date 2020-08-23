document.addEventListener('DOMContentLoaded', () => {
    
    // Паралакс эффект
    const paralax = () => {
        const elem = document.querySelector('.paralax');

        if(window.innerWidth > 1260){
            document.addEventListener('mousemove', (event) => {
                // console.log(event.clientY);
                elem.style.right = `${event.clientX/150}px`;
                elem.style.transform = `translateY(-${event.clientY/100}px)`;
            });
        }
    };
    if(document.querySelector('.paralax')){
        paralax();
    }


    // Перемещаем кнопку слайдера
    const slidBtnRev = () => {
        if(document.querySelectorAll('.main-slider')){
            const btn = document.querySelectorAll('.main-slider .btn');

            btn.forEach( elem => {
                const parent = elem.parentNode.querySelector('.slider_over');
                parent.append(elem);
            });
        }
    };


    // Табы
    const tabs = () => {
        const list = document.querySelector('.tabs_items');
        const btn = document.querySelectorAll('.tab_item');
        const content = document.querySelectorAll('.tab_content');

        const remove = () => {
            content.forEach( (elem) => {
                elem.classList.add('hidden');
            })
            btn.forEach( elem => {
                elem.classList.remove('activ');
            })  
        }
        
        const activBtn = (i = 0) => {
            content[i].classList.remove('hidden');
            btn[i].classList.add('activ')
        }

        remove();
        activBtn(0)



        list.addEventListener('click', (e) => {
            if(e.target.classList.contains('tab_item')){
                btn.forEach( (item, i) => {
                    if(e.target == item){
                        remove();
                        activBtn(i)
                    }
                })
            }
        })

    }
    if(document.querySelector('.tabs_items')){
        tabs();
    }

     // Навешиваем сладйер на табы
     const sliderTabs = () => {
        if(document.querySelector('.section_tabs.fitch .tabs_items')){
            const trac = document.querySelector('.section_tabs .tabs_items');
            trac.classList.add('owl-carousel');
            trac.id = "tabs3";
    
    
            $(document).ready(function(){
                let tabs = $("#tabs3");
                tabs.owlCarousel(
                    {
                        margin:30,
                        items: 2,
                        autoWidth:true,
                        responsive : {
                            // breakpoint from 0 up
                            0 : {
                                margin:10,
                            },
                            480 : {
                                margin:30,
                            }
                        }                   
                    }
                );
            });
        }
    }
    if(window.innerWidth <= 969){
        sliderTabs();
    }


    // Перемещаем элементы в футере
    const footerRev = () => {
        if(document.querySelector('.navigation_elem.text')){
            const copi = document.querySelector('.navigation_elem.text');
            copi.classList.add('container')
            const copiParent = document.querySelector('.nav_block');
            copiParent.append(copi);

            const fotterCont = document.querySelector('footer .cont');
            const contParent = document.querySelector('.navigation .container');
            contParent.append(fotterCont);
        }
    }
    if(window.innerWidth <= 969){
        footerRev();
    }

    // Перемещения в футере
    const footerRes = () => {
        const oneElem = document.querySelector('.one-elem');
        const twoElem = document.querySelector('.two-elem');
        const oneColum = document.querySelector('.one-colum');
        const twoColum = document.querySelector('.two-colum');

        oneColum.append(twoElem);
        twoColum.append(oneElem);


    }
    if(window.innerWidth <= 969 && document.querySelector('.one-elem')){
        footerRes();
    }









    const addArrNav = () => {
        const items = document.querySelectorAll('.nav li');
        
        items.forEach( elem => {
            if(elem.querySelector('ul') != undefined){

                // Добавляли картинку для ховер меню
                // const img = document.createElement('img');
                // img.classList.add('ugl');
                // img.setAttribute('src', 'img/ugl.png');

                const arr = document.createElement('span');
                arr.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6px" height="9px"> <path fill-rule="evenodd"  fill="rgb(249, 198, 155)" d="M1.493,8.999 L6.000,4.500 L1.493,0.000 L0.000,1.470 L3.035,4.500 L0.000,7.530 L1.493,8.999 Z"/> </svg>'
        

                elem.querySelector('a').append(arr);
                elem.classList.add('sub_menu');
                // elem.append(img);
            }
        });
    };
    addArrNav();
    // Отображаем элементы в боковом меню
    const navElems = () => {
        const parent = document.querySelector('.nav nav');
        const soc = document.querySelector('header .social');
        const calc = document.querySelector('header .calc');

        parent.append(soc);
        parent.append(calc);

        console.log('ok')
    };
    if(window.innerWidth <= 969){
        navElems();
    }
    // Удаляем в боковом меню эффект при наведении
    const menuHover = () => {
        const items = document.querySelectorAll('.sub_menu');
        items.forEach( elem => {
            elem.classList.remove('sub_menu');
        })
    };
    if(window.innerWidth <= 969){
        menuHover();
    }
    // Открываем подменю по клику
    const menuItemClick = () => {
        const items = document.querySelectorAll('nav ul li');
        items.forEach( elem => {
            if(elem.querySelector('ul') != undefined){
                elem.addEventListener('click', () => {
                    elem.classList.toggle('open');
                })
                elem.querySelector('a').addEventListener('click', e => {
                    e.preventDefault();
                })
            }
        })
    };
    if(window.innerWidth <= 969){
        menuItemClick();
    }
    // Открываем боковое меню
    const menuClick = () => {
        const btn = document.querySelector('.burder');
        const menu = document.querySelector('header .header_nav')
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
            btn.classList.toggle('fix')
        })
    };
    if(window.innerWidth <= 969){
        menuClick();
    }
    // Перемещаем элемент контактов
    const cont = () => {
        const con = document.querySelector('header .contacts');
        const parent = document.querySelector('.close');

        parent.append(con)
    }




    

    // Маска для инпута телефона
    $(".phoneMask").mask("+7(999) 999-99-99");


    if(window.innerWidth <= 767){
        cont();
        slidBtnRev();
    }

    // Кнопка у банера на стр. видеоблога
    const beerBtnRev = () => {
        
        if(document.querySelector('.banner .btn')){
            const barrerBtn = document.querySelector('.banner .btn');
            console.log(barrerBtn);
            barrerBtn.innerHTML = '<img src="img/btn_img.svg" alt=""> Подпишись';
        }
    }
    
    if(document.querySelector('.calc .banner .btn')){

    } else if(window.innerWidth <= 479){
        beerBtnRev();
    }


    // Калькулятор перемещаем номер
    const calcBtn = () => {
        const btn = document.querySelector('.calc .banner .btn .wrap');
        console.log(btn)
        const btnText = document.querySelectorAll('.calc .banner .btn')[0].querySelector('span').innerHTML;
        console.log(btnText)
        let text = document.createElement('span');
        text.innerHTML = btnText;
        btn.append(text)
    }
    if(document.querySelectorAll('.calc .banner .btn')[1] && window.innerWidth <= 767){
        calcBtn();
    }




    // Селекторы

    const selecter = () => {
        const curent = document.querySelector('.select_curent');


        const elems = document.querySelectorAll('.select');
        elems.forEach( elem => {
            elem.addEventListener('click', (e) => {
                elem.classList.toggle('open')
            })

            const values = elem.querySelectorAll('.select_body .select_item');
            values.forEach( elem => {
                elem.addEventListener('click', () => {
                    let value = elem.innerText;
                    elem.parentNode.parentNode.querySelector('.select_curent').innerText = value;
                    
                })
            })
        });


    }
    
    if(document.querySelector('.select')){
        selecter();
    }




    // Загужаем файл на стрю калькулятора

    const file = (e) => {
        document.querySelector('#calc_file').addEventListener('input', event => {
            let name = document.querySelector('#calc_file').files[0].name

            const elem = document.createElement('div');
            elem.classList.add('file_elem');
            elem.classList.add('btn');
            elem.innerHTML = `<img src="img/screpca.svg"><span>${name}</span><img class="remove" src="img/remove.svg">`;

            document.querySelector('.items_esk').append(elem);

            removeFile();
        })
    }
    

    const removeFile = () => {
        const btn = document.querySelectorAll('.remove');
        btn.forEach( elem => {
            elem.addEventListener('click', () => {
                elem.parentNode.remove();
            })
        })
    }

    if(document.querySelector('#calc_file')){
        file();
    }
    
    
    
    // Ранжированный инпут  ДОДЕЛАТЬ
    document.querySelectorAll('.input_range').forEach( elem => {
        elem.addEventListener('input', () => {
            let value = elem.value;
            console.log(value)
            elem.setAttribute('style', `background: -webkit-linear-gradient(left, #f38d38 ${value}%, #f2f2f2 ${value}%);`);
        })
    })




    // Открываем и закрываем фильтр у каталогов
    const filterFunc = () => {
        const btn = document.querySelector('#filter');
        const filter = document.querySelector('.left_catalog');

        btn.addEventListener('click', () => {
            filter.classList.toggle('open')
        })
    }
    if(document.querySelector('#filter') && window.innerWidth <= 1260){
        filterFunc();
    }

    if(document.querySelector('.filter_banner') && window.innerWidth <= 1260){
        console.log(1212)
        const banner = document.querySelector('.filter_banner');
        const beforeElem = document.querySelectorAll('.progect_item')[2];
        beforeElem.after(banner);
    }



    // Переносим верианты размеров ниже для фильтра
    const variable = () => {
        const wrap = document.querySelector('.variables');
        const parent = document.querySelector('.information_topWrapper');
        parent.append(wrap);
    }
    if(document.querySelector('.variables') && window.innerWidth <= 969){
        variable();
    }




    // Делаем слайдер для элементов фильтра
    const sliderFilter = () => {
        const list = document.querySelector('.variables')
        list.classList.add('owl-carousel');
        list.id = 'filter_list'
    }
    if(document.querySelector('.variables') && window.innerWidth <= 767){
        sliderFilter();

        $(document).ready(function(){
            let variables = $("#filter_list");
            variables.owlCarousel(
                {   
                    nav: false,
                    responsive : {
                        0 : {
                            items: 3,
                            margin: 10,
                            center: false,
                            startPosition: 0,
                            nav: false,
                            autoWidth: true,
                        },
                        480 : {
                            autoWidth: false,
                            items: 5,
                            margin: 10,
                            center: true,
                            startPosition: 2,
                            nav: false,
                        }
                        
                    }  
                }
            );
        });
    }
    
        
    
    



    // Делаем слайдер на стр. проекта где схемы
    if(window.innerWidth <= 969 && document.querySelector('.project_tabs')){
        console.log('ok')
        const trac = document.querySelector('.project_tabConten1');
        trac.classList.add('owl-carousel');
        trac.id = 'shema'

        
        $(document).ready(function(){
            let shema = $("#shema");
            shema.owlCarousel(
                {   
                    nav: false,
                    items: 1,
                        
                    
                }
            );
            $('.progectNextBtn').click(function() {
                shema.trigger('next.owl.carousel');
            })
            $('.progectPrevBtn').click(function() {
                shema.trigger('prev.owl.carousel', [300]);
            })
        });


        const trac2 = document.querySelector('.project_tabConten2');
        trac2.classList.add('owl-carousel');
        trac2.id = 'shema2'

        
        $(document).ready(function(){
            let shema2 = $("#shema2");
            shema2.owlCarousel(
                {   
                    nav: false,
                    items: 1,
                        
                    
                }
            );
            $('.progectNextBtn').click(function() {
                shema2.trigger('next.owl.carousel');
            })
            $('.progectPrevBtn').click(function() {
                shema2.trigger('prev.owl.carousel', [300]);
            })
        });
        
    }

})
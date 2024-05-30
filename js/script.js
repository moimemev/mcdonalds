window.addEventListener('load',function(){     
    const header = document.querySelector('.header');
    const hMenu = document.querySelector('.hMenu');
    const topSearch = document.querySelector('.topSearch');
    const srch = document.querySelector('.topSearch .srch');
    const srch_close = document.querySelector('.topSearch .close');
    const aside = document.querySelector('.aside');
    const btnTop = document.querySelector('.btnTop');

    // gnb menu
    hMenu.addEventListener('mouseenter',function(){
        header.classList.add('open');
    })

    header.addEventListener('mouseleave',function(){
        header.classList.remove('open');
    })
   
    //search
    srch.addEventListener('click',function(){
        console.log("click");
        topSearch.classList.add('open');
    })

    srch_close.addEventListener('click',function(){
        topSearch.classList.remove('open');
    })

    //aside
    window.addEventListener('scroll',function(){
        const docScrollTop = document.querySelector('html').scrollTop;
        
        if(docScrollTop>=100){
            aside.style.display = 'block';
        }else{
            aside.style.display = 'none';
        }

        if(docScrollTop>=200){
            header.classList.add('fixed');
        }else{
            header.classList.remove('fixed');
        }
    })

    //goto top
    btnTop.addEventListener('click',function(){
        window.scrollTo(
            {
                top:0, 
                left:0,
                behaviotr:'smooth'
            }
        )
        window.scroll({top:0},600)
    })
})//window load end

    const bar = document.querySelector("#bars")
    const navleft = document.querySelector(".header-top2-left")
    const bgoverlauyfull = document.querySelector(".bgoverlauy-full")

    bar.addEventListener("click", function () {
        navleft.classList.add("open")
        bar.classList.add("fa-x")
        bgoverlauyfull.classList.add("open2")
    })


    bgoverlauyfull.addEventListener("click", function () {
        navleft.classList.remove("open")
        bgoverlauyfull.classList.remove("open2")
        bar.classList.remove("fa-x")
    })

    $('.autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    window.addEventListener(
        'scroll',
        function(){
       if(window.scrollY>=46){
        document.body.classList.add('shownavbg')
       }
       else{
        document.body.classList.remove('shownavbg')
       }
        }
       )
    
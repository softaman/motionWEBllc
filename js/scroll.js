window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) >1900){
        setProgress(-84)
    }
    else if(Math.ceil(scrollable)> 50){
        setProgress(-0)

    }

    if (Math.ceil(scrolled) >1900){
        setProgress2(-90)


        // alert('avndfafbvkaf;LKDNV')
    }
    else if(Math.ceil(scrollable)> 50){
        setProgress2(-0)

    }


    //
    // if (Math.ceil(scrolled) > 1200){
    //     document.querySelector('.card__menu1').classList.add('aman1')
    //
    //     // alert('avndfafbvkaf;LKDNV')
    // }
    // else if(Math.ceil(scrollable)> 50){
    //     document.querySelector('.card__menu1').classList.remove('aman1')
    //
    // }
    // if (Math.ceil(scrolled) > 1400){
    //     document.querySelector('.card__menu2').classList.add('aman2')
    //
    //     // alert('avndfafbvkaf;LKDNV')
    // }
    // else if(Math.ceil(scrollable)> 50){
    //     document.querySelector('.card__menu2').classList.remove('aman2')
    //
    // }
})

window.addEventListener('scroll', () =>{
    const ani = document.documentElement.scrollHeight - window.innerHeight ;
    const box_animated  = window.scrollY ;
    if (Math.ceil(box_animated) > 500){
        document.querySelector('.box').classList.add('box_animation')

    }
    else if( Math.ceil(ani) > 50){

        document.querySelector('.box').classList.remove('box_animation')

    }
})

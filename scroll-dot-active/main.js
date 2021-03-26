const div1 = document.querySelector(".first");
const div2 = document.querySelector(".sec");
const div3 = document.querySelector(".thir");
const div4 = document.querySelector(".four");
const dots = document.querySelectorAll(".dot"); 

window.addEventListener("scroll", function(){
    console.log(div1)
    const scrollPos = document.documentElement.scrollTop;
    const firPos = div1.offsetTop;
    const secPos = div2.offsetTop;
    const thirPos = div3.offsetTop;
    const fourPos = div4.offsetTop;
    console.log(firPos, secPos, thirPos, fourPos)

    if(scrollPos >= firPos &&  scrollPos < secPos){
        dots.forEach(function(dot, index){
            if(index == 0){
                dot.classList.add("show");
            } else {
                dot.classList.remove("show");
            }
        })
    } else if(scrollPos >= secPos &&  scrollPos < thirPos){
        dots.forEach(function(dot, index){
            if(index == 1){
                dot.classList.add("show");
            } else {
                dot.classList.remove("show");
            }
        })
    }else if(scrollPos >= thirPos &&  scrollPos < fourPos){
        dots.forEach(function(dot, index){
            if(index == 2){
                dot.classList.add("show");
            } else {
                dot.classList.remove("show");
            }
        })
    }else if(scrollPos >= fourPos){
        dots.forEach(function(dot, index){
            if(index == 3){
                dot.classList.add("show");
            } else {
                dot.classList.remove("show");
            }
        })
    }
})
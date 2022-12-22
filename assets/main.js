let sliderNextButton = document.querySelectorAll(".image-with-text-overlay__slider--next");
let sliderPrevButton = document.querySelectorAll(".image-with-text-overlay__slider--prev");
for (const btn of sliderNextButton) {
    btn.addEventListener("click", function(e){
        let slideContainer = this.closest(".image-with-text-overlay__container");
        let slides = slideContainer.querySelectorAll(".image-with-text-overlay__slide");
        let activeSlide = slideContainer.querySelector(".image-with-text-overlay__slide.active");
        let firstSlide = slideContainer.querySelector(".image-with-text-overlay__slide");
        if(activeSlide.nextElementSibling != null){
            activeSlide.classList.remove("active");
            for (const slide of slides) {
                activeSlide.nextElementSibling.classList.add("active");
                slide.style.transform = `translate(-${activeSlide.nextElementSibling.getAttribute("data-transform")}%)`;
            }
        }
        else{
            for (const slide of slides) {
                slide.classList.remove("active");
                slide.style.transform = "translate(0)";
            }
            firstSlide.classList.add("active");
        }
    });
}
for (const btn of sliderPrevButton) {
    btn.addEventListener("click", function(e){
        let slideContainer = this.closest(".image-with-text-overlay__container");
        let slides = slideContainer.querySelectorAll(".image-with-text-overlay__slide");
        let activeSlide = slideContainer.querySelector(".image-with-text-overlay__slide.active");
        let lastSlide = Array.from(slideContainer.querySelectorAll(".image-with-text-overlay__slide"))[slides.length - 1];
        if(activeSlide.previousElementSibling != null){
            activeSlide.classList.remove("active");
            for (const slide of slides) {
                activeSlide.previousElementSibling.classList.add("active");
                slide.style.transform = `translate(-${activeSlide.previousElementSibling.getAttribute("data-transform")}%)`;
            }
        }
        else{
            for (const slide of slides) {
                slide.classList.remove("active");
                slide.style.transform = `translate(-${lastSlide.getAttribute("data-transform")}%)`;
            }
            lastSlide.classList.add("active");
        }
    });
}

let megaMenuColl = document.querySelectorAll(".header__dropdown--mega-menu--hover");
for (const item of megaMenuColl) {
    item.addEventListener("mouseover", function(){
        document.querySelectorAll(".header__dropdown--mega-menu-coll-li").forEach(function(gridItem){
            gridItem.style.display = "none";
        });
        let linkTitle = this.getAttribute("data-title");
        document.querySelectorAll(".header__dropdown--mega-menu-coll-li").forEach(function(megaMenuCollGrid){
            let gridTitle = megaMenuCollGrid.getAttribute("data-title");
            if(linkTitle == gridTitle){
                megaMenuCollGrid.style.display = "block";
            }
        });
    });
}

let tabs = document.querySelectorAll(".tabs__span");
tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        tabs.forEach(function(tab){
            tab.classList.remove("active");
        });
        this.classList.add("active");
        let tab_title = this.getAttribute("data-title");
        let tab_items = this.closest(".tabs").querySelectorAll(".tabs__item");
        tab_items.forEach(function(tab_item){
            if(tab_item.getAttribute("data-title") == tab_title){
                tab_item.classList.add("active");
            }
            else{
                tab_item.classList.remove("active");
            }
        });
    });
});

let collage_overlay = document.querySelectorAll(".collage__overlay");
collage_overlay.forEach(function(overlay){
    overlay.addEventListener("mouseover", function(){
        let link = this.getAttribute("href");
        let title = this.innerText;
        let text = this.nextElementSibling.innerText;
        let img = this.closest(".collage__flex-item-content").querySelector("img");
        let featured_container = this.closest(".collage__container").querySelector(".collage__featured-container");
        if(img != null){
            featured_container.querySelector(".collage__featured-overlay").setAttribute("href", link);
            featured_container.querySelector(".collage__featured-image").setAttribute("src", img.src);
            featured_container.querySelector(".collage__featured-title").innerText = title;
            featured_container.querySelector(".collage__featured-text").innerText = text;
        }
        console.log(link);
    });
});

// let form_input = document.querySelectorAll(".featured-collection__swatch-item input");
// form_input.forEach(function(input){
// input.addEventListener("change", function(){
//     let swatch = "";
//     this.closest(".featured-collection__swatch-container").querySelectorAll("input:checked").forEach(function(item){
//         swatch += item.value + " / ";
//     });
//     let option = this.closest("form").querySelectorAll("select option");
//     let btn = this.closest("form").querySelector(".form--submit");
//     let price = this.closest("form").querySelector(".featured-collection__price");
//     let availability = "";
//     let final_swatch = swatch.substring(0, swatch.length - 2).toLowerCase().trim();
//     option.forEach(function(opt){
//         if(opt.innerText.toLowerCase().trim() == final_swatch){
//             option.forEach(function(opt2){
//                 opt2.removeAttribute("selected");
//             });
//             opt.setAttribute("selected", "");
//             price.querySelector("span").innerText = opt.getAttribute("data-price");
//             price.querySelector("strike").innerText = opt.getAttribute("data-compare-at-price");
//             availability = opt.getAttribute("data-availability").toLowerCase().trim();
//         }
//     });
//     if(availability == "instock"){
//         btn.innerText = btn.getAttribute("data-instock");
//         btn.removeAttribute("disabled");
//     }
//     else if(availability == "soldout"){
//         btn.innerText = btn.getAttribute("data-soldout");
//         btn.setAttribute("disabled", "");
//     }
//     console.log(swatch.substring(0, swatch.length - 2));
// });
// });


// let featured_col_btn_next = document.querySelectorAll(".featured-collection--next");
// featured_col_btn_next.forEach(function(btn){
// btn.addEventListener("click", function(){
//     let pos = parseInt(this.getAttribute("data-transform"));
//     if(pos < 100){
//     let inc = pos + 25;
//     this.closest(".featured-collection__flex").querySelectorAll(".featured-collection--btn").forEach(function(item){
//         item.setAttribute("data-transform", inc);
//     });
//     this.closest(".featured-collection__flex").querySelectorAll(".featured-collection__flex-item").forEach(function(item){
//         item.setAttribute("style", `left: -${inc}%`);
//     });
//     if(inc > 0){
//         this.closest(".featured-collection__flex").querySelector(".featured-collection--prev").style.display = 'block';
//     }
//     if(inc >= 100){
//     this.closest(".featured-collection__flex").querySelector(".featured-collection--prev").style.display = 'block';
//     this.closest(".featured-collection__flex").querySelector(".featured-collection--next").style.display = 'none';
//     }
// }
// });
// });
// let featured_col_btn_prev = document.querySelectorAll(".featured-collection--prev");
// featured_col_btn_prev.forEach(function(btn){
//     btn.addEventListener("click", function(){
//         let pos = parseInt(this.getAttribute("data-transform"));
//         if(pos > 0){
//         let inc = pos - 25;
//         this.closest(".featured-collection__flex").querySelectorAll(".featured-collection--btn").forEach(function(item){
//             item.setAttribute("data-transform", inc);
//         });
//         this.closest(".featured-collection__flex").querySelectorAll(".featured-collection__flex-item").forEach(function(item){
//             item.setAttribute("style", `left: -${inc}%`);
//         });
//         if(inc <= 0){
//             this.closest(".featured-collection__flex").querySelector(".featured-collection--prev").style.display = 'none';
//             this.closest(".featured-collection__flex").querySelector(".featured-collection--next").style.display = 'block';
//             }
//             if(inc == 75){
//                 this.closest(".featured-collection__flex").querySelector(".featured-collection--next").style.display = 'block';
//             }
//     }
//     });
//     });


    let testimonial_btn_next = document.querySelectorAll(".testimonial__next");
    testimonial_btn_next.forEach(function(btn){
        btn.addEventListener("click", function(){
            let cont = this.closest(".testimonial__flex").querySelector(".testimonial__flex-container");
            let i = parseInt(cont.getAttribute("data-index"));
            let t = parseInt(cont.getAttribute("data-length"));
            if(i<t){
                console.log(i,t);
                i++;
                cont.setAttribute("data-index", i);
            }

            let pos = parseFloat(this.getAttribute("data-transform"));
            if(i < t){
            let inc = pos + 33.33;
            this.closest(".testimonial__flex").querySelectorAll(".testimonial__btn").forEach(function(item){
                item.setAttribute("data-transform", inc);
            });
            this.closest(".testimonial__flex").querySelectorAll(".testimonial__flex-item").forEach(function(item){
                item.setAttribute("style", `left: -${inc}%`);
            });
        }
        else{
            this.closest(".testimonial__flex").querySelectorAll(".testimonial__btn").forEach(function(item){
                item.setAttribute("data-transform", 0);
            });
            this.closest(".testimonial__flex").querySelectorAll(".testimonial__flex-item").forEach(function(item){
                item.setAttribute("style", `left: -${0}%`);
            });
            cont.setAttribute("data-index", 2);
        }
        });
    });

    let testimonial_btn_prev = document.querySelectorAll(".testimonial__prev");
    testimonial_btn_prev.forEach(function(btn){
        btn.addEventListener("click", function(){
            let cont = this.closest(".testimonial__flex").querySelector(".testimonial__flex-container");
            let i = parseInt(cont.getAttribute("data-index"));
            let t = parseInt(cont.getAttribute("data-length"));
            if(i>1){
                console.log(i,t);
                i--;
                cont.setAttribute("data-index", i);
            }

            let pos = parseFloat(this.getAttribute("data-transform"));
            if(i > 2){
            let inc = pos - 33.33;
            this.closest(".testimonial__flex").querySelectorAll(".testimonial__btn").forEach(function(item){
                item.setAttribute("data-transform", inc);
            });
            this.closest(".testimonial__flex").querySelectorAll(".testimonial__flex-item").forEach(function(item){
                item.setAttribute("style", `left: -${inc}%`);
            });
        }
        });
    });

    document.addEventListener('lazybeforeunveil', function(e){
        if(e.target.classList.value.indexOf("product-card__image") != -1){
            let c = e.target.closest(".product-card").classList;
            c.add("animated");
            setTimeout(function(){
                c.add("animated");
            }, 500);
        }
    });

    function delay(callback, ms) {
        var timer = 0;
        return function() {
          var context = this, args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            callback.apply(context, args);
          }, ms || 0);
        };
    }

    document.querySelector("#search").addEventListener("input", delay(function(e){
        if(e.target.value.length >= 2){
            console.log("val", e.target.value);
        }
        else{
            console.log("empty ");
        }
    }, 500));

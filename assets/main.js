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



    let popupOverlay = document.querySelector(".popup__overlay");
    let body = document.querySelector("body");
    let showOverlay = () => {
        body.classList.add("overflow__hidden");
        popupOverlay.style.display = "block";
        setTimeout(() => {
            popupOverlay.classList.add("active");
        }, 10);
        console.log("asdasdasdasasdasd");
    }
    let hideOverlay = () => {
        popupOverlay.classList.remove("active");
        setTimeout(() => {
            popupOverlay.style.display = "none";
            body.classList.remove("overflow__hidden");
        }, 260);
    }
    popupOverlay.addEventListener("click", e => {
        let drawerArr = [".search", ".cart-drawer", ".header__mobile"];
        for(item of drawerArr){
            document.querySelector(item).classList.remove("active");
            hideOverlay();
        }
        setTimeout(() => {
            document.querySelector(drawerArr[0]).style.display = "none";
            document.querySelector(drawerArr[1]).style.display = "none";
            document.querySelector(drawerArr[2]).style.display = "none";
        }, 260);
    });
    



    assignRows = (cards) => {
        let odd = true;
        [...cards.children].forEach((el) => {
            el.className = 'header__menu-li';
            if (!el.previousElementSibling || el.offsetLeft < el.previousElementSibling.offsetLeft) {
                odd = !odd;
            }
            if(odd){
                el.parentElement.classList.add("wrapped");
                el.style.background = "red";
            }
            else{
                el.parentElement.classList.remove("wrapped");
                el.style.background = "none";
            }
        });
    };


    const observer2 = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
            assignRows(entry.target);
        });
    });
    
    const cards = document.querySelector('.header__menu-ul');
    observer2.observe(cards);
    assignRows(cards);
    
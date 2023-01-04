let wrapMenu = (menu) => {
    let linkWrap = 0;
    [...menu.children].forEach((el) => {
      if (!el.previousElementSibling || el.offsetLeft < el.previousElementSibling.offsetLeft) {
        linkWrap++;
      }
      linkWrap > 1
        ? document.querySelector(".header").classList.add("wrapped")
        : document.querySelector(".header").classList.remove("wrapped");
    });
  };
  let headerMenuObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      wrapMenu(entry.target);
    });
  });
  let headerMenu = document.querySelector('.header__menu-ul');
  headerMenuObserver.observe(headerMenu);
  wrapMenu(headerMenu);

  let checkFirstSectionIfVideo = () => {
    let firstSection = document.querySelector("#MainContent .shopify-section:first-child");
    let header = document.querySelector(".header");
    console.log("firstSectionIsVideo", firstSection);
    if(firstSection != null){
      firstSection.classList.contains('section--video') ? header.classList.add("header--transparent") : header.classList.remove("header--transparent");
    }
    else{
        header.classList.remove("header--transparent");
    }
  }
  checkFirstSectionIfVideo();

  let stickyHeader = () => {
    if (window.scrollY >= 100 || window.pageYOffset >= 100) {
      document.querySelector(".header").classList.add("header--white");
  } 
  else {
    document.querySelector(".header").classList.remove("header--white");
  }
  }

  stickyHeader();
  window.onscroll = function() {
    stickyHeader();
  };
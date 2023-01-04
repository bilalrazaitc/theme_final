document.addEventListener('shopify:section:select', function(event) {
    console.log(event);
    const blockSelectedIsHeader = event.target.classList.contains('section--header');
    if (!blockSelectedIsHeader) return;
  
    let headerMenuObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          wrapMenu(entry.target);
        });
      });
      let headerMenu = event.target.querySelector('.header__menu-ul');
      headerMenuObserver.observe(headerMenu);
      wrapMenu(headerMenu);

      checkFirstSectionIfVideo();
  });
  document.addEventListener('shopify:section:deselect', function(event) {
    console.log(event);
    const blockSelectedIsHeader = event.target.classList.contains('section--header');
    if (!blockSelectedIsHeader) return;
  
    let headerMenuObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          wrapMenu(entry.target);
        });
      });
      let headerMenu = event.target.querySelector('.header__menu-ul');
      headerMenuObserver.observe(headerMenu);
      wrapMenu(headerMenu);
      
      checkFirstSectionIfVideo();
  });



  document.addEventListener('shopify:section:load', function(event) {
    checkFirstSectionIfVideo();
  });
  document.addEventListener('shopify:section:unload', function(event) {
    checkFirstSectionIfVideo();
  });
  document.addEventListener('shopify:section:reorder', function(event) {
    checkFirstSectionIfVideo();
  });


  
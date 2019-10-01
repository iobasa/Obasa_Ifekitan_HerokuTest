(() => {
	console.log("fired!");

	
	// set up your variable stack ->
	let mobileNav = document.querySelector("#button"),
		navPanel = document.querySelector("#burgerCon"),
        closeButton = document.querySelector(".close");
        
        function toggleNav(e) {

            e.preventDefault();

            console.log('should show nav dropdown');
      
            // this should only
            if (this.nodeName == "A") {
            }

            navPanel.classList.add("show-mobile-nav");
          }
      
          function close(event) {
              event.preventDefault();
              console.log('should show nav dropdown close');
              // make the lightbox close
              navPanel.classList.remove("show-mobile-nav");
            }

    // these are the triggers that fire off our functionality (when user clicks on something)
	mobileNav.addEventListener('click', toggleNav);
	closeButton.addEventListener("click", close);

})();
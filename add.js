(function () {
    function addbtn(){
        var sp = document.createElement("span");
        sp.id = "ref-span";
        var a = document.createElement("a");
        a.id = "ref-btn";
        a.style.cursor = "pointer";
        // a.setAttribute("href", "/in/yangshun/overlay/contact-info/");
        a.innerHTML = "Get Referred";
        // document.querySelector(".SndfhJCRCNhMRfeLPAudhPMGuRexFAUnCgtCQ.mt2").appendChild(sp);
        // document.querySelector("#ref-span").appendChild(a);
        var target = document.querySelector(".SndfhJCRCNhMRfeLPAudhPMGuRexFAUnCgtCQ.mt2");
        if (target) {
        target.appendChild(sp);
        document.querySelector("#ref-span").appendChild(a);
        }
    }
    function addEventListeners() {
        var refBtn = document.querySelector("#ref-btn");
        if (refBtn) {
          refBtn.addEventListener("click", function () {
            var composeButton = document.querySelector(".entry-point.profile-action-compose-option button");
            if (composeButton) {
              composeButton.click();
            }
          });
        }
      }
    

      function initialize() {
        addbtn();
        addEventListeners();
      }
    
      initialize();

      const observer = new MutationObserver((mutations) => {
        initialize();
      });
    
    //   observer.observe(document, {
    //     childList: true,
    //     subtree: true,
    //   });

})();


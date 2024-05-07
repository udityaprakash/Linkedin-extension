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
        // var target = document.querySelector(".debWPjvoLthHmxanBpRdaFCxfxOIAXtjuGI.mt2");
        var target = document.querySelectorAll(".mt2")[0];
        if (target) {
        target.appendChild(sp);
        document.querySelector("#ref-span").appendChild(a);
        alert("button added");
        }
    }
    function addEventListeners() {
        var refBtn = document.querySelector("#ref-btn");
        if (refBtn) {
          refBtn.addEventListener("click", function () {
            var composeButton = document.querySelector(".entry-point.profile-action-compose-option button");
            if (composeButton) {
              composeButton.click();
              setTimeout(() => {
                var toInput = document.querySelector(".msg-form__contenteditable");
                if (toInput) {
                  toInput.innerHTML = "<p>hello sir i am a great fan of yours<p>";
                }
              }, 1000);
              // document.querySelectorAll(".msg-form__contenteditable")[0].innerHTML=`<p>hello sir i am a great fan of yours<p>`;
            }
          });
        }
      }
    

      function initialize() {
        addbtn();
        addEventListeners();
      }
    
      initialize();

      // const observer = new MutationObserver((mutations) => {
      //   initialize();
      // });
    
    //   observer.observe(document, {
    //     childList: true,
    //     subtree: true,
    //   });

})();


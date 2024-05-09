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
                  var gen = document.querySelectorAll(".mt2 div div span")[1].innerHTML;
                  const genderRegex = /\(([^)]+)\)/;
                  const match = gen.match(genderRegex);
                  const gend = match ? match[1] : '';
                  const salutation = genderName(gend); 
                  const education = document.querySelectorAll(".mr1 span");
                  toInput.innerHTML = "<p>hello "+salutation+" ,I am a great fan of yours<p>";
                }
              }, 1000);
              // document.querySelectorAll(".msg-form__contenteditable")[0].innerHTML=`<p>hello sir i am a great fan of yours<p>`;
            }
          });
        }
      }
      
      function genderName(str){
        switch(str){
          case "She/Her":
            return "Ma'am";
          case "He/Him":
            return "Sir";
          default: return "";    
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


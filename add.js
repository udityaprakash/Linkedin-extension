(function () {
    function addbtn(){
        var sp = document.createElement("span");
        sp.id = "ref-span";
        var a = document.createElement("a");
        a.id = "ref-btn";
        a.style.cursor = "pointer";
        a.innerHTML = "Get Referred";
        var target = document.querySelectorAll(".mt2")[0];
        if (target) {
        target.appendChild(sp);
        document.querySelector("#ref-span").appendChild(a);
        // alert("button added");
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
                  const name = (document.querySelectorAll(".mt2 div div span a h1")[0].innerHTML).split(" ")[0];
                  const education = document.querySelectorAll(".mr1 span");
                  toInput.innerHTML = `<p></p>`;
                  const msg = `<p>Hello ${name},</p><br>
                  <p>I hope this message finds you well. I am reaching out to you with a request for a referral in your current company.</p><br>
                  <p>I'm Uditya Prakash, a Backend Developer with 3 years of project experience in NodeJs and its subsequent frameworks. I'm interested in joining your company and would appreciate any insights you might have about the work culture and any upcoming SDE roles.</p><br>
                  <p>I have attached my resume for your reference. Looking forward to hearing from you.</p><br>
                  <p>Best Regards,</p>
                  <p>Uditya Prakash</p>`;
                  toInput.setAttribute("focused", "true");
                  toInput.innerHTML = msg;
                }
              }, 1000);
            }
          });
        }
      }

      function initialize() {
        addbtn();
        addEventListeners();
      }

      setInterval(() => {
        if(window.location.pathname.includes("/in/") && !document.querySelector("#ref-btn")){

          initialize();
        }
      }, 1000);

})();
(function () {
    function addbtn(){
        var sp = document.createElement("span");
        sp.id = "ref-span";
        var a = document.createElement("a");
        a.id = "ref-btn";
        a.style.cursor = "pointer";
        // a.setAttribute("href", "/in/yangshun/overlay/contact-info/");
        a.innerHTML = "Get referred";
        document.querySelector(".SndfhJCRCNhMRfeLPAudhPMGuRexFAUnCgtCQ.mt2").appendChild(sp);
        document.querySelector("#ref-span").appendChild(a);
    }
    function addeventlistner(){
        document.querySelector("#ref-btn").addEventListener("click", function(){
            alert('Get referred button is clicked');
        });

    }
    addbtn();
    addeventlistner();
    alert('add.js is activated');

})();
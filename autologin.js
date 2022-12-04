javascript: (function () {    
    var username = '@gmail.com';
    var password = 'xxx';
    var speed = 50;
    var i = 0;
    var j = 0;
    var flag = true;
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function typeUserName() {

        if (i < username.length) {
            document.querySelectorAll('input[type="email"]')[0].setAttribute("autocomplete", "off");
            document.querySelectorAll('input[type="email"]')[0].value += username.charAt(i);
            i++;
            setTimeout(typeUserName, speed);
        } else {
            var button = document.querySelectorAll("button");

            for (let i = 0; i < button.length; i++) {
                if (button[i].innerText == "Next") {
                    button[i].click();
                    console.log("button next");
                    setTimeout(typePassword, 1500);
                }
            }
        }
    }
    function typePassword() {
        console.log("password field");
        if (flag) {
            if (i >= username.length) {
                j = 0;
                document.querySelectorAll('input[type="password"]')[0].value = "";
                flag = false;
            }
        }

        if (j < password.length) {
            document.querySelectorAll('input[type="password"]')[0].setAttribute("autocomplete", "off");
            document.querySelectorAll('input[type="password"]')[0].value += password.charAt(j);
            j++;
            setTimeout(typePassword, speed);
        } else {
            var button = document.querySelectorAll("button");

            for (let i = 0; i < button.length; i++) {
                if (button[i].innerText == "Next") {
                    button[i].click();
                    console.log("button next");
                    sleep(1500);
                }
            }


        }
    }
    typeUserName();
})()

 const top100pass = ["password","123456","123456789","guest","QWERTY","12345678","111111","12345","col123456","123123","1234567",
    "1234","1234567890","000000","555555","666666","123321","654321","7777777","123","d1lakiss","777777","110110jp","1111","987654321",
    "121212","gizli","abc123","112233","azerty","159753","1q2w3e4r","54321","[email protected]","222222","qwertyuiop","qwerty123",
    "qazwsx","vip","asdasd","123qwe","123654","iloveyou","a1b2c3","999999","Groupd2013","1q2w3e","usr","Liman1000","1111111","333333",
    "123123123","9136668099","11111111","1qaz2wsx","password1","mar20lt","987654321","gfhjkm","159357","abcd1234","131313","789456",
    "luzit2000","aaaaaa","zxcvbnm","asdfghjkl","1234qwer","88888888","dragon","987654","888888","qwe123","soccer","3601","asdfgh",
    "master","samsung","12345678910","killer","1237895","1234561","12344321","daniel","00000","444444","101010","f–you","qazwsxedc",
    "789456123","super123","qwer1234","123456789a","823477aA","147258369","nknown","98765","q1w2e3r4","232323"]

function generatePassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+-={}|;':\"<>,./?";
      
    let password = "";
      
    // Ensure that the password contains at least one character from each category
    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
      
    // Add random characters from each category to the password
    for (let i = 0; i < length - 4; i++) {
        const category = Math.floor(Math.random() * 4);
        switch (category) {
            case 0:
                password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                break;
            case 1:
                password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                break;
            case 2:
                password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                break;
            case 3:
                password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
                break;
        }
    }
      
    return password;
}

var checkbox = document.getElementById("generatePass")

if(checkbox !== null){
checkbox.addEventListener('change', ()=>{
    if(checkbox.checked){
        var pass = generatePassword(Math.floor(Math.random() * (20 - 8 + 1)) + 8);
        document.getElementById("password").value = pass;
        document.getElementById("cPassword").value = pass;
    }
    else{
        document.getElementById("password").value = "";
        document.getElementById("cPassword").value = "";
    }
})
}

function validPassword(pass){
    var number = /[0-9]/
    var small = /[a-z]/
    var big = /[A-Z]/
    var spec = /[!@#$%^&*()_+-={}|;':"<>,./?]/
    if(String(pass).length < 8 || String(pass).length > 20){
        return false
    }
    if(!number.test(pass)){
        return false
    }
    if(!small.test(pass)){
        return false
    }
    if(!big.test(pass)){
        return false
    }
    if(!spec.test(pass)){
        return false
    }
    return true
}

function validation(form){
    let ru_lan = localStorage.getItem("lang") == "ru"

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }

    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {

        removeError(input)

        if (input.dataset.type == "phone") {
            str = input.value.replace('/\s+/g', '');
            var pattern = /^(\+375|80)?\d{9}$/;
            if (!pattern.test(str)) {
                removeError(input)
                if(ru_lan){
                    createError(input, `Это не беларусский номер телефона`)
                }
                else{
                    createError(input, `This is not a belarusian number`)
                }
                result = false
            }
        }
        
        if (input.dataset.type == "email") {
            str = input.value;
            var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!pattern.test(str)) {
                removeError(input)
                if(ru_lan){
                    createError(input, `Это не правильный адрес электронной почты`)
                }
                else{
                    createError(input, `This is not a valid email`)
                }
                result = false
            }
        }

        if (input.dataset.type == "date") {
            const currentDate = new Date();
            const birthday = Date.parse(input.value);
            const differenceInDays = Math.abs(currentDate - birthday) / 1000;
            if (differenceInDays < 504921600 ) {
                removeError(input)
                if(ru_lan){
                    createError(input, `Вы младше 16 лет`)
                }
                else{
                    createError(input, `You are younger than 16`)
                }
                result = false
            }
            if (currentDate < birthday) {
                removeError(input)
                if(ru_lan){
                    createError(input, `Неверная дата`)
                }
                else{
                    createError(input, `Wrong date`)
                }
                result = false
            }
        }
        
        if (input.dataset.type == "password") {
            var pass = document.getElementById("password").value;
            if (!(validPassword(pass))) {
                removeError(input)
                if(ru_lan){
                    createError(input, `Пароль должен быть длиной 8-20 символов и обязательно включать в себя строчные и заглавные буквы латиницы, цифры и специальные символы`)
                }
                else{
                    createError(input, `Password must be 8-20 chars long and contain at least 1 of each: big, small letters, number and special character`)
                }
                result = false
            }
            if (top100pass.includes(pass)) {
                removeError(input)
                if(ru_lan){
                    createError(input, `Это один из 100 самых частоиспользуемых паролей 2023`)
                }
                else{
                    createError(input, `This is one of the weakest passwords`)
                }
                result = false
            }
        }

        if (input.dataset.type == "cPassword") {
            var pass = document.getElementById("password").value;
            var cpass = document.getElementById("cPassword").value;
            console.log(pass)
            if (pass != cpass) {
                removeError(input)
                if(ru_lan){
                    createError(input, `Пароли не совпадают`)
                }
                else{
                    createError(input, `Passwords aren't matching`)
                }
                result = false
            }
        }

        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input)
                if(ru_lan){
                    createError(input, `Это поле обязательно`)
                }
                else{
                    createError(input, `The field is required`)
                }
                result = false
            }
        }

    }

    return result
}
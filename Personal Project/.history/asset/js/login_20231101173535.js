let user = document.getElementById('user');
let password = document.getElementById('password');
let userError = document.querySelector('.error-User');
let passwordError = document.querySelector('.error-password');
let checkRemember = document.querySelector('#check');
let errorRemember = document.querySelector('.errorCheck')
console.log(checkRemember);
console.log(passwordError);
console.log(user);
var check1 = '';
var check2 = '';
var check3 = '';
let submit = document.getElementById('submit-validate');
submit.addEventListener('click', () => {
    handle()
})
var test = false;
var test1 = false;
var test3 = false;
function handle() {
    if (user.value == '') {
            check1 = `<li>* Vui lòng nhập User</li>`
            // test = true
            userError.innerHTML = check1
            console.log(userError);
    } else {
        // console.log( userError.children[0]);
       userError.innerHTML = ''
    }


    if (password.value == '') {
       
            check2 = `<li>* Vui lòng nhập Password</li>`
            passwordError.innerHTML = check2
            console.log(passwordError);
            // test1 = true
    } else {
        // console.log( passwordError.children[0]);
        passwordError.innerHTML = ''
    }


    // if (!checkRemember.checked) {
    //     if (!test3) {
    //         check3 += `<li>* Vui lòng </li>`
    //         test3 = true
    //         errorRemember.innerHTML += check3
    //     }
    // }
}
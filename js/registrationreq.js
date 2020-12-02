function registerHandlers() {
    document.getElementById("userName").onblur = chkUsername;
    document.getElementById("PASSWORD").onblur = chkPassword;
    document.getElementById("repeatPassword").onblur = chkRepeatPassword;
    document.getElementById("firstName").onblur = chkFirstName;
    document.getElementById("lastName").onblur = chkLastName;
    document.getElementById("address1").onblur = chkAddress1;
    document.getElementById("address2").onblur = chkAddress2;
    document.getElementById("city").onblur = chkCity;
    document.getElementById("email").onblur = chkEmail;
    document.getElementById("male").onclick = fixButton;
    document.getElementById("female").onclick = fixButton;
    document.getElementById("other").onclick = fixButton;
    document.getElementById("single").onclick = fixButton;
    document.getElementById("married").onclick = fixButton;
    document.getElementById("divorced").onclick = fixButton;
    document.getElementById("widowed").onclick = fixButton;
    document.getElementById("birthday").onclick = fixButton;
    document.getElementById("form").onsubmit = chkSubmit;
    document.getElementById("form").onreset = resetFields;
}

function chkUsername() { //USERNAME
    let user = document.getElementById("userName");
    let userLength = user.value;
    let maxlength = 50;
    let minlength = 6;

    if (user) {
        if (user.value == "" || userLength.length > maxlength || userLength.length < minlength) {
            let userDiv = document.getElementById("userDiv");
            if (userDiv) {
                userDiv.classList.add("has-error");
                userDiv.classList.remove("has-success");
            }
            let userErr = document.getElementById("userErr");
            if (userErr) {
                userErr.classList.remove("hide");
                userErr.classList.add("show");
            }
            let boxErr = document.getElementById("userName");
            if (boxErr) {
                boxErr.classList.add("box-error");
                boxErr.classList.remove("box-success");
            }
            return false;
        } else if (userLength.length <= maxlength && userLength.length >= minlength) {
            let userDiv = document.getElementById("userDiv");
            if (userDiv) {
                userDiv.classList.remove("has-error");
                userDiv.classList.add("has-success");
            }
            let userErr = document.getElementById("userErr");
            if (userErr) {
                userErr.classList.add("hide");
                userErr.classList.remove("show");
            }
            let boxErr = document.getElementById("userName");
            if (boxErr) {
                boxErr.classList.remove("box-error");
                boxErr.classList.add("box-success");
            }
            let submit = document.getElementById("submit");
            if (submit) {
                submit.disabled = false;
            }
            return true;
        }
    }
}

function chkPassword() { //PASSWORD
    let first = document.getElementById("PASSWORD");
    let firstChk = String(first.value).trim();
    let index = firstChk.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/);

    if (first) {
        if (first.value == "" || index <= -1) {
            let firstDiv = document.getElementById("passDiv");
            if (firstDiv) {
                firstDiv.classList.add("has-error");
                firstDiv.classList.remove("has-success");
            }
            let firstErr = document.getElementById("passErr");
            if (firstErr) {
                firstErr.classList.remove("hide");
                firstErr.classList.add("show");
            }
            let boxErr = document.getElementById("PASSWORD");
            if (boxErr) {
                boxErr.classList.add("box-error");
                boxErr.classList.remove("box-success");
            }
            return false;
        } else {
            let firstDiv = document.getElementById("passDiv");
            if (firstDiv) {
                firstDiv.classList.remove("has-error");
                firstDiv.classList.add("has-success");
            }
            let firstErr = document.getElementById("passErr");
            if (firstErr) {
                firstErr.classList.add("hide");
                firstErr.classList.remove("show");
            }
            let boxErr = document.getElementById("PASSWORD");
            if (boxErr) {
                boxErr.classList.remove("box-error");
                boxErr.classList.add("box-success");
            }
            let submit = document.getElementById("submit");
            if (submit) {
                submit.disabled = false;
            }
            return true;
        }
    }
}

function chkRepeatPassword() {
    let first = document.getElementById("PASSWORD");
    let second = document.getElementById("repeatPassword");
    let secondChk = String(second.value).trim();
    let index = secondChk.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/);

    if (first && second) {
        if (first.value != second.value || second.value == "" || index <= -1) {
            let secondDiv = document.getElementById("verPassDiv");
            if (secondDiv) {
                secondDiv.classList.add("has-error");
                secondDiv.classList.remove("has-success");
            }
            let secondErr = document.getElementById("verPassErr");
            if (secondErr) {
                secondErr.classList.remove("hide");
                secondErr.classList.add("show");
            }
            let boxErr = document.getElementById("repeatPassword");
            if (boxErr) {
                boxErr.classList.add("box-error");
                boxErr.classList.remove("box-success");
            }
            return false;
        } else {
            let secondDiv = document.getElementById("verPassDiv");
            if (secondDiv) {
                secondDiv.classList.remove("has-error");
                secondDiv.classList.add("has-success");
            }
            let secondErr = document.getElementById("verPassErr");
            if (secondErr) {
                secondErr.classList.add("hide");
                secondErr.classList.remove("show");
            }
            let boxErr = document.getElementById("repeatPassword");
            if (boxErr) {
                boxErr.classList.remove("box-error");
                boxErr.classList.add("box-success");
            }
            let submit = document.getElementById("submit");
            if (submit) {
                submit.disabled = false;
            }
            return true;
        }

    }
}

function chkFirstName() {
    let first = document.getElementById("firstName");
    let firstLength = first.value;
    let maxlength = 50;

    if (first) {
        if (first.value == "" || firstLength.length > maxlength) {
            let firstDiv = document.getElementById("firstDiv");
            if (firstDiv) {
                firstDiv.classList.add("has-error");
                firstDiv.classList.remove("has-success");
            }
            let firstErr = document.getElementById("firstErr");
            if (firstErr) {
                firstErr.classList.remove("hide");
                firstErr.classList.add("show");
            }
            let boxErr = document.getElementById("firstName");
            if (boxErr) {
                boxErr.classList.add("box-error");
                boxErr.classList.remove("box-success");
            }
            return false;
        } else if (firstLength.length <= maxlength) {
            let firstDiv = document.getElementById("firstDiv");
            if (firstDiv) {
                firstDiv.classList.remove("has-error");
                firstDiv.classList.add("has-success");
            }
            let firstErr = document.getElementById("firstErr");
            if (firstErr) {
                firstErr.classList.add("hide");
                firstErr.classList.remove("show");
            }
            let boxErr = document.getElementById("firstName");
            if (boxErr) {
                boxErr.classList.remove("box-error");
                boxErr.classList.add("box-success");
            }
            let submit = document.getElementById("submit");
            if (submit) {
                submit.disabled = false;
            }
            return true;
        }
    }
}

function chkLastName() {
    let last = document.getElementById("lastName");
    let lastLength = last.value;
    let maxlength = 50;

    if (last) {
        if (last.value == "" || lastLength.length > maxlength) {
            let lastDiv = document.getElementById("lastDiv");
            if (lastDiv) {
                lastDiv.classList.add("has-error");
                lastDiv.classList.remove("has-success");
            }
            let lastErr = document.getElementById("lastErr");
            if (lastErr) {
                lastErr.classList.remove("hide");
                lastErr.classList.add("show");
            }
            let boxErr = document.getElementById("lastName");
            if (boxErr) {
                boxErr.classList.add("box-error");
                boxErr.classList.remove("box-success");
            }
            return false;
        } else if (lastLength.length <= maxlength) {
            let lastDiv = document.getElementById("lastDiv");
            if (lastDiv) {
                lastDiv.classList.remove("has-error");
                lastDiv.classList.add("has-success");
            }
            let lastErr = document.getElementById("lastErr");
            if (lastErr) {
                lastErr.classList.add("hide");
                lastErr.classList.remove("show");
            }
            let boxErr = document.getElementById("lastName");
            if (boxErr) {
                boxErr.classList.remove("box-error");
                boxErr.classList.add("box-success");
            }
            let submit = document.getElementById("submit");
            if (submit) {
                submit.disabled = false;
            }
            return true;
        }
    }
}

function chkAddress1() {
    let address1 = document.getElementById("address1");
    let addressLength = address1.value;
    let maxlength = 100;

    if (address1) {
        if (address1.value == "" || addressLength.length > maxlength) {
            let add1Div = document.getElementById("add1Div");
            if (add1Div) {
                add1Div.classList.add("has-error");
                add1Div.classList.remove("has-success");
            }
            let add1Err = document.getElementById("add1Err");
            if (add1Err) {
                add1Err.classList.remove("hide");
                add1Err.classList.add("show");
            }
            let boxErr = document.getElementById("address1");
            if (boxErr) {
                boxErr.classList.add("box-error");
                boxErr.classList.remove("box-success");
            }
            return false;
        } else if (addressLength.length <= maxlength) {
            let add1Div = document.getElementById("add1Div");
            if (add1Div) {
                add1Div.classList.remove("has-error");
                add1Div.classList.add("has-success");
            }
            let add1Err = document.getElementById("add1Err");
            if (add1Err) {
                add1Err.classList.add("hide");
                add1Err.classList.remove("show");
            }
            let boxErr = document.getElementById("address1");
            if (boxErr) {
                boxErr.classList.remove("box-error");
                boxErr.classList.add("box-success");
            }
            let submit = document.getElementById("submit");
            if (submit) {
                submit.disabled = false;
            }
            return true;
        }
    }
}

function chkAddress2() {
    let address2 = document.getElementById("address2");
    let addressLength = address2.value;
    let maxlength = 100;

    if (address2) {
        if (address2.value == "" || addressLength.length > maxlength) {
            let add2Div = document.getElementById("add2Div");
            if (add2Div) {
                add2Div.classList.add("has-error");
                add2Div.classList.remove("has-success");
            }
            let add2Err = document.getElementById("add2Err");
            if (add2Err) {
                add2Err.classList.remove("hide");
                add2Err.classList.add("show");
            }
            let boxErr = document.getElementById("address2");
            if (boxErr) {
                boxErr.classList.add("box-error");
                boxErr.classList.remove("box-success");
            }
            return false;
        } else if (addressLength.length <= maxlength) {
            let add2Div = document.getElementById("add2Div");
            if (add2Div) {
                add2Div.classList.remove("has-error");
                add2Div.classList.add("has-success");
            }
            let add2Err = document.getElementById("add2Err");
            if (add2Err) {
                add2Err.classList.add("hide");
                add2Err.classList.remove("show");
            }
            let boxErr = document.getElementById("address2");
            if (boxErr) {
                boxErr.classList.remove("box-error");
                boxErr.classList.add("box-success");
            }
            let submit = document.getElementById("submit");
            if (submit) {
                submit.disabled = false;
            }
            return true;
        }
    }
}

function chkCity() {
    let city = document.getElementById("city");
    let cityLength = city.value;
    let maxlength = 50;

    if (city) {
        if (city.value == "" || cityLength.length > maxlength) {
            let cityDiv = document.getElementById("cityDiv");
            if (cityDiv) {
                cityDiv.classList.add("has-error");
                cityDiv.classList.remove("has-success");
            }
            let cityErr = document.getElementById("cityErr");
            if (cityErr) {
                cityErr.classList.remove("hide");
                cityErr.classList.add("show");
            }
            let boxErr = document.getElementById("city");
            if (boxErr) {
                boxErr.classList.add("box-error");
                boxErr.classList.remove("box-success");
            }
            return false;
        } else if (cityLength.length <= maxlength) {
            let cityDiv = document.getElementById("cityDiv");
            if (cityDiv) {
                cityDiv.classList.remove("has-error");
                cityDiv.classList.add("has-success");
            }
            let cityErr = document.getElementById("cityErr");
            if (cityErr) {
                cityErr.classList.add("hide");
                cityErr.classList.remove("show");
            }
            let boxErr = document.getElementById("city");
            if (boxErr) {
                boxErr.classList.remove("box-error");
                boxErr.classList.add("box-success");
            }
            let submit = document.getElementById("submit");
            if (submit) {
                submit.disabled = false;
            }
            return true;
        }
    }
}

function formatZip(zip) {
    if(zip.value.length > 5) {
        var numbers = zip.value.replace(/\D/g, ''),
            char = {0:'',5:'-'};
        zip.value = '';
        for (var i = 0; i < numbers.length; i++) {
            zip.value += (char[i]||'') + numbers[i];
        }
    }

    let fiveDigit = zip.value.search(/^\d{5}$/);
    let nineDigit = zip.value.search(/^\d{5}-\d{4}$/);

    if (fiveDigit > -1 || nineDigit > -1) {
        let zipDiv = document.getElementById("zipDiv");
        if (zipDiv) {
            zipDiv.classList.remove("has-error");
            zipDiv.classList.add("has-success");
        }
        let zipErr = document.getElementById("zipErr");
        if (zipErr) {
            zipErr.classList.add("hide");
            zipErr.classList.remove("show");
        }
        let boxErr = document.getElementById("zip");
        if (boxErr) {
            boxErr.classList.remove("box-error");
            boxErr.classList.add("box-success");
        }
        let submit = document.getElementById("submit");
        if (submit) {
            submit.disabled = false;
        }
        return true;
    } else {
        let zipDiv = document.getElementById("zipDiv");
        if (zipDiv) {
            zipDiv.classList.add("has-error");
            zipDiv.classList.remove("has-success");
        }
        let zipErr = document.getElementById("zipErr");
        if (zipErr) {
            zipErr.classList.remove("hide");
            zipErr.classList.add("show");
        }
        let boxErr = document.getElementById("zip");
        if (boxErr) {
            boxErr.classList.add("box-error");
            boxErr.classList.remove("box-success");
        }
        return false;
    }
}

function formatPhone(phone) {
    if(phone.value.length <= 8) {
        var numbers = phone.value.replace(/\D/g, ''),
            char = {0:'',3:'-',7:'-'};
        phone.value = '';
        for (var i = 0; i < numbers.length; i++) {
            phone.value += (char[i]||'') + numbers[i];
        }
    } else {
        var numbers = phone.value.replace(/\D/g, ''),
            char = {0:'',3:'-',6:'-'};
        phone.value = '';
        for (var i = 0; i < numbers.length; i++) {
            phone.value += (char[i]||'') + numbers[i];
        }
    }

    let sevenDigit = phone.value.search(/^\d{3}-\d{4}$/);
    let tenDigit = phone.value.search(/^\d{3}-\d{3}-\d{4}$/);

    if (sevenDigit > -1 || tenDigit > -1) {
        let phoneDiv = document.getElementById("phoneDiv");
        if (phoneDiv) {
            phoneDiv.classList.remove("has-error");
            phoneDiv.classList.add("has-success");
        }
        let phoneErr = document.getElementById("phoneErr");
        if (phoneErr) {
            phoneErr.classList.add("hide");
            phoneErr.classList.remove("show");
        }
        let boxErr = document.getElementById("phone");
        if (boxErr) {
            boxErr.classList.remove("box-error");
            boxErr.classList.add("box-success");
        }
        let submit = document.getElementById("submit");
        if (submit) {
            submit.disabled = false;
        }
        return true;
    } else {
        let phoneDiv = document.getElementById("phoneDiv");
        if (phoneDiv) {
            phoneDiv.classList.add("has-error");
            phoneDiv.classList.remove("has-success");
        }
        let phoneErr = document.getElementById("phoneErr");
        if (phoneErr) {
            phoneErr.classList.remove("hide");
            phoneErr.classList.add("show");
        }
        let boxErr = document.getElementById("phone");
        if (boxErr) {
            boxErr.classList.add("box-error");
            boxErr.classList.remove("box-success");
        }
        return false;
    }

}

function chkEmail() {
    let email = document.getElementById("email");
    let userEmail = String(email.value).trim();
    let index = userEmail.search(/^\S+\@\S+\.\S+$/);

    if (index > -1) {
        let emailDiv = document.getElementById("emailDiv");
        if (emailDiv) {
            emailDiv.classList.remove("has-error");
            emailDiv.classList.add("has-success");
        }
        let emailErr = document.getElementById("emailErr");
        if (emailErr) {
            emailErr.classList.add("hide");
            emailErr.classList.remove("show");
        }
        let boxErr = document.getElementById("email");
        if (boxErr) {
            boxErr.classList.remove("box-error");
            boxErr.classList.add("box-success");
        }
        let submit = document.getElementById("submit");
        if (submit) {
            submit.disabled = false;
        }
        return true;
    } else {
        let emailDiv = document.getElementById("emailDiv");
        if (emailDiv) {
            emailDiv.classList.add("has-error");
            emailDiv.classList.remove("has-success");
        }
        let emailErr = document.getElementById("emailErr");
        if (emailErr) {
            emailErr.classList.remove("hide");
            emailErr.classList.add("show");
        }
        let boxErr = document.getElementById("email");
        if (boxErr) {
            boxErr.classList.add("box-error");
            boxErr.classList.remove("box-success");
        }
        return false;
    }
}

function chkGender() {
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let other = document.getElementById('other').checked;

    if (male == true || female == true || other == true) {
        let genderErr = document.getElementById("genderErr");
        if (genderErr) {
            genderErr.classList.add("hide");
            genderErr.classList.remove("show");
        }
        let submit = document.getElementById("submit");
        if (submit) {
            submit.disabled = false;
        }
        return true;
    } else {
        let genderErr = document.getElementById("genderErr");
        if (genderErr) {
            genderErr.classList.remove("hide");
            genderErr.classList.add("show");
        }
        return false;
    }
}

function chkMarital() {
    let single = document.getElementById('single').checked;
    let married = document.getElementById('married').checked;
    let divorced = document.getElementById('divorced').checked;
    let widowed = document.getElementById('widowed').checked;

    if (single == true || married == true || divorced == true || widowed == true) {
        let maritalErr = document.getElementById("maritalErr");
        if (maritalErr) {
            maritalErr.classList.add("hide");
            maritalErr.classList.remove("show");
        }
        let submit = document.getElementById("submit");
        if (submit) {
            submit.disabled = false;
        }
        return true;
    } else {
        let maritalErr = document.getElementById("maritalErr");
        if (maritalErr) {
            maritalErr.classList.remove("hide");
            maritalErr.classList.add("show");
        }
        return false;
    }
}

function fixButton() {
    let submit = document.getElementById("submit");
    if (submit) {
        submit.disabled = false;
    }
    return true;
}

function chkBirthday() {
    let date = document.getElementById("birthday");
    if (date) {
        if (date.value == "") {
            let birthdayErr = document.getElementById("birthdayErr");
            if (birthdayErr) {
                birthdayErr.classList.remove("hide");
                birthdayErr.classList.add("show");
            }
            return false;
        } else {
            let birthdayErr = document.getElementById("birthdayErr");
            if (birthdayErr) {
                birthdayErr.classList.add("hide");
                birthdayErr.classList.remove("show");
            }
            let submit = document.getElementById("submit");
            if (submit) {
                submit.disabled = false;
            }
            return true;
        }
    }
}
function chkSubmit() {
    let zipDiv = document.getElementById("zipDiv");
    let phoneDiv = document.getElementById("phoneDiv");
    if (chkUsername() == true) {
        if (chkPassword() == true) {
            if (chkRepeatPassword() == true) {
                if (chkFirstName() == true) {
                    if (chkLastName() == true) {
                        if (chkAddress1() == true) {
                            if (chkCity() == true) {
                                if (zipDiv.classList.contains("has-success")) {
                                    if (phoneDiv.classList.contains("has-success")) {
                                        if (chkEmail() == true) {
                                            if (chkGender() == true) {
                                                if (chkMarital() == true) {
                                                    if (chkBirthday() == true) {
                                                    let submit = document.getElementById("submit");
                                                    if (submit) {
                                                        submit.disabled = false;
                                                    }
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
    let submitErr = document.getElementById("submitErr");
    if (submitErr) {
        submitErr.classList.remove("hide");
        submitErr.classList.add("show");
    }
    let submit = document.getElementById("submit");
    if (submit) {
        submit.disabled = true;
    }
    return false;
}

function resetFields () {
    let userDiv = document.getElementById("userDiv");
    let userErr = document.getElementById("userErr");
    let userBox = document.getElementById("username");
    let passDiv = document.getElementById("passDiv");
    let passErr = document.getElementById("passErr");
    let passBox = document.getElementById("password");
    let verPassDiv = document.getElementById("verPassDiv");
    let verPassErr = document.getElementById("verPassErr");
    let verPassBox = document.getElementById("repeatPassword");
    let firstDiv = document.getElementById("firstDiv");
    let firstErr = document.getElementById("firstErr");
    let firstBox = document.getElementById("firstName");
    let lastDiv = document.getElementById("lastDiv");
    let lastErr = document.getElementById("lastErr");
    let lastBox = document.getElementById("lastName");
    let add1Div = document.getElementById("add1Div");
    let add1Err = document.getElementById("add1Err");
    let add1Box = document.getElementById("address1");
    let add2Div = document.getElementById("add2Div");
    let add2Err = document.getElementById("add2Err");
    let add2Box = document.getElementById("address2");
    let cityDiv = document.getElementById("cityDiv");
    let cityErr = document.getElementById("cityErr");
    let cityBox = document.getElementById("city");
    let zipDiv = document.getElementById("zipDiv");
    let zipErr = document.getElementById("zipErr");
    let zipBox = document.getElementById("zip");
    let phoneDiv = document.getElementById("phoneDiv");
    let phoneErr = document.getElementById("phoneErr");
    let phoneBox = document.getElementById("phone");
    let emailDiv = document.getElementById("emailDiv");
    let emailErr = document.getElementById("emailErr");
    let emailBox = document.getElementById("email");
    let genderErr = document.getElementById("genderErr");
    let maritalErr = document.getElementById("maritalErr");
    let birthdayErr = document.getElementById("birthdayErr");
    let submitErr = document.getElementById("submitErr");

    userDiv.classList.remove("has-error");
    userDiv.classList.remove("has-success");
    userBox.classList.remove("box-error");
    userBox.classList.remove("box-success");
    userErr.classList.remove("show");
    userErr.classList.add("hide");
    passDiv.classList.remove("has-error");
    passDiv.classList.remove("has-success");
    passBox.classList.remove("box-error");
    passBox.classList.remove("box-success");
    passErr.classList.remove("show");
    passErr.classList.add("hide");
    verPassDiv.classList.remove("has-error");
    verPassDiv.classList.remove("has-success");
    verPassBox.classList.remove("box-error");
    verPassBox.classList.remove("box-success");
    verPassErr.classList.remove("show");
    verPassErr.classList.add("hide");
    firstDiv.classList.remove("has-error");
    firstDiv.classList.remove("has-success");
    firstBox.classList.remove("box-error");
    firstBox.classList.remove("box-success");
    firstErr.classList.remove("show");
    firstErr.classList.add("hide");
    lastDiv.classList.remove("has-error");
    lastDiv.classList.remove("has-success");
    lastBox.classList.remove("box-error");
    lastBox.classList.remove("box-success");
    lastErr.classList.remove("show");
    lastErr.classList.add("hide");
    add1Div.classList.remove("has-error");
    add1Div.classList.remove("has-success");
    add1Box.classList.remove("box-error");
    add1Box.classList.remove("box-success");
    add1Err.classList.remove("show");
    add1Err.classList.add("hide");
    add2Div.classList.remove("has-error");
    add2Div.classList.remove("has-success");
    add2Box.classList.remove("box-error");
    add2Box.classList.remove("box-success");
    add2Err.classList.remove("show");
    add2Err.classList.add("hide");
    cityDiv.classList.remove("has-error");
    cityDiv.classList.remove("has-success");
    cityBox.classList.remove("box-error");
    cityBox.classList.remove("box-success");
    cityErr.classList.remove("show");
    cityErr.classList.add("hide");
    zipDiv.classList.remove("has-error");
    zipDiv.classList.remove("has-success");
    zipBox.classList.remove("box-error");
    zipBox.classList.remove("box-success");
    zipErr.classList.remove("show");
    zipErr.classList.add("hide");
    phoneDiv.classList.remove("has-error");
    phoneDiv.classList.remove("has-success");
    phoneBox.classList.remove("box-error");
    phoneBox.classList.remove("box-success");
    phoneErr.classList.remove("show");
    phoneErr.classList.add("hide");
    emailDiv.classList.remove("has-error");
    emailDiv.classList.remove("has-success");
    emailBox.classList.remove("box-error");
    emailBox.classList.remove("box-success");
    emailErr.classList.remove("show");
    emailErr.classList.add("hide");
    genderErr.classList.remove("show");
    genderErr.classList.add("hide");
    maritalErr.classList.remove("show");
    maritalErr.classList.add("hide");
    birthdayErr.classList.remove("show");
    birthdayErr.classList.add("hide");
    submitErr.classList.add("hide");
    submitErr.classList.remove("show");
}
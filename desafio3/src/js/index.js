const form  = document.forms["form-contato"];
const spans = form.getElementsByClassName('invalid-text');
const inputs = {
    name:form["name"],
    email:form["email"],
    telefone:form["telefone"],
    message:form["message"]
}
const inputHandler = function(e) {
    // console.log(e.target.value);
    let i = 0;
    for (const key in inputs) {
        if (inputs[key].value == "") {
            spans[i].style.display = "inline-block";
            inputs[key].style.border = "1px solid red";
            
        }else{
            spans[i].style.display = "none";
            inputs[key].style.border = "1px solid #19DE21";
        }
        i++;
    }
    return e.target.value;
}
const validateForm = function() {
    let i = 0;
    let is_empty = true;
    for (const key in inputs) {
        if (inputs[key].value == "") {
            spans[i].style.display = "inline-block";
            inputs[key].style.border = "1px solid red";
            is_empty = false;
        }else{
            spans[i].style.display = "none";
        }
        i++;
    }    
    return is_empty;
}
for (const key in inputs) {
    inputs[key].addEventListener("input",inputHandler);
}





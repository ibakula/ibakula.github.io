/* Subscription form-related code begin */

var subscription_form = document.getElementById("subscription_form");

if (subscription_form != null) {
    subscription_form.addEventListener("submit", function(e) { handleFormSubmit(e, subscription_form.id); });
}

/* Registration form-related code begin */
var register_form = document.getElementById("register_form");

if (register_form != null) {
    register_form.addEventListener("submit", function(e) { handleFormSubmit(e, register_form.id); });
}

function fuseChildrenValuesToArray(childrenElements) {
    var simplified_data = new Array();
    
    for (var i = 0; i < childrenElements.length; ++i) {
        if (childrenElements[i].children[1] != null) {
            simplified_data.push(register_form.children[i].children[1].value);
        }
    }
    
    return simplified_data;
}

function handleFormSubmit(e, formName) {
    e.preventDefault();
    var output = null;
    var output_str = null;
    var input = null;
    var output_div = document.createElement("div");
    
    switch(formName) {
        case "subscription_form":
            output_str = "subscription";
            output_div.id = output_str + "_output";
            output_div.className = "p-4 mt-3";
            subscription_form.parentElement.appendChild(output_div);
            input = document.getElementById("subscription_email");
            output = document.getElementById(output_str + "_output");
            break;
        case "register_form":
            output_str = "register";
            output_div.id = output_str + "_output";
            output_div.className = "p-4 mt-3";
            register_form.parentElement.appendChild(output_div);
            input = fuseChildrenValuesToArray(register_form.children);
            output = document.getElementById(output_str + "_output");
            break;
    }
    
    if (output != null) {
        if (input != null) {
            if (!Array.isArray(input)) {
                console.log(input.value);
                output.innerHTML = "<p class=\"lead text-center\">" + input.value + "</p>";
            }
            else {
                var merged = "<p class=\"lead text-center\">";
                input.forEach(function(currentValue) {
                    console.log(currentValue);
                    merged += currentValue + "<br>";
                });
                output.innerHTML += merged + "</p>";
            }
            output.style.backgroundColor = "#c2ffb2";
        }
        else {
            output.style.backgroundColor = "#ffc2b2";
            output.innerHTML = "<p>Error: Something seems to went wrong with the input.</p>"
        }
    }
}
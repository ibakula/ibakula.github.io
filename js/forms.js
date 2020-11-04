var subscription_form = document.getElementById("subscription_form");

if (subscription_form != null) {
    subscription_form.addEventListener("submit", function(e) { handleFormSubmit(e, subscription_form.id) });
}

function handleFormSubmit(e, formName) {
    e.preventDefault();
    var output = null;
    var output_str = null;
    var input = null;
    
    switch(formName) {
        case "subscription_form":
        output_str = "subscription";
        output_div = document.createElement("div");
        output_div.id = output_str + "_output";
        output_div.className = "p-4 mt-3";
        subscription_form.parentElement.appendChild(output_div);
        input = document.getElementById("subscription_email");
        output = document.getElementById(output_str + "_output");
        break;
    }
    
    if (output != null) {
        if (input != null) {
            console.log(input.value);
            output.innerHTML = "<p class=\"lead text-center\">" + input.value + "</p>";
            output.style.backgroundColor = "#c2ffb2";
        }
        else {
            output.style.backgroundColor = "#ffc2b2";
            output.innerHTML = "<p>Error: Something seems to went wrong with the input.</p>"
        }
    }
}
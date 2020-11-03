var subscription_form = document.getElementById("subscription_form");

if (subscription_form != null) {
    subscription_form.addEventListener("submit", handleSubscriptionFormSubmit);
}

function handleSubscriptionFormSubmit(e) {
    e.preventDefault();
    var subscription_output = document.getElementById("subscription_output");
    
    if (subscription_output != null) {
        var subscription_email_input = document.getElementById("subscription_email");
        if (subscription_email_input != null)
        {
            console.log(subscription_email_input.value);
            subscription_output.innerHTML = "<p class=\"lead text-center\">" + subscription_email_input.value + "</p>";
            subscription_output.style.backgroundColor = "#c2ffb2";
            subscription_output.className = subscription_output.classList + " " + "p-4";
        }
        else subscription_output.innerHTML = "<p>Error: Something seems to went wrong with the input.</p>"
    }
}
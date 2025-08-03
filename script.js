document.getElementById("suggestionForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);
    let popupMessage = document.querySelector("#popup h3");

    try {
        let response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // ✅ Show your custom popup message (No Formspree redirect)
            popupMessage.textContent = "✅ Thanks for your suggestion!";
            showPopup(true);
            form.reset();
        } else {
            popupMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
            showPopup(true);
        }
    } catch (error) {
        popupMessage.textContent = "⚠️ Network error. Please try again.";
        showPopup(true);
        console.error("Form submission error:", error);
    }
});

function showPopup(bool) {
    document.getElementById("popup").style.display = bool ? "flex" : "none";
}

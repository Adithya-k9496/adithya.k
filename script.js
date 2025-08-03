document.getElementById("suggestionForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    try {
        let response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            showPopup(true);

            form.reset();
        } else {
            alert("❌ Oops! Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("⚠️ Network error. Please try again.");
        console.error("Form submission error:", error);
    }
});

function showPopup(bool) {
    document.getElementById("popup").style.display = bool ? "flex" : "none";
}

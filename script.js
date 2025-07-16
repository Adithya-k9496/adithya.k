function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  let name = document.getElementById("recommender_name");

  if (recommendation.value.trim() !== "") {
    showPopup(true);

    let element = document.createElement("div");
    element.setAttribute("class", "recommendation");

    let nameHTML = name.value.trim() !== "" ? `<br><br><strong>– ${name.value.trim()}</strong>` : "";
    element.innerHTML = `<span>&#8220;</span>${recommendation.value}${nameHTML}<span>&#8221;</span>`;

    document.getElementById("all_recommendations").appendChild(element);

    recommendation.value = "";
    name.value = "";
  }
}

function showPopup(bool) {
  document.getElementById("popup").style.display = bool ? "flex" : "none";
}

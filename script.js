function appendCategory(category,score,icon) {
    return (`<section class="stat ${category.toLowerCase()}">
        <span class="group">
        <img src=${icon} alt ="${category} Icon" />
        ${category}</span>
        <span class="group">
        <span class="score">${score}</span>
        <span class="score-max">/ 100</span>
        </span></section>`)
}

$.getJSON("data.json", (jsonData) => {
    
    for (let i = 0; i < jsonData.length; i++) {

        let category = jsonData[i].category;
        let score = jsonData[i].score;
        let icon = jsonData[i].icon;

        $(".categories").append(appendCategory(category,score,icon));
    }

})


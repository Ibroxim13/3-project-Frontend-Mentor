const categoryIcon = document.querySelector(".category-icon"),
    categoryName = document.querySelector(".category-name"),
    score = document.querySelector(".score"),
    scoreList = document.querySelector(".score-list");

const data = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./images/icon-visual.svg"
    }
]


window.addEventListener("DOMContentLoaded", () => {
    data.forEach(list => {
        scoreList.innerHTML += `
        <li>
        <div>
            <img class="category-icon" src=${list.icon} alt=${list.category}>
            <span class="category-name">${list.category}</span>
        </div>
        <div>
            <span class="score">${list.score}</span>
            <span> / 100</span>
        </div>
        </li>
        `
    })
})
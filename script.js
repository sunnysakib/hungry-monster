
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

// Event lisenter
searchBtn.addEventListener('click', searchMeal);


// Function
function searchMeal() {
    let searchInputText = searchInput.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
    .then(res => res.json())
    .then(data => displayMeals(data))

    const displayMeals = meals => {
        const mealsName = meals.meals;
        const mealsDiv = document.getElementById('mealsItem');
        
        for (let i = 0; i < mealsName.length; i++) {
            const meal = mealsName[i];
            const mealDiv = document.createElement('div');
            // const mealButton = document.createElement('button');
            // mealButton.className = 'mealLink';
            mealDiv.className = 'meal';
            const mealInfo = `
               
                <div class = "meal-img">
                    <img src = "${meal.strMealThumb}">   
                </div>
                <div class = "meal-name">
                    <h3>${meal.strMeal}</h3>
                </div>        
                `; 
                mealDiv.innerHTML = mealInfo;
                // mealButton.appendChild(mealDiv);
                // mealsDiv.appendChild(mealButton);
                mealsDiv.appendChild(mealDiv);   
           }
        }
               
    }

    


// {/* <div class = "meal-item" data-id = "${meal.idMeal}">  */}
// const displayMeals = mealsItem => {
//     const mealsDiv = document.getElementById('mealsItem');
//     mealsItem.forEach(meal => {
//         const mealDiv = document.createElement('div');
//         const mealInfo = `
//         <h3>${meal.strMeal}</h3>
        
//         `;
//         mealDiv.innerHTML = mealInfo;
//         mealsDiv.appendChild(mealDiv);
//     });
// }
    

   
export  function setSearchedMeals(state, meals){
    state.searchedMeals = meals || []
}
export  function setMealsByLetter(state, meals){
    state.mealsByLetter = meals || []
}
export  function setMealsByIngredints(state, meals){
    state.mealsByIngredint = meals || []
}
<template>

 
  <div v-if="meals.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-4 sm:p-6 md:p-8">
    <MealItem
      v-for="meal in meals"
      :key="meal.idMeal"
      :meal="meal"
    />
  </div>


  <div v-else class="flex flex-col items-center justify-center mt-16 sm:mt-20 space-y-4 px-4 sm:px-0">

    
    <span class="text-5xl sm:text-6xl animate-bounce">🍽️</span>

    
    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-purple-700 text-center">
      No meals found
    </h2>

    
    <p class="text-sm sm:text-base md:text-lg text-gray-500 text-center max-w-sm">
      Sorry, we couldn't find any meals matching your search.
      Try another ingredient or letter to discover delicious meals!
    </p>

  </div>

</template>

<script setup>
import MealItem from "./MealItem.vue";

defineProps({
  meals: {
    type: Array,
    required: true
  }
});
</script>
<template>
  <div class="px-4 sm:px-8 py-6 max-w-4xl mx-auto">

  
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-purple-700 text-center">
      Ingredients
    </h1>

    
    <div class="pb-0 flex justify-center">
      <div class="w-full max-w-xl relative">
        <input
          type="text"
          v-model="keyword"
          placeholder="Search for Ingredients..."
          class="w-full rounded-xl border border-gray-300 py-2 sm:py-3 px-8 sm:px-10 mb-6 text-sm sm:text-base
                 focus:outline-none focus:ring-2 focus:ring-purple-600 
                 focus:border-purple-600 shadow-sm transition"
        />

        <span class="absolute left-2 sm:left-3 top-2 sm:top-3 text-gray-400 text-sm sm:text-base">
          🔍
        </span>
      </div>
    </div>

   
    <div v-if="computedIngredients.length">
      <router-link
        v-for="ingredient in computedIngredients"
        :key="ingredient.idIngredient"
        :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
        class="bg-purple-100 sm:bg-white block rounded-xl p-3 sm:p-4 mb-4 shadow border border-transparent
               hover:border-purple-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2"
      >
        
        <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-2">
          {{ ingredient.strIngredient }}
        </h3>

       
        <p class="text-sm sm:text-base text-gray-600 line-clamp-4">
          {{ ingredient.strDescription }}
        </p>
      </router-link>
    </div>

  
    <div v-else class="flex flex-col items-center mt-12 sm:mt-16 space-y-4 px-4 sm:px-0">
      <span class="text-5xl sm:text-6xl animate-bounce">🥕</span>

      <h2 class="text-xl sm:text-2xl font-bold text-purple-700 text-center">
        No ingredients found
      </h2>

      <p class="text-sm sm:text-base text-gray-500 text-center max-w-sm">
        Sorry, we couldn't find any ingredients with this name. 
        Try searching for another ingredient to discover delicious meals!
      </p>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref("");
const ingredients = ref([]);


const fetchIngredients = async () => {
  const { data } = await axiosClient.get("list.php?i=list");
  ingredients.value = data.meals || [];
};


const computedIngredients = computed(() => {
  if (!keyword.value) return ingredients.value;

  return ingredients.value.filter((ingredient) =>
    ingredient.strIngredient?.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  fetchIngredients();
});
</script>
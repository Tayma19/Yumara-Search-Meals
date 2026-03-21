<template>
  <div
    class="bg-purple-100 border border-transparent rounded-xl transition-all transform
           hover:scale-105 hover:shadow-2xl hover:border-purple-500 duration-300 hover:border-2
           md:bg-white md:hover:scale-105 md:hover:shadow-2xl md:hover:border-purple-500">
    
    <router-link 
      :to="{name: 'mealDetails', params:{id: meal.idMeal}}">
      <img 
        :src="meal.strMealThumb" 
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      >
    </router-link>

    <div class="p-3">
      <h3 class="font-bold text-lg mb-2 text-black-600">{{ meal.strMeal }}</h3>
      <p class="mb-4 text-gray-600 text-sm line-clamp-3" >
       {{ meal.strInstructions }}
      </p>

      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube"></YouTubeButton>
      </div>
    </div>

  </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>
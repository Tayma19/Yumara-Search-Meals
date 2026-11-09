<template>
  <div class="max-w-[800px] mx-auto p-4 sm:p-6 md:p-8">

    
    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
      {{ meal.strMeal }}
    </h1>

    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="max-w-full rounded-xl mb-5"
    >

    
    <div class="grid grid-cols-1 sm:grid-cols-3 text-sm sm:text-base md:text-lg py-2 gap-3">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory || 'N/A' }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea || 'N/A' }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ meal.strTags || 'None' }}
      </div>
    </div>

    
    <div class="my-3 text-sm sm:text-base text-gray-700 leading-relaxed">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-4">

   
      <div>
        <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-purple-700">
          Ingredients
        </h2>

        <ul class="list-disc list-inside text-sm sm:text-base">
          <template v-for="ind in 20" :key="ind">
            <li v-if="meal[`strIngredient${ind}`] && meal[`strIngredient${ind}`].trim() !== ''">
              {{ meal[`strIngredient${ind}`] }}
            </li>
          </template>

          <li v-if="!hasIngredients">No ingredients available.</li>
        </ul>
      </div>

     
      <div>
        <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-purple-700">
          Measures
        </h2>

        <ul class="list-disc list-inside text-sm sm:text-base">
          <template v-for="ind in 20" :key="ind">
            <li v-if="meal[`strMeasure${ind}`] && meal[`strMeasure${ind}`].trim() !== ''">
              {{ meal[`strMeasure${ind}`] }}
            </li>
          </template>

          <li v-if="!hasMeasures">No measures available.</li>
        </ul>
      </div>

    </div>

   
    <div class="mt-6 flex flex-wrap items-center gap-3">
      
    
      <YouTubeButton
        v-if="meal.strYoutube"
        :href="meal.strYoutube"
        class="text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow hover:scale-105 transition-transform"
      >
        YouTube
      </YouTubeButton>

      
      <a
        v-if="meal.strSource"
        :href="meal.strSource"
        target="_blank"
        class="px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-lg border-2 border-purple-500 text-purple-700
               hover:bg-purple-100 hover:scale-105 transition-all shadow"
      >
        View Original Source
      </a>

    </div>

  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
import YouTubeButton from '../components/YouTubeButton.vue'

const meal = ref({})
const route = useRoute()

const hasIngredients = computed(() => {
  for (let i = 1; i <= 20; i++) {
    if (meal.value[`strIngredient${i}`]?.trim()) return true
  }
  return false
})

const hasMeasures = computed(() => {
  for (let i = 1; i <= 20; i++) {
    if (meal.value[`strMeasure${i}`]?.trim()) return true
  }
  return false
})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals?.[0] || {}
    })
})
</script>
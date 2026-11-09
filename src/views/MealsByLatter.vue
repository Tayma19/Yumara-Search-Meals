<template>
  <div>

    
    <div class="flex justify-center gap-2 sm:gap-3 mt-4 flex-wrap">
      <button
        v-for="letter in letters"
        :key="letter"
        @click="changeLetter(letter)"
        :class="[
          'px-2 sm:px-3 py-1 sm:py-2 rounded-md font-bold text-sm sm:text-base transition-all duration-200',
          selectedLetter === letter
            ? 'bg-purple-700 text-white scale-110'
            : 'text-gray-700 hover:text-purple-700 hover:scale-110'
        ]"
      >
        {{ letter }}
      </button>
    </div>

  
    <Meals v-if="meals.length" :meals="meals"/>

    
    <div v-else class="flex flex-col items-center mt-12 sm:mt-16 space-y-4 px-4 sm:px-0">
      <span class="text-5xl sm:text-6xl animate-bounce">🍽️</span>
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-purple-700 text-center">
        No meals found
      </h2>
      <p class="text-sm sm:text-base md:text-lg text-gray-500 text-center max-w-sm">
        Sorry, there are no meals for this letter. Try another letter above to discover delicious meals!
      </p>
    </div>

  </div>
</template>

<script setup>
import { computed, onMounted, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const router = useRouter();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const selectedLetter = ref(route.params.letter || 'A');

const meals = computed(() => store.state.mealsByLetter || []);

const changeLetter = (letter) => {
  selectedLetter.value = letter;
  router.push({ name: 'byLetter', params: { letter } });
};

watch(
  () => route.params.letter,
  (newLetter) => {
    if (newLetter) {
      selectedLetter.value = newLetter;
      store.dispatch('searchMealsByLetter', newLetter);
    }
  },
  { immediate: true }
);

onMounted(() => {
  if (selectedLetter.value) {
    store.dispatch('searchMealsByLetter', selectedLetter.value);
  }
});
</script>
<template>
  <div class="p-4 sm:p-8 pb-0 flex justify-center">
    <div class="w-full max-w-xl relative">

      
      <input
        type="text"
        v-model="keyword"
        placeholder="Search for meals..."
        class="w-full border border-gray-300 rounded-xl py-2 sm:py-3 pl-8 sm:pl-10 pr-4 text-sm sm:text-base
               focus:outline-none focus:ring-2 focus:ring-purple-600
               focus:border-purple-600 transition shadow-sm"
        @input="searchMeals"
      />

   
      <span class="absolute left-2 sm:left-3 top-2 sm:top-3 text-gray-400 text-sm sm:text-base">
        🔍
      </span>

    </div>
  </div>


  <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value);
  } else {
    store.commit('setSearchedMeals', []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
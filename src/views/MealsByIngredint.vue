<template>
  <Meals :meals="meals"/>
</template>



<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';


const route = useRoute();
const meals  = computed(() => store.state.mealsByIngredint)

onMounted(() =>
{

  store.dispatch('searchMealsByIngredint', route.params.ingredient)
}
)
</script>
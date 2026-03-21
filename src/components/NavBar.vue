<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/t1.png'

const showSidebar = ref(false)
const route = useRoute()

// دالة للتحقق إذا كانت الصفحة الحالية هي الصفحة المختارة
const isActivePage = (pageName) => route.name === pageName
</script>

<template>
  <!-- Header -->
  <header class="bg-white shadow-md h-16 flex justify-between items-center px-4 md:px-6 sticky top-0 z-50">
    <!-- Logo and Site Name -->
    <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
      <img 
        :src="logo" 
        alt="MyMeals Logo" 
        class="h-8 sm:h-10 md:h-12 w-auto object-contain"
      />
      <span class="text-sm sm:text-base md:text-2xl font-bold text-purple-700">Yumara</span>
    </router-link>

    <!-- زر الهامبرغر للشاشات الصغيرة -->
    <button class="md:hidden" @click="showSidebar = true">
      <!-- أيقونة الهامبرغر -->
      <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <!-- روابط التنقل تظهر فقط على الشاشات الكبيرة -->
    <nav class="hidden md:flex items-center gap-4 ml-auto mt-2 md:mt-0">
      <router-link 
        :to="{name: 'byName'}"
        :class="['px-2 py-1 md:px-4 md:py-2 rounded-lg transition', isActivePage('byName') ? 'bg-purple-200 text-purple-900' : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700']"
      >
        Search Meals
      </router-link>
      <router-link 
        :to="{name: 'byLetter'}"
        :class="['px-2 py-1 md:px-4 md:py-2 rounded-lg transition', isActivePage('byLetter') ? 'bg-purple-200 text-purple-900' : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700']"
      >
        Meals By Letter
      </router-link>
      <router-link 
        :to="{name: 'ingredients'}"
        :class="['px-2 py-1 md:px-4 md:py-2 rounded-lg transition', isActivePage('ingredients') ? 'bg-purple-200 text-purple-900' : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700']"
      >
        Meals By Ingredients
      </router-link>
    </nav>
  </header>

  <!-- النافذة الجانبية بدون تغطية الصفحة -->
  <div v-if="showSidebar" class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50">
    <!-- زر الإغلاق -->
    <div class="flex justify-between items-center p-4 border-b">
      <span class="font-bold text-lg"></span>
      <button @click="showSidebar = false" class="text-gray-600  hover:text-gray-800">&times;</button>
    </div>
    <!-- روابط النافذة الجانبية -->
    <div class="p-4">
      <router-link 
        :to="{name: 'byName'}" 
        class="block mb-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-100"
        @click="showSidebar = false"
        :class="isActivePage('byName') ? 'bg-purple-200 text-purple-900' : ''"
      >
        Search Meals
      </router-link>
      <router-link 
        :to="{name: 'byLetter'}" 
        class="block mb-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-100"
        @click="showSidebar = false"
        :class="isActivePage('byLetter') ? 'bg-purple-200 text-purple-900' : ''"
      >
        Meals By Letter
      </router-link>
      <router-link 
        :to="{name: 'ingredients'}" 
        class="block mb-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-100"
        @click="showSidebar = false"
        :class="isActivePage('ingredients') ? 'bg-purple-200 text-purple-900' : ''"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </div>
</template>
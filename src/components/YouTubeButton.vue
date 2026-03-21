<template>
  <a
    :href="href"
    target="_blank"
    class="px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base rounded border-2 text-white border-purple-700 bg-purple-500 hover:bg-purple-700 transition-colors"
  >
    <slot>
      YouTube
    </slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>
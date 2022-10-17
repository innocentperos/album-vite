<template>
  <img v-if="ready" :src="src" :alt="props.alt">
  <div ref="imageRef" :src="src" v-else class="h-full w-full bg-slate-300 animate-pulse loading-image">
  </div>
</template>

<script setup>
  import { ref, computed, watch, onMounted } from "vue"

  const props = defineProps({
    src: String,
    alt: String,
  })
  const ready = ref(false)
  const imageRef = ref()

  const src = computed(() => props.src)

  onMounted(function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          loadImage()
          observer.unobserve(imageRef.value)
        }
      })
    })
    
    observer.observe(imageRef.value)
  })

  function loadImage() {
    let image = new Image()
    image.onload = function(t) {
      ready.value = true
    }
    image.src = src.value;
  }

  watch(src, function() {
    let image = new Image()
    image.onload = function(t) {
      ready.value = true
    }
    image.src = src.value;
  })
</script>
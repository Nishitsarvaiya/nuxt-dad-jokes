<template>
  <div class="bg-white rounded-lg p-8">
    <NuxtLink :to="'/jokes/' + joke.id">
      <p class="text-2xl text-black">{{ joke.joke }}</p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Joke',
  props: {
    joke: {
      id: String,
      joke: String,
    },
  },
};
</script>

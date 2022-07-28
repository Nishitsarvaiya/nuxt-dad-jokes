<template>
  <div class="page bg-green min-h-screen">
    <div class="container mx-auto h-screen">
      <div class="flex flex-col items-center justify-center h-full">
        <div class="bg-white px-10 py-16 rounded-md max-w-xl relative">
          <div class="flex flex-col gap-10">
            <div class="flex items-center gap-10">
              <button @click="() => $router.back()" class="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
                stroke="#272D2D"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <!-- <h2 class="text-6xl leading-none font-bold text-black mt-2">Dad Joke</h2> -->
            </div>
            <p class="text-3xl text-black">
              {{ joke.joke }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JokePage',
  async asyncData({ $axios, params }) {
    const joke = await $axios.$get(`j/${params.id}`);
    return { joke };
  },
};
</script>

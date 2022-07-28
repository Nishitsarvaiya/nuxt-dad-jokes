<template>
  <div class="page bg-white">
    <main class="h-screen">
      <div class="container mx-auto h-full">
        <div class="w-full h-full flex flex-col items-center justify-center">
            <h1 class="text-5xl font-bold mb-10 text-center">Welcome to the Best Corny Dad Jokes on the internet!</h1>
            <NuxtLink to="/jokes" class="text-black bg-green px-8 py-3 tracking-wide font-medium ">Vamos</NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // head() {
  //   return {
  //     title: 'Nishit Sarvaiya | Dad Jokes',
  //   };
  // },
};
</script>

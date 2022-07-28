<template>
  <div class="spinner" v-if="$fetchState.pending"></div>
  <div v-else>
    <div class="grid grid-cols-3 gap-6 mb-10">
      <Joke v-for="joke in jokes" :key="joke.id" :joke="joke" />
    </div>
    <Pagination
      :total-pages="totalPages"
      :total="totalJokes"
      :per-page="perPage"
      :current-page="currentPage"
      @goToPage="onPageChange"
    />
  </div>
</template>

<script>
export default {
  name: 'JokesList',
  // async asyncData({ $axios }) {
  //   const res = await $axios.$get('search?page=1&limit=9');
  //   const jokes = res.results;
  //   return {
  //     jokes,
  //   };
  // },
  data() {
    return {
      currentPage: 1,
      jokes: [],
      totalPages: null,
      totalJokes: null,
      perPage: 9,
    };
  },
  fetchOnServer: true,
  async fetch() {
    const res = await this.$axios.$get(
      `search?page=${this.currentPage}&limit=9`
    );
    this.jokes = res.results;
    this.currentPage = res.current_page;
    this.totalPages = res.total_pages;
    this.totalJokes = res.total_jokes;
  },
  watch: {
    currentPage() {
      this.$fetch();
    }
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style>
.spinner {
  width: 40px;
  height: 40px;
  background-color: white;
  margin: 100px auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>

<template>
  <div class="bg-white rounded-md p-4">
    <div class="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul class="flex list-style-none">
          <li>
            <button
              @click="goToFirstPage"
              class="text-lg text-black font-medium relative block p-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-green focus:shadow-none disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              :class="{ disabled: currentPage === 1 }"
              :disabled="currentPage === 1"
            >
              First
            </button>
          </li>
          <li>
            <button
              @click="goToPrevPage"
              class="text-lg text-black font-medium relative block p-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-green focus:shadow-none disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              :class="{ disabled: currentPage === 1 }"
              :disabled="currentPage === 1"
            >
              Previous
            </button>
          </li>
          <li v-for="page in pages" :key="page">
            <button
              @click="goToPage(page)"
              class="text-lg text-black font-medium relative block p-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-green focus:shadow-none"
              :class="{ 'bg-green': page === currentPage }"
            >
              {{ page }}
            </button>
          </li>
          <li>
            <button
              @click="goToNextPage"
              class="text-lg text-black font-medium relative block p-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-green focus:shadow-none disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              :class="{ disabled: currentPage === totalPages }"
              :disabled="currentPage === totalPages"
            >
              Next
            </button>
          </li>
          <li>
            <button
              @click="goToLastPage"
              class="text-lg text-black font-medium relative block p-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-green focus:shadow-none disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              :class="{ disabled: currentPage === totalPages }"
              :disabled="currentPage === totalPages"
            >
              Last
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1 || this.currentPage === 2) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 2;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push(i);
      }
      return range;
    },
  },
  methods: {
    goToFirstPage() {
      this.$emit('goToPage', 1);
    },
    goToPrevPage() {
      this.$emit('goToPage', this.currentPage - 1);
    },
    goToPage(page) {
      this.$emit('goToPage', page);
    },
    goToNextPage() {
      this.$emit('goToPage', this.currentPage + 1);
    },
    goToLastPage() {
      this.$emit('goToPage', this.totalPages);
    },
  },
};
</script>

<style lang="scss" scoped></style>

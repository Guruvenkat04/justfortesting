<template>
  <div>
    <div v-if="top" class="controls-top">
      <a class="btn-floating" @click.prevent="prev"><i class="fa fa-chevron-left"></i></a>
      <a class="btn-floating" @click.prevent="next"><i class="fa fa-chevron-right"></i></a>
    </div>
    <div v-else>
      <a class="carousel-control-prev" @click.prevent="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Prev</span>
      </a>
      <a class="carousel-control-next" @click.prevent="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    top: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    prev() {
      this.$emit('changeSlide', {'slideIndex': 'prev'});
    },
    next() {
      this.$emit('changeSlide', {'slideIndex': 'next'});
    }
  }
};
</script>

<style scoped>
</style>

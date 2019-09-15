<template>
  <div class="movie">
    <div class="movie-col-left">
      <img :src="movie.Poster" />
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <h2>{{ movie.Title }}</h2>
        <span class="movie-rating">{{ movie.Rated }}</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "movieItemComp",
  props: ["movie"]
};
</script>

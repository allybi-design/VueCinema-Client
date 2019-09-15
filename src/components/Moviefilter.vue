<template>
  <div id="movie-filter">
    <h2>Filter</h2>
    <div class="filter-group">
      <h3>By Time:</h3>
      <Filters
        v-for="(time, index) in times"
        :key="index"
        :title="time"
        category="time"
      />
      <h3>By Genre:</h3>
      <Filters
        v-for="(title, index) in generes"
        :key="index"
        :title="title"
        category="genre"
      />
    </div>
  </div>
</template>

<script>
import Filters from "./Filters";
import GeneresData from "../data/genres.js";
import TimeData from "../data/times.js";
export default {
  name: "MovieFilterComp",
  components: { Filters },
  data() {
    return {
      generes: Object.freeze(GeneresData),
      times: Object.freeze(TimeData)
    };
  }
};
</script>

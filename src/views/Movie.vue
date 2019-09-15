<template>
  <div id="MovieView" v-if="movie">
    <Movieitem :movie="movie.movie">
      <h3>
        <b>{{ movie.movie.Genre }}</b>
      </h3>
      <p>{{ movie.movie.Plot }}</p>
      <table>
        <tr>
          <td>Release date:</td>
          <td>{{ movie.movie.Released }}</td>
        </tr>
        <tr>
          <td>Running Time:</td>
          <td>{{ movie.movie.Runtime }}</td>
        </tr>
        <tr>
          <td>Director:</td>
          <td>{{ movie.movie.Director }}</td>
        </tr>
        <tr>
          <td>Cast:</td>
          <td>{{ movie.movie.Actors }}</td>
        </tr>
      </table>
    </Movieitem>
    <router-link to="/" class="back">
      <span>Back to Search page</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Movieitem from "@/components/Movieitem";

export default {
  name: "MovieView",
  components: { Movieitem },
  computed: {
    ...mapState(["movies"]),
    movie() {
      let movie = this.movies.find(movie => movie.id === this.$route.params.id);
      return movie ? movie : null;
    }
  }
};
</script>

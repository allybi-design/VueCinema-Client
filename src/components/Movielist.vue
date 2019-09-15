<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <Movieitem
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie.movie"
        @click.native="clicked(movie.id)"
      >
        {{ movie.sessions.seats }}
        <div class="movie-sessions">
          <div
            v-for="session in filteredSessions(movie.sessions)"
            :key="session.id"
            v-seats="session.seats"
            class="session-time-wrapper tooltip-wrapper"
          >
            <div class="session-time">{{ formatTime(session.time) }}</div>
          </div>
        </div>
      </Movieitem>
    </div>
    <div class="no-results" v-else-if="movies.length">{{ noResults }}</div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TimesArray from "@/data/times";
import GenresArray from "@/data/genres";
import Movieitem from "@/components/Movieitem";

export default {
  name: "MovieListComp",
  components: { Movieitem },
  data() {
    return {
      GenresArray,
      TimesArray
    };
  },
  methods: {
    clicked(id) {
      this.$router.push({ name: "movie", params: { id } });
    },
    formatTime(time) {
      return this.$moment(time).format("h:mm A");
    },
    filteredSessions(sessions) {
      return sessions.filter(this.sessionPassesTimeFilter);
    },
    sessionPassesTimeFilter(session) {
      if (!this.day.isSame(this.$moment(session.time), "day")) {
        return false;
      } else if (this.time.length === 0 || this.time.length === 2) {
        return true;
      } else if (this.time[0] === TimesArray.AFTER_6PM) {
        return this.$moment(session.time).hour() >= 18;
      } else {
        return this.$moment(session.time).hour() < 18;
      }
    }
  },

  filters: {
    // formatTime: time => this.$moment(time).format("h:mm A") // ??? why NOT work !!!
  },
  computed: {
    ...mapState(["movies", "time", "genre", "day"]),
    filteredMovies() {
      return this.movies
        .filter(movie => {
          if (!this.genre.length) {
            return true;
          } else {
            let movieGenres = movie.movie.Genre.split(", ");
            let matched = true;
            this.genre.forEach(genre => {
              if (movieGenres.indexOf(genre) === -1) {
                matched = false;
              }
            });
            return matched;
          }
        })
        .filter(movie =>
          movie.sessions.find(session => {
            if (!this.day.isSame(this.$moment(session.time), "day")) {
              return false;
            } else if (this.time.length === 0 || this.time.length === 2) {
              return true;
            } else if (this.time[0] === TimesArray.AFTER_6PM) {
              return this.$moment(session.time).hour() >= 18;
            } else {
              return this.$moment(session.time).hour() < 18;
            }
          })
        );
    },
    noResults() {
      let times = this.time.join(", ");
      let genres = this.genre.join(", ");
      return `No results for ${times}${
        times.length && genres.length ? ", " : ""
      }${genres}.`;
    }
  }
};
</script>

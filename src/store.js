import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000
});

// var movies = require("@/data/dummyData.json");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    day: null,
    genre: [],
    time: [],
    filters: [],
    movies: []
  },
  mutations: {
    INIT_DATA(state, payload) {
      state.movies = payload;
    },
    SET_DAY(state, payload) {
      state.day = payload;
    },
    ADD_GENRE(state, payload) {
      state.genre.push(payload);
    },
    REMOVE_GENRE(state, payload) {
      state.genre.splice(state.genre.indexOf(payload), 1);
    },
    ADD_TIME(state, payload) {
      state.time.push(payload);
    },
    REMOVE_TIME(state, payload) {
      state.time.splice(state.time.indexOf(payload), 1);
    }
  },
  actions: {
    initApp({ commit }) {
      http.get("/api").then(res => {
        commit("INIT_DATA", res.data);
      });
    },
    setDay({ commit }, payload) {
      commit("SET_DAY", payload);
    },
    addGenre({ commit }, payload) {
      commit("ADD_GENRE", payload);
    },
    removeGenre({ commit }, payload) {
      commit("REMOVE_GENRE", payload);
    },
    addTime({ commit }, payload) {
      commit("ADD_TIME", payload);
    },
    removeTime({ commit }, payload) {
      commit("REMOVE_TIME", payload);
    }
  }
});

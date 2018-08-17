<template>
  <div class="movie-wrapper" :style="styles">
    <div class="movie-info">
       <h1>{{ movie.title }}</h1>
        <h3>Release Date : {{movie.release_date}}</h3>
        <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";
/* eslint-disable */
export default {
  name: "MovieDetails",
  data() {
    return {
      movie: {}
    };
  },
  computed: {
    styles() {
      return {
        background: `url(${BACKDROP_PATH}/${
          this.movie.backdrop_path
        }) no-repeat`
      };
    }
  },
  methods: {},
  async created() {
    try {
      const { id } = this.$route.params;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f6f9d4166b7005ac1bb560f106484723`
      );
      const movie = await response.json();
      this.movie = movie;
    } catch (err) {
      console.log("Some error occured while talking to the api", err);
    }
  }
};
</script>

<style scoped>
.movie-wrapper {
  position: relative;
  padding-top: 50vh;
  background-size: cover;
}
h1,
h3 {
  font-family: "Courier New", Courier, monospace;
}
.movie-info{
  background:white;
  color: #222;
  padding: 2rem 10%;
}
</style>
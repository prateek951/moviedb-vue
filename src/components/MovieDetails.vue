<template>
  <div>
    <h1>Movie Details</h1>
    {{movie}}
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  data() {
    return {
      movie: {}
    };
  },
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
</style>
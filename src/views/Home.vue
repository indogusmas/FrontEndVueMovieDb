<template>
  <div class="home">
    <div class="row">
      <div class="card ml-1 mr-2 mb-4" v-for="movie in movies" :key="movie.id" style="width: 12rem;">
        <img class="card-img-top" :src="imageURL+movie.poster_path" alt="Card image cap" />
        <div class="card-body" style="text-aling:justtify">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p
            class="max-lines"
          >{{ movie.overview }}</p>
          <a class="btn btn-primary" v-on:click="gotoDetail(movie.id)">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      movies: [],
      url_popular : process.env.VUE_APP_POPULER,
      imageURL: "https://image.tmdb.org/t/p/w1280",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get(
          this.url_popular
        )
        .then((res) => {
          this.movies = res.data.results;
          console.log(this.movies);
        });
    },
    gotoDetail(idMovie){
      this.$router.push({name:'detailMovie',params:{idMovie:idMovie}})
    }
  },
};
</script>
<style scoped>
.image-date-view-wrapper {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.max-lines {
  display: block;/* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}
</style>>


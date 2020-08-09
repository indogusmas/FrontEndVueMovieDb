<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card m-2" v-for="movie in movies" :key="movie.id">
        <img :src="imageURL+movie.poster_path" alt />
        <div class="con-text">
          <p>
            <button>See More</button>
          </p>
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
      url_popular: process.env.VUE_APP_POPULER,
      imageURL: "https://image.tmdb.org/t/p/w1280",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios.get(this.url_popular).then((res) => {
        this.movies = res.data.results;
        console.log(this.movies);
      });
    },
    gotoDetail(idMovie) {
      this.$router.push({ name: "detailMovie", params: { idMovie: idMovie } });
    },
  },
};
</script>
<style scoped>
.max-lines {
  display: block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}

.card {
  width: 250px;
  height: 400px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  backface-visibility: hidden;
}
.card:hover {
  transform: scale(0.9);
}
.card:hover::after {
  height: 280px;
}
.card:hover .con-text p {
  margin-bottom: 0px;
  opacity: 1;
}

.card:hover .ul {
  transform: translate(0);
  opacity: 1;
}

.card:hover img {
  transform: scale(1.25);
}

.card::after {
  width: 100px;
  content: "";
  left: 0;
  bottom: 0px;
  height: 150px;
  background: linear-gradient(
    100 deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 20;
  transition: all 0.25 ease;
}

.card img {
  height: 100%;
  z-index: 10;
  transition: all 0.25 ease;
}
.card .con-text {
  z-index: 30;
  position: absolute;
  bottom: 0px;
  color: #fff;
  padding: 20px;
  padding-bottom: 30px;
}

.card .con-text p {
  font-style: 0.8rem;
  opacity: 0;
  margin-bottom: -170px;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}

.card .con-text p button {
  padding: 7px 17px;
  border-radius: 12px;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  margin-top: 10px;
  margin-left: 10px;
  transition: all 0.25s ease;
  font-family: poppins;
  font-size: 0.75rem;
  outline: none;
}

.card .con-text p button:hover {
  background: #fff;
  color: black;
}
</style>>


<template>
    <div class="container-fluid">
        <div class="card">
        <img class="card-img-top" :src="imageURL+singleMovie.backdrop_path" alt="Card image cap" />
         <h1>{{ singleMovie.title }}</h1>
        <p class="mt-4"> OverView : {{ singleMovie.overview}}</p>
        <p> Release Data : {{ singleMovie.release_date }}</p>
        <p> Popularity : {{singleMovie.popularity }}</p>
        <a class="btn btn-primary" @click="$router.go(-1)" >Back</a>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    props: ['idMovie'],
    data(){
        return{
            test:process.env.VUE_APP_URL,
            imageURL: "https://image.tmdb.org/t/p/w1280",
            singleMovie:'',
        }
    },
    mounted () {
        console.log(this.test)
        var url = 'https://api.themoviedb.org/3/movie/'+this.idMovie+this.test
        axios.get(url)
        .then((response)=>{
            this.singleMovie = response.data
        })

    }
}
</script>

<style scoped>

</style>
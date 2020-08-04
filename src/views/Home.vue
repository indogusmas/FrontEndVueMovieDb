<template>
  <div class="home">
    <div class="row">
      <div class="card mr" style="width: 18rem;">
      <img src="../assets/aladin-logo.jpg" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Aladin</h5>
        <p
          class="card-text"
        >The New Adventures of Aladdin</p>
        <section class="image-date-view-wrapper">
          <p>Release Date: </p>
          <p>Rating :</p>
        </section>
        <div class="card text-right">
        <a href="#" class="btn btn-primary">Detail</a>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "Home",
  components: {
   
  },
};
</script>
<style scoped>
.image-date-view-wrapper {
  white-space: nowrap;
  text-overflow : ellipsis;
  overflow :hidden;
}
</style>>


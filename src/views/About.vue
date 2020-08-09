<template>
  <div class="about">
    <div class="card">
      <img src="../assets/aladin.jpg" alt />
      <div class="con-text">
        <h2>Aladin</h2>
        <p>Aladdin  merupakan bcis
        <button>
          See More</button>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 400px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .25s ease;
  backface-visibility: hidden;
}
.card:hover{
  transform: scale(.9);
}
.card:hover::after{
  height: 280px;
}
.card:hover .con-text p{
  margin-bottom: 0px;
  opacity: 1;
}


.card:hover .ul{
  transform: translate(0);
  opacity: 1;
}



.card:hover img{
  transform: scale(1.25);
}

.card::after{
  width: 100px;
  content: '';
  left: 0;
  bottom: 0px;
  height: 150px;
  background: linear-gradient(100 deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1)100%);
  z-index: 20;
  transition: all .25 ease;
}

.card img{
  height: 100%;
  z-index: 10;
  transition: all .25 ease;

}
.card .con-text {
  z-index: 30;
  position: absolute;
  bottom: 0px;
  color: #fff;
  padding: 20px;
  padding-bottom: 30px;
}

.card .con-text p{
  font-style: .8rem;
  opacity: 0;
  margin-bottom: -170px;
  transition: all .25s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}

.card .con-text p button{
  padding: 7px 17px;
  border-radius: 12px;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  margin-top: 10px;
  margin-left: 10px;
  transition: all .25s ease;
  font-family: poppins;
  font-size: .75rem;
  outline: none;
}

.card .con-text p button:hover{
  background: #fff;
  color: black;
}

</style>

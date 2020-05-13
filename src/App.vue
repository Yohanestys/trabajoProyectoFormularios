<template>
  <div id="app">
    <Cabecera />
    <div id="nav" :style="{'opacity':1}">
      <router-link to="/inicioPracticas">Fase inicio prácticas</router-link> 
      <router-link to="/ejecucion">Fase ejecución prácticas</router-link> 
      <router-link to="/final">Fase Final prácticas</router-link> 
      <router-link to="/">Inicio</router-link>
    </div>
    <router-view/>
    <Pie />
  </div>
</template>

<style>


body{

  background-image: url("assets/img/Free-Desktop-Light-Blue-Backgrounds.jpg");
  background-repeat: no-repeat-y;
  background-color:rgba(0, 0, 255, 0.5);

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  color: lightgray;
  width: 60%;
  margin-left: 20%;
  /*background-color: aliceblue;*/
  background-color:rgba(255, 0, 0, 0.2); 
  border-radius: 0.3em;
      z-index: 5;
      position: absolute;


 

  /*background-color: honeydew;*/
}

@media(max-width: 710px) {
  #nav {
  flex-direction: column;
  }
}

#nav {
  display: flex;
  padding: 80px 30px 30px 30px;
  justify-content: center;
  gap: 0.2em;
  margin-top: 0;

}



#nav a {
  font-weight: bold;
  /*color: #2c3e50;*/
  color: gray;
  background-color: floralwhite;  
  text-decoration: none;
  font-weight: bold;
  padding: 1em;
    -webkit-transform: rotateZ(-0.1deg);
        -ms-transform: rotateZ(-0.1deg);
        transform: rotateZ(-0.1deg);

}

#nav a:hover{
  background-color: lightgray;
  color: #fff;
}

#nav a:first-of-type{
  border-top-left-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
}

#nav a:last-of-type{
  border-top-right-radius: 0.2em;
  border-bottom-right-radius: 0.2em;
}

#nav a.router-link-exact-active {
 /* color: #42b983;*/
  background-color: lightgray;
  color: cornflowerblue;
}

</style>


<script>
import Cabecera from '@/components/Cabecera.vue'
import Pie from '@/components/Pie.vue'

export default {
  components: {
    Cabecera,
    Pie

  }
  
  
}
</script>

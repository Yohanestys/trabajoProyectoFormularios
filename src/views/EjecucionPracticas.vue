<template>
  <div class="ejecucion">
    <router-link to="">Formulario 1</router-link>
    <router-link to="/formularioEjecucion/2">Formulario 2</router-link>
    <router-link to="">Formulario 3</router-link>
  </div>
</template>


<style scoped>






  .ejecucion {
    background-color: rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    padding: 30px;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 38em;
    
  }

  .ejecucion a:first-of-type{
    margin-top: 0.15em;
  }

  .ejecucion a {
    background-color: floralwhite;  
    text-decoration: none;
    justify-self: self-start;
    color: gray;
    padding: 0.90em 1em 0.92em 1.01em;
    font-weight: bold;
    margin: 0.07em 0.09em 0.05em 2.79em;
    text-align: center;    

  }

  .ejecucion a:nth-of-type(2){
    background-color: lightgray;
    color: cornflowerblue;

  }
</style>


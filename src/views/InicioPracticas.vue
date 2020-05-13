<template>
  <div class="inicio">
    <ul>
      <li>
          <a href="#" @click="formulario">Formulario 1</a> 
      </li>
        <li>
          <a href="#" >Formulario 2</a> 
      </li>        
      <li>
          <a href="#">Formulario 3</a> 
      </li>             
    </ul>
  </div>
</template>


<style scoped>
.inicio {
  background-color: rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  color: #fff;
  width: 100%;
  flex-direction: row;
  height: 38em;

}

.inicio ul li {
  list-style: none;
  justify-self: self-start;
  display: block;
  white-space: nowrap;
  margin: 31px 35px 31px 34.5px;

}

.inicio ul li a{
  color: gray;
  text-decoration: none;
  background-color: floralwhite;  
  padding: 1em 1.01em 1em 1.02em;
  font-weight: bold;
  ;
}

.inicio ul li:first-of-type a{
  background-color: lightgray;
  color: cornflowerblue;
}
</style>

<script>
export default {
  methods: {
    formulario(){
      this.$router.push('/formularioFaceInicio/1');
    }
  },

}
</script>
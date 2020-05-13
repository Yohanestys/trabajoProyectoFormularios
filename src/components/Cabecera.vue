<template>
    <div>
        <!--<img alt="Vue logo" src="@/assets/img/cabecera1.png">-->
    </div>
</template>


<script>
export default {
    name: 'Cabecera'
}
</script>

<style scoped>
div {
    width: 100%;
    background-color:rgba(255, 255, 255, 0.5); 
    display: grid;
    margin: 0em 0;
    position: absolute;
    width: calc(100% + 10%);
    left: -5%;
    top: 0;
    padding: 5em 0;
    z-index: -5;
    border-radius: 0.1em;
    
}

div img {
    margin: 2em 0;
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: center;
}
   
</style>
<template>
    <div id="formilarioFaceInicio">
        <button @click="downloadWithCSS">Descargar</button><br><br>

        <div class="inicio" ref="content">
            <div id="clm">
              <img alt="Vue logo" src="../../assets/img/anexo1/clm.jpg">
            </div>
            <div id="pe">
              <span>CONSEJERÍA DE EDUCACIÓN,  CULTURA Y DEPORTES</span>
              <span>DIRECCIÓN GENERAL DE  ORGANIZACIÓN, CALIDAD EDUCATIVA Y FORMACIÓN  PROFESIONAL</span>
            </div>
            <div id="ensen">
              <img alt="Vue logo" src="../../assets/img/anexo1/ensenianzas.png">
            </div>

            <div id="convenio">
              <span>CONVENIO CENTRO DOCENTE-EMPRESA  PARA EL DESARROLLO DE LA</span>
              <span>FORMACIÓN EN CENTROS DE TRABAJO</span>      
            </div>

            <div id="anex">
              <span>ANEXO I</span>     
            </div>

            <div id="relTit">
              <span>RELACIÓN DE ALUMNOS</span> (*)   
            </div>
            <div id="cuerpo">
                  <div>
                    <span>Relación de alumnos acogidos al  CONVENIO específico número <strong>1182/19</strong> suscrito con fecha 10 de Septiembre</span>
                    <span>de 2019 entre el Centro educativo I.E.S Azarquiel y la Empresa José Luis Rodríguez Ruiz, que realizarán</span>
                    <span>Formación en Centros de Trabajo (F.C.T.) durante el período abajo indicado.</span>
                  </div>

                  <div id="ciclo">
                    <span>CICLO FORMATIVO DESARROLLO DE APLICACIONES WEB  Curso académico 2019/20</span>
                    <span>(indicar P.C.P.I.  u  otras)</span>   
                  </div>
                <div id="tabla">
                    <table>
                        <tr>
                            <th>APELLIDOS Y NOMBRE</th>
                            <th>D.N.I</th>
                            <th>
                                HORARIO
                                DIARIO
                            </th>
                            <th>
                              NÚMERO
                              HORAS
                            </th>
                            <th>
                              FECHA DE
                              COMIENZO
                            </th>
                            <th>
                              FECHA DE 
                              FINALIZACION
                            </th>
                        </tr>
                        <tr v-for="(usuario, index) of getAnexo1.usuario" :key="index">
                          <td>{{usuario.apellidos+", "+usuario.nombre}}</td>
                          <td>{{usuario.nif}}</td>
                          <td>{{getAnexo1.centros[0].ciclo[index].horarioPractica}}</td>
                          <td>{{getAnexo1.centros[0].ciclo[index].horasPractica}}</td>
                          <td>{{getAnexo1.centros[0].ciclo[index].inicioPractica}}</td>
                          <td>{{getAnexo1.centros[0].ciclo[index].finPractica}}</td>
                        </tr>
                    </table>
                </div><!--#tabla-->

                <div id="clausula">
                  <span>En cumplimiento de la Cláusula Cuarta del CONVENIO específico de colaboración, se procede a designar al Profesor-Tutor del</span>
                  <span>Centro docente, que será D. SEBASTIÁN RUBIO VALERO, y al responsable de la Empresa o Entidad, que será D. LUIS </span>
                  <span>RODRÍGUEZ RUIZ.</span>
                </div>

                <div id="representantesCentro">
                <span>En Toledo a 11 de Septiembre 2019</span>
                <span>El Director del Centro Docente</span><span>El Representante del Centro de Trabajo.</span>


                <span>Fdo.: {{getAnexo1.centros[0].nombreDirector}}</span><span>Fdo.: {{getAnexo1.empresa[0].representanteEmpresa}}</span>
                </div>

                <div id="condicion">
                    (*) Se realizará una para cada Ciclo Formativo o Especialidad
                </div>

            </div><!--#cuerpo-->
   
        </div>
    </div>
</template>


<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas"
import {mapGetters} from "vuex"
export default {
  name: "formularioInicio",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getAnexo1'])
  },
  methods: {
    downloadWithCSS() {
      var w = document.getElementsByClassName("inicio")[0].offsetWidth;
      var h = document.getElementsByClassName("inicio")[0].offsetHeight;
      const doc = new jsPDF("p", "mm", "a4");
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      /** WITH CSS */
      //var canvasElement = document.createElement('canvas');
      var element = document.getElementsByClassName("inicio")[0];
      html2canvas(element).then((canvas)=>{
              var img = canvas.toDataURL("image/png", 1.0);
              doc.addImage(img, 'PNG',0,2, width, height/1.2);
              doc.save('anexo1.pdf');
            
      });
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#formilarioFaceInicio button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: gray;
  background-color: floralwhite;
  padding: 0.8em 1em 0.7em 1em;
  border: solid 0;
  border-radius: 0.2em;
  font-weight: bold;
  margin-top: -2em;
  font-size: 1em;

}

#formilarioFaceInicio button:hover{
    background-color: lightgray;
    color: #fff;
}

@media (max-width: 1275px) {
  .inicio div{
    display: none;
  }

  .inicio:first-of-type{
    width: calc(100% + 10%);
    left: -5%;
    background-color: rgba(255, 255, 255, 0.5);
  }

  #formilarioFaceInicio button{
    display: none;
  }
}

.inicio{
  display: grid;
  justify-content: center;
  color: gray;
  background-color: rgba(255, 255, 255, 255);
  font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif; 
  font-size: 1em; 
  font-style: normal; 
  font-variant: normal; 
  font-weight: 700; 
  line-height: 26.4px;
  padding-bottom: 8em;
  margin-top: 0em;
  position: relative;
  padding-top: 5em;
  
}
    
.inicio h3 { 
  font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif; 
  font-size: 14px; 
  font-style: normal; 
  font-variant: normal; 
  font-weight: 700; 
  line-height: 15.4px; 
    
}


.inicio #clm{
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: self-start;
  /*background-color: chocolate;*/

}

.inicio #clm img:first-of-type {
  width: 36%;
  height: 95%;
  float: left;
  margin-left: 25%;

}
  
.inicio p { 
  font-weight: 400; 
  line-height: 20px;
       
}

.inicio #pe{
  grid-column: 2/6;
  grid-row: 1/2;
  color: #000;   
}

.inicio #pe span {
  font-size: 0.8em;
  text-decoration:underline;
  box-decoration-break: clone;

}

.inicio #pe span::before {
  content: "";
  display: block;
    
}



.inicio #ensen{
  grid-column: 6/7;
  grid-row: 1/2;
  /*background-color: chocolate;*/
 
}

.inicio #ensen img{
  width: 36%;
  height: 80%;
  float: right;
  margin-right: 30%;

}

.inicio #convenio{
  grid-column: 1/7;
  grid-row: 2/3; 
  color: #000;

  }

.inicio #convenio span::before{
  content: "";
  display: block;

  }

.inicio #anex{
  grid-column: 1/7;
  grid-row: 3/4; 
  justify-self: end;
  margin-right: 15%;
  border-left-style: double;
  border-right-style: double;
  border-top-style: double;
  border-bottom-style: double;

  }

.inicio #anex span {
  margin: 0.1em 0.5em 0.1em 0.5em;
  border: solid 1px;
  padding: 0.1em 0.5em;

}

.inicio #relTit{
  grid-column: 1/7;
  grid-row: 4/5;
  margin-bottom: -0.6em;
  color: #000;
}

.inicio #relTit span{
  text-decoration: underline;
  
}

.inicio #cuerpo{
  grid-column: 1/7;
  grid-row: 5/6;
  margin: 1em 6em;
 
  }

.inicio #cuerpo div{ /*Aplicar el estilo para todos los div's dentro del #cuerpo*/ 
  text-align: left;
  padding: 0.8em 1em 2.8em 0.8em;
  letter-spacing: 0.1ch;
  font-family: Candara, sans-serif;
  border-left-style: double;
  border-right-style: double;
  border-top-style: solid;
  border-bottom-style: solid;
 
  }

  .inicio #cuerpo div:first-of-type strong{
    color: black;
  }

  .inicio #cuerpo div:first-of-type span:nth-of-type(2) {
    letter-spacing: 0.072em;
  }

.inicio #cuerpo div:first-of-type span::before{
  content: "";
  display: block;

}

.inicio #cuerpo #ciclo{
  border: 0;
  }

  .inicio #cuerpo #ciclo span:first-of-type{
      font-size: 0.92em;

  }

.inicio #cuerpo #ciclo span:nth-of-type(2){
  display: block;
  text-align: left;
  font-size: 0.4em;
  margin-left: 30em;
  color: #000;


}

.inicio #cuerpo #tabla {
  margin: 0;
  padding: 0;
  margin-top: -3.35em;

  }

.inicio #cuerpo div:nth-of-type(3){ /*quitar el border de del div tabla*/
  border: 0;

}

.inicio #cuerpo div:nth-of-type(3) table{
  border-left-style: double;
  border-right-style: double;
  border-top-style: solid;
  border-bottom: solid;
  border-spacing: 0;

}

.inicio #cuerpo #tabla tr th:first-of-type,
.inicio #cuerpo #tabla tr td:first-of-type{
  white-space: nowrap;
  }

.inicio #cuerpo div:nth-of-type(3) table th{
  background-color: lightgray;
  text-align: center;
  padding: 0 1.1em;
  border-right: solid 1px;
  border-bottom: solid;
 
}

.inicio #cuerpo div:nth-of-type(3) table th:last-of-type{
  border-right: 0;
}

.inicio #cuerpo div:nth-of-type(3) table td{
  text-align: left;
  padding: 0 1.1em;
  border-right: solid 1px;
  border-bottom: solid;

}

.inicio #cuerpo div:nth-of-type(3) table td:last-of-type{
  border-right: 0;

}

.inicio #cuerpo div:nth-of-type(3) table tr:last-of-type td{
  border-bottom: 0;
}


.inicio #cuerpo #clausula{
  padding-bottom: 0;
  border: 0;
  padding: 0;
  margin-top: 0.9em;
}

.inicio #cuerpo #clausula span{
  font-size: 0.876em;
}

.inicio #cuerpo #clausula span:nth-of-type(2){
  letter-spacing: 0.10523em;
}

.inicio #cuerpo #clausula span::before{
  content: "";
  display: block;
}

.inicio #cuerpo #representantesCentro{
  margin-top: 0.2em;
  display: grid;
  padding: 0;
}

.inicio #cuerpo #representantesCentro span{
  font-size: 0.8em;
}


.inicio #cuerpo #representantesCentro span:first-of-type{
  grid-column: 1/4;
  grid-row: 1/2;
  justify-self: center;
  padding-top: 0.3em;
  padding-bottom: 1em;
}

.inicio #cuerpo #representantesCentro span:nth-of-type(2){
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: start;
  align-self: center;
  padding-left: 0.5em;
  
}

.inicio #cuerpo #representantesCentro span:nth-of-type(3){
  grid-column: 3/4;
  grid-row: 2/3;
  align-self: center;
  justify-self: center;
}

.inicio #cuerpo #representantesCentro span:nth-of-type(4){
  grid-column: 1/2;
  grid-row: 3/4;
  justify-self: start;
  padding-top: 5em;
  padding-left: 0.5em;

}

.inicio #cuerpo #representantesCentro span:nth-of-type(5){
  grid-column: 3/4;
  grid-row: 3/4;
  padding-top: 5em;
  justify-self: center;
}

.inicio #cuerpo #condicion{
  border: 0;
  font-size: 0.876em;
}
  


    
     
.inicio blockquote {  
    font-weight: 400; 
    line-height: 30px; 
    
  } 
  
.inicio pre {  
    font-weight: 400; 
    line-height: 18.5667px;
}

.inicio table {
  font-family: Candara, sans-serif;
  font-size: 10pt;
  letter-spacing: -0.1pt;
}

</style>
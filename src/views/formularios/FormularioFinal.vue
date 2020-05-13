<template>
 <div id="formilarioFaceFinal">
        <button @click="downloadWithCSS">Descargar</button><br><br>

      <div class="final" ref="content">
          <div id="clm">
              <img alt="Clm logo" src="../../assets/img/anexo4/clmAnexo4.png">
          </div>
            <div id="titulo">
              <span>CONSEJERÍA DE EDUCACIÓN,  CULTURA Y DEPORTES</span>
              <span>DIRECCIÓN GENERAL DE FORMACIÓN PROFESIONAL</span>
            </div>
            <div id="ensen">
              <img alt="Enseñansas logo" src="../../assets/img/anexo4/unionEuropaAnexo4.png">
            </div>

            <div id="anex">
              <span>ANEXO IX</span>     
            </div>

            <div id="ficha">
              <table>
                <tr>
                  <td colspan="13">
                    <span>FICHA ESTADÍSTICA SEMESTRAL DE SEGUIMIENTO E INSERCIÓN LABORAL</span>
                    <p>CORRESPONDIENTE AL <span>1º SEMESTRE DE 2019 A FECHA 20-12-2019</span></p>
                    <span>(situación en la que se encuentra el alumnado una vez transcurridos los 
                      primeros seis meses desde la finalización de sus estudios y la</span>
                    <span>obtención del título profesional)</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="13">NOMBRE DEL CENTRO EDUCATIVO Y LOCALIDAD:</td>
                </tr>
                </table>


            </div>

            <div id="fichaCentro">

            </div>

            <div id="pagebreak">

            </div>

            <div id="other">
              <p></p>       
            </div>

          <div id="fichaCentro">
              <table>
                  <tr>
                      <td>
                          <span>FAMILIA</span>
                          <span>PROFESIONAL</span>
                          <span>(siglas)</span>
                      </td>
                      <td>
                          <span>CICLO FORMATIVO</span>
                          <span>(F.P.B. – G.M. – G.S. nombre completo)</span>
                      </td>
                      <td>
                          <span>ALUMNADO</span>
                          <span>MATRICULADO</span>
                          <span>EN EL CURSO</span>
                          <span>(todos/as)</span>
                      </td>
                      <td>
                          <span>ALUMNADO</span>
                          <span>QUE HA</span>
                          <span>REALIZADO</span>
                          <span>LA F.C.T. </span>
                          <span>(en este </span>
                          <span>semestre)</span>
                      </td>
                      <td colspan="3">
                          <table aria-rowspan="3" aria-colspan="3">
                              <tr>
                                  <td colspan="3">
                                      <span>ALUMNADO QUE HA</span>
                                      <span>CONTINUADO</span>
                                      <span>ESTUDIOS</span>
                                  </td>

                              </tr>
                              <tr>
                                  <td>
                                      <span>F.P.</span>
                                  </td>
                                  <td id="univ">
                                      <span>UNIV.</span>
                                  </td>
                                  <td>
                                      <span>OTROS</span>
                                  </td>
                              </tr>
                          </table>
                      </td>
                      <td>
                          <span>ALUMNADO</span>
                          <span>QUE NO HA</span>
                          <span>ENCONTRADO</span>
                          <span>TRABAJO</span>
                      </td>
                      <td colspan="4">
                          <table aria-rowspan="3" aria-colspan="4" id="inner2">
                              <tr>
                                  <td colspan="4">
                                      <span>ALUMNADO QUE SI HA ENCONTRADO</span>
                                      <span>TRABAJO</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td id="inner2TD1" rowspan="2">
                                      <span>EN LA</span>
                                      <span>MISMA</span>
                                      <span>EMPRESA</span>

                                  </td>
                                  <td id="inner2TD2" rowspan="2">
                                      <span>EN OTRA</span>
                                      <span>EMPRESA</span>
                                  </td>

                                  <td colspan="2">
                                      <table>
                                          <tr>
                                              <td rowspan="1" colspan="2">
                                                  <span>TIPO DE</span>
                                                  <span>CONTRATO</span>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td id="inner3TD3">
                                                  <span>FIJO</span>
                                              </td>
                                              <td>
                                                  <span>OTRO</span>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                      <td>
                          <span>ALUMNADO</span>
                          <span>QUE NO HA</span>
                          <span>CONTESTADO</span>
                          <span>A LA</span>
                          <span>ENCUESTA</span>
                      </td>
                  </tr>
                  <!-- first tr -->
                  <tr>
                      <!-- second tr-->
                      <td>
                          <span>DAW</span>
                      </td>
                      <td>
                          <span>DISEÑO DE APLICACIONES WEB</span>
                      </td>
                      <td>
                          <span>22</span>
                      </td>
                      <td>
                          <span>20</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                          <span>4</span>
                      </td>
                      <td>
                          <span>7</span>
                      </td>
                      <td>
                          <span>6</span>
                      </td>
                      <td></td>
                      <td>
                          <span>X</span>
                      </td>
                      <td>
                          <span>3</span>
                      </td>
                  </tr>
                  <tr v-for="index of 19" :key="index" style="height: 1.2em">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>

                    <tr>
                      <td colspan="2"> Totales</td>
                      <td>22</td>
                      <td>20</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>4</td>
                      <td>7</td>
                      <td>6</td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                  </tr>
              </table>
          </div>

          <!--break-->

          <div id="clm2">
              <img alt="Clm logo" src="../../assets/img/anexo4/clmAnexo4.png">
          </div>
            <div id="titulo2">
              <span>CONSEJERÍA DE EDUCACIÓN,  CULTURA Y DEPORTES</span>
              <span>DIRECCIÓN GENERAL DE FORMACIÓN PROFESIONAL</span>
            </div>
            <div id="ensen2">
              <img alt="Enseñansas logo" src="../../assets/img/anexo4/unionEuropaAnexo4.png">
            </div>

        <div id="cuerpo">
          <div id="texto">
            <p><span>Según lo indicado en el punto 1 de la Instrucción 8 de la</span> Circular de la Dirección General de Formación Profesional por la que se dictan instrucciones a los centros educativos</p> 
            <p>sostenidos con fondos públicos que impartan enseñanzas de Formación Profesional, Ciclos Formativos de Artes Plásticas y Diseño y Enseñanzas Deportivas, sobre la puesta</p>
            <p>en marcha y desarrollo de los módulos profesionales de Formación en centros de trabajo para todas las enseñanzas y Proyecto para los Ciclos Formativos de grado superior:</p>


            
            <span><p>Semestralmente, cada profesor-tutor del módulo profesional de F.C.T., elevará un informe al Director del centro educativo, que a su vez deberá elaborar un informe-general que</p>
            <p>será presentado al Consejo Escolar o Consejo Social sobre el desarrollo del módulo profesional de F.C.T. en los Ciclos Formativos y las relaciones con las empresas y deberá</p>
            <p>cumplimentar las correspondientes fichas estadísticas de seguimiento e Inserción Laboral (Anexo IX) así como cualquier otra documentación que para la gestión del módulo</p>
            <p>profesional de F.C.T., soliciten las Delegaciones Provinciales de la Consejería de Educación, Cultura y Deportes. Los centros remitirán semestralmente copia del informe-general y</p>
            <p>Anexo IX referidos, a la Delegación Provincial correspondiente.</p></span>
          </div>


          <div id="fechaFirma">
              <div>
                <p>En _TOLEDO_____ a _17 de _DICIEMBRE_____ de 2019_</p>
              </div>
              <div id="firma">
                <p><span>EL/LA DIRECTORA/A DEL CENTRO EDUCATIVO</span></p>
                  
                <p>Fdo.: Nombre Apellido Apellido</p>
              </div>
          </div>

        </div>
        
      </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas"
export default {
  name: "formularioFinal",
  props: {
    msg: String
  },

  methods: {
    downloadWithCSS() {
      var w = document.getElementsByClassName("final")[0].offsetWidth;
      var h = document.getElementsByClassName("final")[0].offsetHeight;
      const doc = new jsPDF("L", "mm", "a4");
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      /** WITH CSS */
      //var canvasElement = document.createElement('canvas');
      var element = document.getElementsByClassName("final")[0];
      html2canvas(element).then((canvas)=>{
              var img = canvas.toDataURL("image/png", 1.0);
              doc.addImage(img, 'PNG',0,0, width, height);
              doc.save('anexo4.pdf');
            
      });
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media print{
   #pagebreak{ page-break-before: always; } 
}


#formilarioFaceFinal button {
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

#formilarioFaceFinal button:hover{
    background-color: lightgray;
    color: #fff;
}

@media (max-width: 807px) {
  .final div{
    display: none;
  }
}

.final{
  display: grid;
  justify-content: center;
  color: #000;
  background-color: rgba(255, 255, 255, 255);
  font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif; 
  font-size: 1em; 
  font-style: normal; 
  font-variant: normal; 
  font-weight: 700; 
  line-height: 26.4px;
  padding-bottom: 8em;
  margin-top: 0em;
  padding-top: 2em;
  position: relative;
  width: calc(100% + 10%);
  left: -5%;
  
}

.final #clm{
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: self-start;
  /*background-color: chocolate;*/

}

.final #clm img:first-of-type {
  width: 38%;
  height: 75%;
  float: left;
  margin-left: 10%;

}

.final #titulo{
  grid-column: 2/6;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  display: grid;
  width: 100%;
  padding: 2em;
  
}

.final #titulo span {
  font-size: 1em;
}

.final #titulo span:first-of-type{
  justify-self: self-start;
  color:gray;
  
}

.final #titulo span:nth-of-type(2){
  justify-self: self-end;
  color:gray;

}

.final #titulo span::before {
  content: "";
  display: block;
    
}


.final #ensen{
  grid-column: 6/7;
  grid-row: 1/2;
  /*background-color: chocolate;*/
 
}

.final #ensen img{
  width: 36%;
  height: 80%;
  float: right;
  margin-right: 10%;

}

.final #anex{
  grid-column: 1/7;
  grid-row: 2/3;
  justify-self: center;
  border: solid 1px #000;
  color: #000;
  margin-top:  -1.2em;
  }

.final #anex span {
  margin: 0.1em 0.5em 0.1em 0.5em;
  padding: 0.1em 0.5em;

}

.final #ficha{
  grid-column: 1/7;
  grid-row: 3/4;
  justify-self: center;
  margin-top: 1.25em;
}

.final #ficha p{
  line-height: 1;
  margin: 0;
  padding: 0;
  word-wrap: break-word;
}

.final #ficha p span{
  color: red;
  
  
}

.final #ficha p span:first-of-type::before{
  content:"";
  display: inline;
}

.final #ficha span::before{
  content:"";
  display: block;
}


.final #ficha table{
  border-spacing: 0;
  padding: 0;
  margin: 0;
  
}

.final #ficha table tr:first-of-type td{
  font-size: 1.2em;
}

.final #ficha table tr:nth-of-type(2) td{
  font-size: 1.2em;
  text-align: left;
}


.final #ficha table td{
  border-top: solid 1px;
  border-left: solid 1px;
  padding: 0 2em 0 2.01em;
}

.final #ficha table td:last-of-type{
  border-right: solid 1px;
}

.final #ficha table tr:last-of-type td{
  border-bottom: solid 1px;
}


.final #fichaCentro{
  grid-column: 1/7;
  grid-row: 4/5;
  justify-self: center;
  margin:0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 1em;
  font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif; 
}
        
.final #fichaCentro table tr td span::before {
            content: "";
            display: block;
        }
        
.final #fichaCentro table {
            text-align: center;
            height: 100%;
            border-spacing: 0;
            font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif; 
            color: gray;
            
        }
        
.final #fichaCentro table tr td,
.final #fichaCentro table tr th {
            border-top: solid 1px;
            border-left: solid 1px;
            font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif; 
            font-size: 13px;
            margin: 0;
            border-color: gray;
            border-spacing: 0;
            padding: 0 0.420em 0.1em 0.420em;

        }
        
.final #fichaCentro table tr td:last-of-type {
            border-right: solid 1px;
        }
        
.final #fichaCentro table tr:last-of-type td {
            border-bottom: solid 1px;
        }
        
.final #fichaCentro table tr:nth-of-type(1) td:nth-of-type(5) {
            /* tr number 3 */
            margin: 0;
            padding: 0;
        }
        
.final #fichaCentro table tr:nth-of-type(1) td table {
            /* tr number 3 */
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border-spacing: 0;
        }
        
.final #fichaCentro table tr:nth-of-type(1) td table tr td {
            /* tr number 3 */
            border-bottom: 0;
            border-right: 0;
            border-spacing: 0;
        }
        
.final #fichaCentro table tr:nth-of-type(1) td table {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 0.9em;
        }
        
.final #fichaCentro table tr:nth-of-type(1) td table:first-of-type tr td:first-of-type {
            /* tr number 3 */
            border-left: 0;
        }
        
.final #fichaCentro table tr:nth-of-type(1) td table:first-of-type tr:first-of-type td:first-of-type {
            /* tr number 3 */
            border-top: 0;
        }
        
.final #fichaCentro table tr:nth-of-type(1) td table:first-of-type tr:nth-of-type(2) td:first-of-type {
            padding: 0 0.18em 0 0.18em;
        }
        
 .final #fichaCentro table tr:nth-of-type(1) td table:first-of-type tr:nth-of-type(2) td:nth-of-type(1) {
            padding: 0;
            width: 2em;
        }
        
.final #fichaCentro table tr:nth-of-type(1) td table:first-of-type tr:nth-of-type(2) td:nth-of-type(2) {
            padding: 0;
            width: 4em;
            text-align: center;
        }
        
.final #fichaCentro table tr:nth-of-type(1) td table:first-of-type tr:nth-of-type(2) td:nth-of-type(3) {
            padding: 0;
            width: 4em;
        }


.final #fichaCentro #inner2{
    border-spacing: 0;

}


.final #fichaCentro #inner2 tr:nth-of-type(2) td:first-of-type{
  padding: 0;
  margin: 0;
  text-align: center;
  border-spacing: 0;

}
        
.final #fichaCentro #inner2TD1,
.final #fichaCentro #inner2TD2 {
            width: 5.5em;
            border-spacing: 0;
        }
        
.final #fichaCentro #inner3TD3 {
            width: 5em;
            border-spacing: 0;
        }
        
.final #fichaCentro table tr:nth-child(2) td:nth-of-type(2) {
            /* tr number 4 */
            text-align: left;
            padding-left: 1em;
        }
        
.final #fichaCentro table tr:nth-child(2) td:nth-of-type(5) {
            /* tr number 4 */
            width: 2em;
            padding: 0;
        }
        
.final #fichaCentro table tr:nth-child(2) td:nth-of-type(6) {
            /* tr number 4 */
            width: 4em;
            padding: 0;
        }
        
.final #fichaCentro table tr:nth-child(2) td:nth-of-type(7) {
            /* tr number 4 */
            width: 4em;
            padding: 0;
        }
        
.final #fichaCentro table tr:nth-child(2) td:nth-of-type(9) {
            /* tr number 4 */
            width: 5.92em;
            padding: 0;
            margin: 0;
        }
        
.final #fichaCentro table tr:nth-child(2) td:nth-of-type(10) {
            /* tr number 4 */
            width: 5.5em;
            padding: 0;
            margin: 0;
        }
        
.final #fichaCentro table tr:nth-child(2) td:nth-of-type(11) {
            /* tr number 4 */
            width: 2.9em;
            padding: 0;
        }
        
.final #fichaCentro table:first-of-type tr:nth-child(3) td {
            /* tr number 4 */
            height: 1em;
        }


.final #fichaCentro table tr:last-of-type td {
  height: 1em;
}

.final #fichaCentro table tr:last-of-type td:first-of-type {
  text-align: right;
  padding-right: 0.8em;
}

.final #fichaCentro table tr td:nth-of-type(5),
.final #fichaCentro table tr td:nth-of-type(6),
.final #fichaCentro table tr td:nth-of-type(7),
.final #fichaCentro table tr td:nth-of-type(8),
.final #fichaCentro table tr td:nth-of-type(9),
.final #fichaCentro table tr td:nth-of-type(10),
.final #fichaCentro table tr td:nth-of-type(11),
.final #fichaCentro table tr td:nth-of-type(12),
.final #fichaCentro table tr td:nth-of-type(13)
{
  background-color: #F1F1F1;
}

.final #fichaCentro table tr:last-of-type td:nth-of-type(4){
    background-color: #F1F1F1;
}




.final table{
  line-height: 1.2;
  border-spacing: 0;
  border: 0;
  font-size: 0.9em;
}



/*segunda parte */

.final #clm2{
  margin-top: 5em;
  grid-column: 1/2;
  grid-row: 5/6;
  justify-self: self-start;
  /*background-color: chocolate;*/

}

.final #clm2 img:first-of-type {
  width: 38%;
  height: 75%;
  float: left;
  margin-left: 10%;

}

.final #titulo2{
  margin-top: 5em;
  grid-column: 2/6;
  grid-row: 5/6;
  justify-self: center;
  align-self: center;
  display: grid;
  width: 100%;
  padding: 2em;
  
}

.final #titulo2 span {
  font-size: 1em;
}

.final #titulo2 span:first-of-type{
  justify-self: self-start;
  color:gray;
  
}

.final #titulo2 span:nth-of-type(2){
  justify-self: self-end;
  color:gray;

}

.final #titulo span::before {
  content: "";
  display: block;
    
}


.final #ensen2{
  margin-top: 5em;
  grid-column: 6/7;
  grid-row: 5/6;
  /*background-color: chocolate;*/
 
}

.final #ensen2 img{
  width: 36%;
  height: 80%;
  float: right;
  margin-right: 10%;

}

.final #cuerpo{
  grid-column: 1/7;
  grid-row: 6/7;
  margin: 4.5em 0 0 0;
  padding: 0;
  justify-self: center;
}

.final #cuerpo #texto {
  font-size: 0.9em;
  padding: 0 0.5em 0 1.2em;
}

.final #cuerpo #texto p>span:first-of-type{
  font-weight: 100;
}

.final #cuerpo #texto p{
  line-height: 1.3;
  margin: 0;
  padding: 0;
  text-align: justify;
  
}

.final #cuerpo #texto p:first-of-type{
  letter-spacing: 0.011em;
}

.final #cuerpo #texto p:nth-of-type(2){
  letter-spacing: 0.011em;
}


.final #cuerpo #texto span:nth-of-type(1) p:first-of-type{
  margin-top: 1.8em;
}

.final #cuerpo #texto span:nth-of-type(1) p{
  font-style: italic;
  font-weight: 100;
  
}

.final #cuerpo #texto span:nth-of-type(1) p:first-of-type{
  letter-spacing: 0.02em;
}
.final #cuerpo #texto span:nth-of-type(1) p:nth-of-type(2){
  letter-spacing: 0.036em;
}

.final #cuerpo #texto span:nth-of-type(1) p:nth-of-type(3){
  letter-spacing: 0.029em;
}

.final #cuerpo #texto span:nth-of-type(1) p:nth-of-type(4){
  letter-spacing: 0.02em;
}


.final #cuerpo #fechaFirma{
  display: grid;
  grid-column: 1/3;
  grid-row: 1/2;
  justify-content: first baseline;
  margin-top: 2em;
  font-weight: 100;
  font-size: 0.94em;
}

.final #cuerpo #fechaFirma>div:first-of-type {
  
  justify-self: end;
}

.final #cuerpo #fechaFirma #firma{
  justify-self: center;
  border: solid 1px;
  padding: 0 0.5em;
  margin-top: 2em;
}

.final #cuerpo #fechaFirma #firma p:first-of-type {
  margin-top: 0;
  margin-bottom: 5.5em;
  text-decoration: underline;
  
}

.final #cuerpo #fechaFirma #firma p:last-of-type{
  margin-bottom: 0;
}


</style>
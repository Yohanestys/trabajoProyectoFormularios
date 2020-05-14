<template>
    <div id="formilarioFaceEjecucion">
        <button @click="downloadWithCSS">Descargar</button><br><br>

      <div class="ejecucion" ref="content">
          <div id="clm">
              <img alt="Clm logo" src="../../assets/img/anexo3/clmAnexo3.jpg">
          </div>
            <div id="pe">
              <span>CONSEJERÍA DE EDUCACIÓN,  CULTURA Y DEPORTES</span>
              <span>DIRECCIÓN GENERAL DE PROGRAMAS, ATENCIÓN A LA DIVERSIDAD Y FORMACIÓN PROFESIONAL</span>
            </div>
            <div id="unionEuropea">
              <img alt="Enseñansas logo" src="../../assets/img/anexo3/unionEuropaAnexo3.png">
            </div>

            <div id="convenio">
              <span>FORMACIÓN EN CENTROS DE TRABAJO</span>
              <span>HOJA SEMANAL DEL ALUMNO</span>      
            </div>

            <div id="tablaDatos">
              <table>
                  <tr>
                      <td>
                        <p>CENTRO DOCENTE:  <span>I.E.S. EL MEJOR DE LA PROVINCIA</span>  CÓDIGO: <span>45000000</span></p>
                        <p>ALUMNO: <span>JOSÉ ANTONIO ANGELINA LUNA</span></p>
                        <p>PROFESOR – TUTOR: <span>TÚ MISMO/A (no puede ser otro/a)</span></p>
                      </td>
                      <td>
                        <p>CENTRO DE TRABAJO: <span>LA MEJOR DE LA PROVINCIA, S.L.</span></p>
                        <p>RESPONSABLE DE LA F.C.T.: <span>/A DE TAL Y DE TAL</span></p>
                        <p>ÁREA O DARTAMENTO DEL CENTRO DE TRABAJO: <span>OFICINA TÉCNICA</span></p>
                      </td>
                      <td>
                        Anexo III
                      </td>
                  </tr>
                  <tr>
                      <td>
                        <p>FAMILIA PROFESIONAL: <span>EDIFICACIÓN Y OBRA CIVIL</span></p>
                      </td>
                      <td colspan="2">
                        <p>PERIODO:  <span>Del 01-04-2019 al 19-06-2019</span></p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                        <p>CICLO FORMATIVO: <span>G.S. PROYECTOS DE EDIFICACIÓN (LOE)</span></p>
                      </td>
                      <td colspan="2">
                        HORAS: <span>400</span>
                      </td>
                  </tr>
              </table>
            </div>

            <div id="tablaActividades">
                <table>
                    <tr>
                        <th></th>
                        <th>ACTIVIDADES DESARROLLADAS</th>
                        <th>TIEMPO EMPLEADO</th>
                        <th>OBSERVACIONES</th>
                    </tr>
                    <tr>
                        <td>
                          <span>1ª</span> 
                          <span>JORNADA</span>
                          <span>LUNES 01-04-2019</span>
                        </td>
                        <td>
                          <span>PRESENTACIÓN A TODAS LA PERSONAS QUE TRABAJAN EN LA EMPRESA</span>
                          <span>DEL PUESTO DE TRABAJO (software disponible, bases de datos de la</span>
                          <span>ón, ficheros de planos, de mediciones y presupuestos etc.)</span>
                        </td>
                        <td>
                          <span>1 hora</span>
                          <span>7 horas</span>
                        </td>
                        <td>
                          <span>Versiones del software disponible diferentes a</span>
                          <span>las utilizadas en el aula técnica del I.E.S.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span>2ª</span> 
                          <span>JORNADA</span>
                          <span>MARTES 02-04-2019</span>
                        </td>
                        <td>
                          <span>DISEÑO DE PLANOS EN 2D y 3D (plantas y secciones) DE UN EDIFICIO RESIDENCIAL</span>
                          <span>DESTINADO A RESIDENCIA COLECTIVA (Hotel) CON SOFTWARE “B.I.M.” REVIT</span>
                        </td>
                        <td>
                          <span>8 horas</span>
                        </td>
                        <td>
                          <span>Se ha partido de croquis acotados existentes.</span>
                        </td>
                    </tr> 
                    <tr>
                        <td>
                          <span>3ª</span> 
                          <span>JORNADA</span>
                          <span>MIÉRCOLES 03-04-2019</span>
                        </td>
                        <td>
                          <span>DISEÑO DE PLANOS EN 2D y 3D (plantas y secciones) DE UN EDIFICIO RESIDENCIAL</span>
                          <span>DESTINADO A RESIDENCIA COLECTIVA (Hotel) CON SOFTWARE “B.I.M.” REVIT</span>
                        </td>
                        <td>
                          <span>8 horas</span>
                        </td>
                        <td>
                          <span>Se ha partido de croquis acotados existentes.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span>4ª</span> 
                          <span>JORNADA</span>
                          <span>JUEVES 04-04-2019</span>
                        </td>
                        <td>
                          <span>ELABORACIÓN DE MEDICIONES Y PRESUPUESTOS DE UN EDIFICIO RESIDENCIAL DESTINADO A</span>
                          <span>RESIDENCIA COLECTIVA (Hotel) CON SOFTWARE “CYPE” + BASE DE PRECIOS DE LA</span>
                          <span>CONSTRUCCIÓN “PRECIO CENTRO”.</span>
                        </td>
                        <td>
                          <span>8 horas</span>
                        </td>
                        <td>
                          <span>La Base de Precios de la Construcción utilizada</span>
                          <span>ha sido la del Colegio Oficial de Aparejadores,</span>
                          <span>Arquitectos Técnicos e Ingenieros de Edificación</span>
                          <span>de Guadalajara 2018.</span>                                                    
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span>5ª</span> 
                          <span>JORNADA</span>
                          <span>VIERNES 05-04-2019</span>
                        </td>
                        <td>
                          <span>VISITA A OBRA (acompañado por el Responsable del Centro de Trabajo) PARA</span>
                          <span>CROQUIZACIÓN Y MEDICIÓN (por triangulación con cinta métrica) DE UNA PARCELA</span>
                          <span>DESTINADA A LA CONSTRUCCIÓN DE UNA VIVIENDA UNIFAMILIAR AISLADA.</span>
                          <span>PREPARACIÓN DE LAS HERRAMIENTAS Y MATERIALES (cúter, reglas metálicas, madera de</span> 
                          <span>balsa, colas, lijas, spray, etc.) PARA EL INICIO DE LA MAQUETA FÍSICA VOLUMÉTRICA DEL</span>                                                    
                          <span>EDIFICIO RESIDENCIAL DESTINADO A RESIDENCIA COLECTIVA (Hotel)</span>
                        </td>
                        <td>
                          <span>4 horas</span>
                          <span>4 horas</span>
                        </td>
                        <td>
                          <span>La visita a obra ha sido muy interesante, el</span>
                          <span>Responsable del Centro de Trabajo me ha</span>
                          <span>indicado como se debe medir con la cinta</span>
                          <span>métrica en días con aire como hoy.</span>

                        </td>
                    </tr>                                                                    
                </table>
                <div id="firmas">
                  <p>FIRMA DEL ALUMNO</p>
                  <p><span>Vº Bº EL RESPONSABLE</span><span>DEL CENTRO DE TRABAJO</span></p><p>Vº Bº PROFESOR-TUTOR</p>
                  <p><span>SELLOS (muy importante)</span></p>

                  <p>Fdo.: <span>JOSÉ ANTONIO ANGELINA LUNA</span></p>
                  <p> Fdo.: <span>ZUTANITO/A DE TAL Y DE TAL</span></p>
                  <p>Fdo.: <span>TÚ MISMO/A (no puede ser otro/a)</span></p>
                  
                </div>

            </div>

      </div>
    </div>
</template>

<style scoped>
#formilarioFaceEjecucion button {
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

#formilarioFaceEjecucion button:hover{
    background-color: lightgray;
    color: #fff;
}

@media (max-width: 1541px){
  .ejecucion div{
    display: none;
  }

    #formilarioFaceEjecucion button{
        display: none;
  }

  .ejecucion:first-of-type{
    background-color: rgba(255, 255, 255, 0.5);
  }

}

@media (max-width: 1621px) {
  .ejecucion #tablaDatos table tr td{
    padding: 0 2.7em;
  }
  .ejecucion #tablaActividades table tr th,
  .ejecucion #tablaActividades table tr td{
    padding: 0 1.3em;
  }




}


@media (min-width: 1621px) and (max-width: 1654px) {
  .ejecucion #tablaDatos table tr td{
    padding: 0 2.8em;
  }
  .ejecucion #tablaActividades table tr th,
  .ejecucion #tablaActividades table tr td{
    padding: 0 1.4em;
  }


}


@media (min-width: 1654px) and (max-width: 1675px) {
  .ejecucion #tablaDatos table tr td{
    padding: 0 2.9em;
  }
  .ejecucion #tablaActividades table tr th,
  .ejecucion #tablaActividades table tr td{
    padding: 0 1.5em;
  }


}

@media (min-width: 1675px) and (max-width: 1686px) {
  .ejecucion #tablaDatos table tr td{
    padding: 0 3em;
  }
  .ejecucion #tablaActividades table tr th,
  .ejecucion #tablaActividades table tr td{
    padding: 0 1.5em;
  }


}




.ejecucion{
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
  padding-top: 2em;
  position: relative;
  width: calc(100% + 10%);
  left: -5%;
  
}

.ejecucion #clm{
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: self-start;
  /*background-color: chocolate;*/

}

.ejecucion #clm img:first-of-type {
  width: 42%;
  height: 95%;
  float: left;
  margin-left: 15%;

}

.ejecucion #pe{
  grid-column: 2/6;
  grid-row: 1/2;
  color: #000;   
}

.ejecucion #pe span {
  font-size: 0.8em;
  text-decoration:underline;
  box-decoration-break: clone;

}

.ejecucion #pe span::before {
  content: "";
  display: block;
    
}



.ejecucion #unionEuropea{
  grid-column: 6/7;
  grid-row: 1/2;
  /*background-color: chocolate;*/
 
}

.ejecucion #unionEuropea img{
  width: 36%;
  height: 80%;
  float: right;
  margin-right: 15%;
  padding: 0.1em;
  border: solid 1px;

}

.ejecucion #convenio{
  grid-column: 1/7;
  grid-row: 2/3; 
  color: #000;
  justify-self: center;
  }


.ejecucion #convenio span:first-of-type{
  display: block;
  text-decoration: underline;
  margin-left: 3em;
  text-align: left;
}

.ejecucion #convenio span:nth-of-type(2){
    display: block;
    margin-left: 3em;
    margin-top: 0.4em;
    text-align: left;
    font-family: 'Times New Roman', Times, serif;
  }

.ejecucion #tablaDatos{
  grid-column: 1/7;
  grid-row: 3/4;
  font-size: 0.8em;
  margin-top: -0.3em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  white-space: nowrap;
  line-height: 1.6;
  justify-self: center;

}

.ejecucion #tablaDatos p {
  margin: 0;
  padding: 0;
}

.ejecucion #tablaDatos p span {
  font-size: 0.9em;
  color: red;

}


.ejecucion #tablaDatos table td{
  border-top: solid 1px;  
  border-left: solid 1px #000;
  padding: 0 3.20em;

}

.ejecucion #tablaDatos table tr:first-of-type td:last-of-type{ /* Anexo color */
  color: black;
}

.ejecucion #tablaDatos table td:last-of-type{
  border-right: solid 1px;

}

.ejecucion #tablaDatos table tr:last-of-type td{
  border-bottom: solid 1px;

}

.ejecucion #tablaActividades{
  grid-column: 1/7;
  grid-row: 4/5;
  font-size: 0.9em;
  margin: 1em 2em;
  line-height: 1.4;
  justify-self: center;

}

.ejecucion #tablaActividades table{
  border: 0;
  
}
.ejecucion #tablaActividades table th:first-of-type{
  border:  0;
}

.ejecucion #tablaActividades table span::before{
  content: "";
  display: block;
}

.ejecucion #tablaActividades table th{
  font-size: 1em;
  color: #000;
  font-weight: bold;
}

.ejecucion #tablaActividades table td:first-of-type span:first-of-type,
.ejecucion #tablaActividades table td:first-of-type span:first-of-type {
  font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif; 
}

.ejecucion #tablaActividades table td:first-of-type{
  font-size: 1em;
  text-align: center;
  padding: 0 2em 0 2em;
  color: black;

}

.ejecucion #tablaActividades table td:nth-of-type(3){
  text-align: center;
  padding: 0 5em 0 5em;

}

.ejecucion #tablaActividades table tr:nth-of-type(6) td:nth-of-type(3) span:nth-of-type(2){
  display: block;
  padding-top: 2.5em;
}

.ejecucion #tablaActividades table td:first-of-type span:last-of-type{
  font-size: 0.9em;
  color: red;
}

.ejecucion #tablaActividades table td{
  font-size: 0.9em;
  text-align: justify;
  font-family:  Calibri, 'Trebuchet MS', sans-serif;
  padding: 0 1em 0 1em;

}

.ejecucion #tablaActividades table th,
.ejecucion #tablaActividades table td{
  border-top: solid 2px gray;
  border-left: solid 2px gray;
}

.ejecucion #tablaActividades table th:last-of-type,
.ejecucion #tablaActividades table td:last-of-type{
  border-right: solid 2px gray;
}

.ejecucion #tablaActividades table tr:last-of-type td{
  border-bottom: solid 2px;
}


table{
  padding: 0;
  margin: 0;
  border-spacing: 0;
}



.ejecucion table {
  font-family: Candara, sans-serif;
  font-size: 10pt;
  letter-spacing: -0.1pt;
}

.ejecucion #firmas{
  display: grid;
  margin-top: 1em;
  margin-left: 3em;
  line-height: normal;

}


.ejecucion #firmas p:first-of-type{
    grid-column: 1/2;
    grid-row: 1/2;
}

.ejecucion #firmas p:nth-of-type(2) {
    grid-column: 2/3;
    grid-row: 1/2;
    
}

.ejecucion #firmas p:nth-of-type(2) span::before{
  content: "";
  display: block;
}

.ejecucion #firmas p:nth-of-type(3) {
    grid-column: 3/4;
    grid-row: 1/2;
    
}

.ejecucion #firmas p:nth-of-type(4){
    grid-column: 2/4;
    grid-row: 2/3;
    color: red;
    align-self: center;
    justify-self: center;
    font-size: 1.4em;
    white-space: nowrap;
    line-height: normal;
    margin: 0;
    margin-top: -0.8em;
    padding: 0;
    border: solid 1px #000;
    
}

.ejecucion #firmas p:nth-of-type(5){
    grid-column: 1/2;
    grid-row: 3/4;
    font-size: 0.9;
}

.ejecucion #firmas p:nth-of-type(6) {
    grid-column: 2/3;
    grid-row: 3/4;
    justify-self: center;
    font-size: 0.9em;

}

.ejecucion #firmas p:nth-of-type(7) {
    grid-column: 3/4;
    grid-row: 3/4;
    justify-self: center;
    font-size: 0.9em;

    
}

.ejecucion #firmas p:nth-of-type(5) span,
.ejecucion #firmas p:nth-of-type(6) span,
.ejecucion #firmas p:nth-of-type(7) span{
  color: red;
  
}

</style>

<script>
import {mapGetters, mapMutations} from "vuex"
import jsPDF from "jspdf";
import html2canvas from "html2canvas"
export default {
  name: "formularioEjecucion",
  props: {
    msg: String
  },

computed: {
    ...mapGetters(['getAnexo1']),
},

  methods: {
    downloadWithCSS() {
      var w = document.getElementsByClassName("ejecucion")[0].offsetWidth;
      var h = document.getElementsByClassName("ejecucion")[0].offsetHeight;
      const doc = new jsPDF("L", "px", "a4");
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      /** WITH CSS */
      //var canvasElement = document.createElement('canvas');
      var element = document.getElementsByClassName("ejecucion")[0];
      html2canvas(element).then((canvas)=>{
              var img = canvas.toDataURL("image/png", 1.0);
              doc.addImage(img, 'PNG',-3,0, width, height);
              doc.save('anexo3.pdf');
            
      });
    },

  }
};
</script>
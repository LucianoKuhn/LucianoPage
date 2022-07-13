//VARIABLES OBTENER FECHAS
var hoy = new Date();
var fecha = hoy.toDateString();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var diaSemana = fecha.substring(0,3);
var segundosActual = hoy.getSeconds(); 
var inicioDelDia = "00:00:00"

//VARIABLES MATERIAS QUE SIEMPRE INICIAN/TERMINAN A LA MISMA HORA
var inicioParadigmas="20:45:00", inicioAnalisis="19:00:00", inicioAlgebra='08:00:00', inicioAnalisis1='08:00:00';
var finParadigmas="23:45:00", finAnalisis="24:00:00", finAlgebra='12:15:00', finAnalisis1='12:15:00';


//VARIABLES DE MATERIAS CON HORARIOS QUE CAMBIAN (EN 2DO CUATRIMESTRE, 2DO AÑO NO HAY NINGUNO)

//VARIABLES MATERIAS LUNES

//VARIABLES MATERIAS MARTES

//VARIABLES MATERIAS MIERCOLES

//VARIABLES MATERIAS JUEVES

//VARIABLES MATERIAS VIERNES


//ESTO LLENA CON 0 LOS CAMPOS SIMPLES DE LA HORA
function arreglarHora (pasarHora){
    var horaArreglada;

    if (pasarHora.substring(0,2) >= "10" &&  pasarHora.substring(1,2) != ":"){ //hora formato doble
    
        if ((pasarHora.substring(3,5) >= "10" && pasarHora.substring(4,5)) != ":"){ //min formato doble
            horaArreglada = (pasarHora.substring(0,2)+":"+pasarHora.substring(3,5));
        } else { //min formato simple
            horaArreglada = (pasarHora.substring(0,2)+":"+"0"+ pasarHora.substring(3,4));
        }
    
    } else { //hora formato simple
        if (pasarHora.substring(2,4) >= "10" && pasarHora.substring(3,4) != ":"){ //min formato doble
            horaArreglada = ("0"+pasarHora.substring(0,1)+":"+pasarHora.substring(2,4));
        } else { //min formato simple
            horaArreglada = ("0"+pasarHora.substring(0,1)+":"+ "0"+pasarHora.substring(2,3));          
        }   
    }

    return horaArreglada;
}


var horaDefinitiva = arreglarHora(hora);

function CalcularHora (horario){
    var horaMateria = horario.substring(0,2);
    var minMateria = horario.substring(3,5);
    var horaActual = horaDefinitiva.substring(0,2);
    var minActual = horaDefinitiva.substring(3,5);
    var HoraFaltante = horaMateria-horaActual-1;
    var minFaltante = ((60 - parseInt(minActual)) + parseInt(minMateria));
    
    if ( minFaltante >= 60 ){
        minFaltante = minFaltante - 60;    
        HoraFaltante = HoraFaltante + 1;
    }
    var faltante = HoraFaltante +":"+ minFaltante;

    faltante = arreglarHora(faltante);
    return faltante;  
}




switch(diaSemana){
   case 'Mon':
      document.form_horario.text_horario.value =horaDefinitiva + ' - Lunes';
   break;
   case 'Tue':
      document.form_horario.text_horario.value =horaDefinitiva + ' - Martes';
   break;
   case 'Wed':
      document.form_horario.text_horario.value =horaDefinitiva + ' - Miércoles';
   break;
   case 'Thu':
      document.form_horario.text_horario.value =horaDefinitiva + ' - Jueves';
   break;
   case 'Fri':
      document.form_horario.text_horario.value =horaDefinitiva + ' - Viernes';
   break;
   case 'Sat':
      document.form_horario.text_horario.value =horaDefinitiva + ' - Sábado';
   break;
   case 'Sun':
      document.form_horario.text_horario.value =horaDefinitiva + ' - Domingo';
   break;
}



switch (diaSemana){

     case 'Mon': //LUNES

         document.querySelector('.grid-item:nth-child(2)').style.backgroundColor  = '#FF3402';     
         document.querySelector('.grid-item:nth-child(8)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(14)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(20)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(26)').style.backgroundColor  = '#FF7957';
 
    //HORARIO ANALISIS 1    
      if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finAnalisis1) {

            document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(14)').style.backgroundColor  = '#FF3402';  
           
            if (horaDefinitiva >= inicioAnalisis1){           
                document.form_materia.text_materia.value ="Terminas de cursar Analisis Mat. en " +  CalcularHora(finAnalisis1).substring(1,2) + " horas y " + CalcularHora(finAnalisis1).substring(3,5) + " minutos."; 
                if (CalcularHora(finAnalisis1).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Terminas de cursar Analisis Mat. en " + CalcularHora(finAnalisis1).substring(3,5) + " minutos."; 
                 }
            } else {

             if (horaDefinitiva.substring(0,1) == "0"){
       
                document.form_materia.text_materia.value ="Cursas Analisis Mat. en " +  CalcularHora(inicioAnalisis1).substring(1,2) + " horas y " +CalcularHora(inicioAnalisis1).substring(3,5) + " minutos.";    
             }    
             if (CalcularHora(inicioAnalisis1).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Cursas Analisis Mat. en " + CalcularHora(inicioAnalisis1).substring(3,5) + " minutos."; 
             }
           } 
        
           //HORARIO PARADIGMAS
        } else {
            document.querySelector('.grid-item:nth-child(26)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(25)').style.backgroundColor  = '#FF3402';  
           
            if (horaDefinitiva >= inicioParadigmas){           
                document.form_materia.text_materia.value ="Terminas de cursar Paradigmas en " +  CalcularHora(finParadigmas).substring(1,2) + " horas y " + CalcularHora(finParadigmas).substring(3,5) + " minutos."; 
                if (CalcularHora(finParadigmas).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Terminas de cursar Paradigmas en " + CalcularHora(finParadigmas).substring(3,5) + " minutos."; 
                 }
            } else {
             if (horaDefinitiva.substring(0,1) == "0"){
       
                document.form_materia.text_materia.value ="Cursas Paradigmas en " +  CalcularHora(inicioParadigmas).substring(0,2) + " horas y " +CalcularHora(inicioParadigmas).substring(3,5) + " minutos.";    
             } else {
                document.form_materia.text_materia.value ="Cursas Paradigmas en " +  CalcularHora(inicioParadigmas).substring(1,2) + " horas y " + CalcularHora(inicioParadigmas).substring(3,5) + " minutos.";   
             }     
             if (CalcularHora(inicioParadigmas).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Cursas Paradigmas en " + CalcularHora(inicioParadigmas).substring(3,5) + " minutos."; 
             }
           }   
        }

    break;

     case 'Tue': //MARTES
         document.querySelector('.grid-item:nth-child(3)').style.backgroundColor  = '#FF3402';
         document.querySelector('.grid-item:nth-child(9)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(15)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(21)').style.backgroundColor  = '#FF7957';

         if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finAlgebra) {

            document.querySelector('.grid-item:nth-child(9)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(7)').style.backgroundColor  = '#FF3402';  
           
            if (horaDefinitiva >= inicioAlgebra){           
                document.form_materia.text_materia.value ="Terminas de cursar Álgebra en " +  CalcularHora(finAlgebra).substring(1,2) + " horas y " + CalcularHora(finAlgebra).substring(3,5) + " minutos."; 
                if (CalcularHora(finAlgebra).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Terminas de cursar Álgebra en " + CalcularHora(finAlgebra).substring(3,5) + " minutos."; 
                 }
            } else {
   
             if (horaDefinitiva.substring(0,1) == "0"){
       
                document.form_materia.text_materia.value ="Cursas Álgebra en " +  CalcularHora(inicioAlgebra).substring(1,2) + " horas y " +CalcularHora(inicioAlgebra).substring(3,5) + " minutos.";    
             }    
             if (CalcularHora(inicioAlgebra).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Cursas Álgebra en " + CalcularHora(inicioAlgebra).substring(3,5) + " minutos."; 
             }
           }  
    //HORARIO ANALISIS DE SISTEMAS
    
    } else {
        if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finAnalisis) {
            document.querySelector('.grid-item:nth-child(19)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(21)').style.backgroundColor  = '#FF3402';  
           
            if (horaDefinitiva >= inicioAnalisis){           
                document.form_materia.text_materia.value ="Terminas de cursar Analisis en " +  CalcularHora(finAnalisis).substring(1,2) + " horas y " + CalcularHora(finAnalisis).substring(3,5) + " minutos."; 
                if (CalcularHora(finAnalisis).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Terminas de cursar Analisis en " + CalcularHora(finAnalisis).substring(3,5) + " minutos."; 
                 }
            } else {
             if (horaDefinitiva.substring(0,1) == "0"){
       
                document.form_materia.text_materia.value ="Cursas Analisis en " +  CalcularHora(inicioAnalisis).substring(0,2) + " horas y " +CalcularHora(inicioAnalisis).substring(3,5) + " minutos.";    
             } else {
                document.form_materia.text_materia.value ="Cursas Analisis en " +  CalcularHora(inicioAnalisis).substring(1,2) + " horas y " + CalcularHora(inicioAnalisis).substring(3,5) + " minutos.";   
             }     
             if (CalcularHora(inicioAnalisis).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Cursas Analisis en " + CalcularHora(inicioAnalisis).substring(3,5) + " minutos."; 
             }
           }   
        }
     }
    break;

    case 'Wed': //MIERCOLES
         document.querySelector('.grid-item:nth-child(4)').style.backgroundColor  = '#FF3402';
         document.querySelector('.grid-item:nth-child(10)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(16)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(22)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(28)').style.backgroundColor  = '#FF7957';

     //HORARIO ANALISIS 1    
     if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finAnalisis1) {

      document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';
      document.querySelector('.grid-item:nth-child(16)').style.backgroundColor  = '#FF3402';  
     
      if (horaDefinitiva >= inicioAnalisis1){           
          document.form_materia.text_materia.value ="Terminas de cursar Analisis Mat. en " +  CalcularHora(finAnalisis1).substring(1,2) + " horas y " + CalcularHora(finAnalisis1).substring(3,5) + " minutos."; 
          if (CalcularHora(finAnalisis1).substring(0,2) == "00"){
              document.form_materia.text_materia.value ="Terminas de cursar Analisis Mat. en " + CalcularHora(finAnalisis1).substring(3,5) + " minutos."; 
           }
      } else {

       if (horaDefinitiva.substring(0,1) == "0"){
 
          document.form_materia.text_materia.value ="Cursas Analisis Mat. en " +  CalcularHora(inicioAnalisis1).substring(1,2) + " horas y " +CalcularHora(inicioAnalisis1).substring(3,5) + " minutos.";    
       }    
       if (CalcularHora(inicioAnalisis1).substring(0,2) == "00"){
          document.form_materia.text_materia.value ="Cursas Analisis Mat. en " + CalcularHora(inicioAnalisis1).substring(3,5) + " minutos."; 
       }
     }
      //HORARIO PARADIGMAS
   } else {
      document.querySelector('.grid-item:nth-child(28)').style.backgroundColor  = '#FF3402';
      document.querySelector('.grid-item:nth-child(25)').style.backgroundColor  = '#FF3402';  
     
      if (horaDefinitiva >= inicioParadigmas){           
          document.form_materia.text_materia.value ="Terminas de cursar Paradigmas en " +  CalcularHora(finParadigmas).substring(1,2) + " horas y " + CalcularHora(finParadigmas).substring(3,5) + " minutos."; 
          if (CalcularHora(finParadigmas).substring(0,2) == "00"){
              document.form_materia.text_materia.value ="Terminas de cursar Paradigmas en " + CalcularHora(finParadigmas).substring(3,5) + " minutos."; 
           }
      } else {
       if (horaDefinitiva.substring(0,1) == "0"){
 
          document.form_materia.text_materia.value ="Cursas Paradigmas en " +  CalcularHora(inicioParadigmas).substring(0,2) + " horas y " +CalcularHora(inicioParadigmas).substring(3,5) + " minutos.";    
       } else {
          document.form_materia.text_materia.value ="Cursas Paradigmas en " +  CalcularHora(inicioParadigmas).substring(1,2) + " horas y " + CalcularHora(inicioParadigmas).substring(3,5) + " minutos.";   
       }     
       if (CalcularHora(inicioParadigmas).substring(0,2) == "00"){
          document.form_materia.text_materia.value ="Cursas Paradigmas en " + CalcularHora(inicioParadigmas).substring(3,5) + " minutos."; 
       }
     }   
  }
    break;

    case 'Thu': //JUEVES
        document.querySelector('.grid-item:nth-child(5)').style.backgroundColor  = '#FF3402';
        document.querySelector('.grid-item:nth-child(11)').style.backgroundColor  = '#FF7957';
        document.querySelector('.grid-item:nth-child(17)').style.backgroundColor  = '#FF7957';
        document.querySelector('.grid-item:nth-child(23)').style.backgroundColor  = '#FF7957';
        document.querySelector('.grid-item:nth-child(29)').style.backgroundColor  = '#FF7957';

       
        //HORARIO FISICA
         /*   if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finFisicaJue) {
                document.querySelector('.grid-item:nth-child(7)').style.backgroundColor  = '#FF3402';
                document.querySelector('.grid-item:nth-child(11)').style.backgroundColor  = '#FF3402';  
               
                if (horaDefinitiva >= inicioFisicaJue){           
                    document.form_materia.text_materia.value ="Terminas de cursar Física en " +  CalcularHora(finFisicaJue).substring(1,2) + " horas y " + CalcularHora(finFisicaJue).substring(3,5) + " minutos."; 
                    if (CalcularHora(finFisicaJue).substring(0,2) == "00"){
                        document.form_materia.text_materia.value ="Terminas de cursar Física en " + CalcularHora(finFisicaJue).substring(3,5) + " minutos."; 
                     }
                } else {
                 if (horaDefinitiva.substring(0,1) == "0"){
           
                    document.form_materia.text_materia.value ="Cursas Física en " +  CalcularHora(inicioFisicaJue).substring(0,2) + " horas y " +CalcularHora(inicioFisicaJue).substring(3,5) + " minutos.";    
                 } else {
                    document.form_materia.text_materia.value ="Cursas Física en " +  CalcularHora(inicioFisicaJue).substring(1,2) + " horas y " + CalcularHora(inicioFisicaJue).substring(3,5) + " minutos.";   
                 }     
                 if (CalcularHora(inicioFisicaJue).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Cursas Física en " + CalcularHora(inicioFisicaJue).substring(3,5) + " minutos."; 
                 }
               }   
            }
       
     
    break; */

     case 'Fri': //VIERNES

          document.querySelector('.grid-item:nth-child(6)').style.backgroundColor  = '#FF3402';    
          document.querySelector('.grid-item:nth-child(12)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(18)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(24)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(30)').style.backgroundColor  = '#FF7957';

         //HORARIO ALGEBRA  
      if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finAlgebra) {

         document.querySelector('.grid-item:nth-child(12)').style.backgroundColor  = '#FF3402';
         document.querySelector('.grid-item:nth-child(7)').style.backgroundColor  = '#FF3402';  
        
         if (horaDefinitiva >= inicioAlgebra){           
             document.form_materia.text_materia.value ="Terminas de cursar Álgebra en " +  CalcularHora(finAlgebra).substring(1,2) + " horas y " + CalcularHora(finAlgebra).substring(3,5) + " minutos."; 
             if (CalcularHora(finAlgebra).substring(0,2) == "00"){
                 document.form_materia.text_materia.value ="Terminas de cursar Álgebra en " + CalcularHora(finAlgebra).substring(3,5) + " minutos."; 
              }
         } else {

          if (horaDefinitiva.substring(0,1) == "0"){
    
             document.form_materia.text_materia.value ="Cursas Álgebra en " +  CalcularHora(inicioAlgebra).substring(1,2) + " horas y " +CalcularHora(inicioAlgebra).substring(3,5) + " minutos.";    
          }    
          if (CalcularHora(inicioAlgebra).substring(0,2) == "00"){
             document.form_materia.text_materia.value ="Cursas Álgebra en " + CalcularHora(inicioAlgebra).substring(3,5) + " minutos."; 
          }
        }    
        } else {
         document.form_materia.text_materia.value ="Es momento de descansar, o estudiar... :)";
        }
     break;

     default:
        document.form_materia.text_materia.value ="Es momento de descansar, o estudiar... :)";
     break;
}




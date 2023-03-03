//VARIABLES OBTENER FECHAS
var hoy = new Date();
var fecha = hoy.toDateString();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var diaSemana = fecha.substring(0,3);
var segundosActual = hoy.getSeconds(); 
var inicioDelDia = "00:00:00"

//VARIABLES MATERIAS QUE SIEMPRE INICIAN/TERMINAN A LA MISMA HORA
var inicioIngles="08:00:00", inicioIng='17:30:00', inicioAnalisis1='08:00:00';
var finIngles="10:00:00", finIng='20:30:00', finAnalisis1='12:15:00';


//VARIABLES DE MATERIAS CON HORARIOS QUE CAMBIAN (EN 2DO CUATRIMESTRE, 2DO AÑO NO HAY NINGUNO)

//VARIABLES MATERIAS LUNES

//VARIABLES MATERIAS MARTES
var inicioDiscretaMar="17:30:00", FinDiscretaMar="19:45:00";
//VARIABLES MATERIAS MIERCOLES

//VARIABLES MATERIAS JUEVES

//VARIABLES MATERIAS VIERNES
var inicioDiscretaVier="20:45:00", FinDiscretaVier="23:15:00";


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

            document.querySelector('.grid-item:nth-child(7)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(8)').style.backgroundColor  = '#FF3402';  
           
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

        } 

    break;

     case 'Tue': //MARTES
      //HORARIO DISCRETA
         document.querySelector('.grid-item:nth-child(3)').style.backgroundColor  = '#FF3402';
         document.querySelector('.grid-item:nth-child(9)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(15)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(21)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(27)').style.backgroundColor  = '#FF7957';

         if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= FinDiscretaMar) {

            document.querySelector('.grid-item:nth-child(19)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(21)').style.backgroundColor  = '#FF3402';  
           
            if (horaDefinitiva >= inicioDiscretaMar){           
                document.form_materia.text_materia.value ="Terminas de cursar Discreta en " +  CalcularHora(FinDiscretaMar).substring(1,2) + " horas y " + CalcularHora(FinDiscretaMar).substring(3,5) + " minutos."; 
                if (CalcularHora(FinDiscretaMar).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Terminas de cursar Discreta en " + CalcularHora(FinDiscretaMar).substring(3,5) + " minutos."; 
                 }
            } else {
   
             if (horaDefinitiva.substring(0,1) == "0"){
       
                document.form_materia.text_materia.value ="Cursas Discreta en " +  CalcularHora(inicioDiscretaMar).substring(1,2) + " horas y " +CalcularHora(inicioDiscretaMar).substring(3,5) + " minutos.";    
             }    
             if (CalcularHora(inicioDiscretaMar).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Cursas Discreta en " + CalcularHora(inicioDiscretaMar).substring(3,5) + " minutos."; 
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

     //HORARIO INGLES 2    
     if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finIngles) {

      document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';
      document.querySelector('.grid-item:nth-child(16)').style.backgroundColor  = '#FF3402';  
     
      if (horaDefinitiva >= inicioIngles){           
          document.form_materia.text_materia.value ="Terminas de cursar Inglés en " +  CalcularHora(finIngles).substring(1,2) + " horas y " + CalcularHora(finIngles).substring(3,5) + " minutos."; 
          if (CalcularHora(finIngles).substring(0,2) == "00"){
              document.form_materia.text_materia.value ="Terminas de cursar Inglés en " + CalcularHora(finIngles).substring(3,5) + " minutos."; 
           }
      } else {

       if (horaDefinitiva.substring(0,1) == "0"){
 
          document.form_materia.text_materia.value ="Cursas Inglés en " +  CalcularHora(inicioIngles).substring(1,2) + " horas y " +CalcularHora(inicioIngles).substring(3,5) + " minutos.";    
       }    
       if (CalcularHora(inicioIngles).substring(0,2) == "00"){
          document.form_materia.text_materia.value ="Cursas Inglés en " + CalcularHora(inicioIngles).substring(3,5) + " minutos."; 
       }
     }
      //HORARIO INGENIERIA Y SOCIEDAD
   } else {
      document.querySelector('.grid-item:nth-child(25)').style.backgroundColor  = '#FF3402';
      document.querySelector('.grid-item:nth-child(28)').style.backgroundColor  = '#FF3402';  
     
      if (horaDefinitiva >= inicioIng){           
          document.form_materia.text_materia.value ="Terminas de cursar Ing. y Sociedad en " +  CalcularHora(finIng).substring(1,2) + " horas y " + CalcularHora(finIng).substring(3,5) + " minutos."; 
          if (CalcularHora(finIng).substring(0,2) == "00"){
              document.form_materia.text_materia.value ="Terminas de cursar Ing. y Sociedad en " + CalcularHora(finIng).substring(3,5) + " minutos."; 
           }
      } else {
       if (horaDefinitiva.substring(0,1) == "0"){
 
          document.form_materia.text_materia.value ="Cursas Ing. y Sociedad en " +  CalcularHora(inicioIng).substring(0,2) + " horas y " +CalcularHora(inicioIng).substring(3,5) + " minutos.";    
       } else {
          document.form_materia.text_materia.value ="Cursas Ing. y Sociedad en " +  CalcularHora(inicioIng).substring(1,2) + " horas y " + CalcularHora(inicioIng).substring(3,5) + " minutos.";   
       }     
       if (CalcularHora(inicioIng).substring(0,2) == "00"){
          document.form_materia.text_materia.value ="Cursas Ing. y Sociedad en " + CalcularHora(inicioIng).substring(3,5) + " minutos."; 
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

       //HORARIO ANALISIS 1    
      if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finAnalisis1) {

         document.querySelector('.grid-item:nth-child(7)').style.backgroundColor  = '#FF3402';
         document.querySelector('.grid-item:nth-child(11)').style.backgroundColor  = '#FF3402';  
        
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

     } 
       
     
    break;

     case 'Fri': //VIERNES

          document.querySelector('.grid-item:nth-child(6)').style.backgroundColor  = '#FF3402';    
          document.querySelector('.grid-item:nth-child(12)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(18)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(24)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(30)').style.backgroundColor  = '#FF7957';

         //HORARIO INGLES  
      if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finIngles) {

         document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';
         document.querySelector('.grid-item:nth-child(18)').style.backgroundColor  = '#FF3402';  
        
         if (horaDefinitiva >= inicioIngles){           
             document.form_materia.text_materia.value ="Terminas de cursar Inglés en " +  CalcularHora(finIngles).substring(1,2) + " horas y " + CalcularHora(finIngles).substring(3,5) + " minutos."; 
             if (CalcularHora(finIngles).substring(0,2) == "00"){
                 document.form_materia.text_materia.value ="Terminas de cursar Inglés en " + CalcularHora(finIngles).substring(3,5) + " minutos."; 
              }
         } else {

          if (horaDefinitiva.substring(0,1) == "0"){
    
             document.form_materia.text_materia.value ="Cursas Inglés en " +  CalcularHora(inicioIngles).substring(1,2) + " horas y " +CalcularHora(inicioIngles).substring(3,5) + " minutos.";    
          }    
          if (CalcularHora(inicioIngles).substring(0,2) == "00"){
             document.form_materia.text_materia.value ="Cursas Inglés en " + CalcularHora(inicioIngles).substring(3,5) + " minutos."; 
          }
        }    
        } else {
         document.querySelector('.grid-item:nth-child(19)').style.backgroundColor  = '#FF3402';
         document.querySelector('.grid-item:nth-child(24)').style.backgroundColor  = '#FF3402';  
        
         if (horaDefinitiva >= inicioDiscretaVier){           
             document.form_materia.text_materia.value ="Terminas de cursar Discreta en " +  CalcularHora(FinDiscretaVier).substring(1,2) + " horas y " + CalcularHora(FinDiscretaVier).substring(3,5) + " minutos."; 
             if (CalcularHora(FinDiscretaVier).substring(0,2) == "00"){
                 document.form_materia.text_materia.value ="Terminas de cursar Discreta en " + CalcularHora(FinDiscretaVier).substring(3,5) + " minutos."; 
              }
         } else {
          if (horaDefinitiva.substring(0,1) == "0"){
    
             document.form_materia.text_materia.value ="Cursas Discreta en " +  CalcularHora(inicioDiscretaVier).substring(0,2) + " horas y " +CalcularHora(inicioDiscretaVier).substring(3,5) + " minutos.";    
          } else {
             document.form_materia.text_materia.value ="Cursas Discreta en " +  CalcularHora(inicioDiscretaVier).substring(1,2) + " horas y " + CalcularHora(inicioDiscretaVier).substring(3,5) + " minutos.";   
          }     
          if (CalcularHora(inicioDiscretaVier).substring(0,2) == "00"){
             document.form_materia.text_materia.value ="Cursas Discreta en " + CalcularHora(inicioDiscretaVier).substring(3,5) + " minutos."; 
          }
        }   
     }
     break;

     default:
        document.form_materia.text_materia.value ="Es momento de descansar, o estudiar... :)";
     break;
}



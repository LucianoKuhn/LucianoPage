//VARIABLES OBTENER FECHAS
var hoy = new Date();
var fecha = hoy.toDateString();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var diaSemana = fecha.substring(0,3);

var inicioDelDia = "00:00:00"

//VARIABLES MATERIAS QUE SIEMPRE INICIAN/TERMINAN A LA MISMA HORA
var inicioAlgebra="08:00:00", inicioSintaxis="20:45:00", inicioAnalisis="19:00:00";
var finAlgebra="12:15:00", finSintaxis="24:00:00", finAnalisis="24:00:00";

//VARIABLES MATERIAS LUNES
inicioFisicaLun="18:15:00", finFisicaLun="20:30:00";  

//VARIABLES MATERIAS MARTES
inicioFisicaMar="16:30:00", finFisicaMar="19:00:00";  

//VARIABLES MATERIAS MIERCOLES
inicioInglesMie="15:00:00", finInglesMie="16:00:00";  

//VARIABLES MATERIAS JUEVES
inicioFisicaJue="19:00:00", finFisicaJue="22:15:00";  

//VARIABLES MATERIAS VIERNES
inicioInglesVie="17:30:00", finInglesVie="18:30:00";  



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
         document.querySelector('.grid-item:nth-child(32)').style.backgroundColor  = '#FF7957';

       //HORARIO ALGEBRA  
            
       if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finAlgebra) { 

        document.querySelector('.grid-item:nth-child(8)').style.backgroundColor  = '#FF3402';
        document.querySelector('.grid-item:nth-child(7)').style.backgroundColor  = '#FF3402';  
        
        if (horaDefinitiva >= inicioAlgebra){           
            document.form_materia.text_materia.value ="Terminas de cursar Álgebra en " +  CalcularHora(finAlgebra).substring(1,2) + " horas y " + CalcularHora(finAlgebra).substring(3,5) + " minutos."; 
            if (CalcularHora(finAlgebra).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Terminas de cursar Álgebra en " + CalcularHora(finAlgebra).substring(3,5) + " minutos."; 
             }
        } else {
         if (horaDefinitiva.substring(0,1) == "0"){
        
            document.form_materia.text_materia.value ="Cursas Álgebra en " +  CalcularHora(inicioAlgebra).substring(1,2) + " horas y " +CalcularHora(inicioAlgebra).substring(3,5) + " minutos.";    
         } else {
            document.form_materia.text_materia.value ="Cursas Álgebra en " +  CalcularHora(inicioAlgebra).substring(0,2) + " horas y " + CalcularHora(inicioAlgebra).substring(3,5) + " minutos.";   
         }     
         if (CalcularHora(inicioAlgebra).substring(0,2) == "00"){
            document.form_materia.text_materia.value ="Cursas Álgebra en " + CalcularHora(inicioAlgebra).substring(3,5) + " minutos."; 
         }
       }  
        
    //HORARIO FISICA    
    } else if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finFisicaLun) {

            document.querySelector('.grid-item:nth-child(14)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';  
           
            if (horaDefinitiva >= inicioFisicaLun){           
                document.form_materia.text_materia.value ="Terminas de cursar Física en " +  CalcularHora(finFisicaLun).substring(1,2) + " horas y " + CalcularHora(finFisicaLun).substring(3,5) + " minutos."; 
                if (CalcularHora(finFisicaLun).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Terminas de cursar Física en " + CalcularHora(finFisicaLun).substring(3,5) + " minutos."; 
                 }
            } else {

             if (horaDefinitiva.substring(0,1) == "0"){
       
                document.form_materia.text_materia.value ="Cursas Física en " +  CalcularHora(inicioFisicaLun).substring(0,2) + " horas y " +CalcularHora(inicioFisicaLun).substring(3,5) + " minutos.";    
             } else {
                document.form_materia.text_materia.value ="Cursas Física en " +  CalcularHora(inicioFisicaLun).substring(1,2) + " horas y " + CalcularHora(inicioFisicaLun).substring(3,5) + " minutos.";   
             }     
             if (CalcularHora(inicioFisicaLun).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Cursas Física en " + CalcularHora(inicioFisicaLun).substring(3,5) + " minutos."; 
             }
           } 
        
           //HORARIO SINTAXIS
        } else {
            document.querySelector('.grid-item:nth-child(31)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(32)').style.backgroundColor  = '#FF3402';  
           
            if (horaDefinitiva >= inicioSintaxis){           
                document.form_materia.text_materia.value ="Terminas de cursar Sintaxis en " +  CalcularHora(finSintaxis).substring(1,2) + " horas y " + CalcularHora(finSintaxis).substring(3,5) + " minutos."; 
                if (CalcularHora(finSintaxis).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Terminas de cursar Sintaxis en " + CalcularHora(finSintaxis).substring(3,5) + " minutos."; 
                 }
            } else {
             if (horaDefinitiva.substring(0,1) == "0"){
       
                document.form_materia.text_materia.value ="Cursas Sintaxis en " +  CalcularHora(inicioSintaxis).substring(0,2) + " horas y " +CalcularHora(inicioSintaxis).substring(3,5) + " minutos.";    
             } else {
                document.form_materia.text_materia.value ="Cursas Sintaxis en " +  CalcularHora(inicioSintaxis).substring(1,2) + " horas y " + CalcularHora(inicioSintaxis).substring(3,5) + " minutos.";   
             }     
             if (CalcularHora(inicioSintaxis).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Cursas Sintaxis en " + CalcularHora(inicioSintaxis).substring(3,5) + " minutos."; 
             }
           }   
        }

    break;

     case 'Tue': //MARTES
         document.querySelector('.grid-item:nth-child(3)').style.backgroundColor  = '#FF3402';
         document.querySelector('.grid-item:nth-child(9)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(15)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(21)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(27)').style.backgroundColor  = '#FF7957';
         document.querySelector('.grid-item:nth-child(33)').style.backgroundColor  = '#FF7957';

     //HORARIO FISICA  
     if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finFisicaMar) {
            
        document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';
        document.querySelector('.grid-item:nth-child(15)').style.backgroundColor  = '#FF3402';  
        
        if (horaDefinitiva >= inicioFisicaMar){           
            document.form_materia.text_materia.value ="Terminas de cursar Física en " +  CalcularHora(finFisicaMar).substring(0,1) + " horas y " + CalcularHora(finFisicaMar).substring(2,5) + " minutos."; 
            if (CalcularHora(finInglesMie).substring(0,1) == "00"){
                document.form_materia.text_materia.value ="Terminas de cursar Física en " + CalcularHora(finFisicaMar).substring(2,5) + " minutos."; 
             }
        } else {
         if (horaDefinitiva.substring(0,1) == "0"){
        
            document.form_materia.text_materia.value ="Cursas Física en " +  CalcularHora(inicioFisicaMar).substring(1,2) + " horas y " +CalcularHora(inicioFisicaMar).substring(3,5) + " minutos.";    
         } else {
            document.form_materia.text_materia.value ="Cursas Física en " +  CalcularHora(inicioFisicaMar).substring(0,2) + " horas y " + CalcularHora(inicioFisicaMar).substring(3,5) + " minutos.";   
         }     
         if (CalcularHora(inicioFisicaMar).substring(0,2) == "00"){
            document.form_materia.text_materia.value ="Cursas Física en " + CalcularHora(inicioFisicaMar).substring(3,5) + " minutos."; 
         }
       }   
    //HORARIO ANALISIS
    
    } else {
        if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finAnalisis) {
            document.querySelector('.grid-item:nth-child(25)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(27)').style.backgroundColor  = '#FF3402';  
           
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
         document.querySelector('.grid-item:nth-child(34)').style.backgroundColor  = '#FF7957';

     //HORARIO INGLES  
     if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finInglesMie) {
            
        document.querySelector('.grid-item:nth-child(22)').style.backgroundColor  = '#FF3402';
        document.querySelector('.grid-item:nth-child(19)').style.backgroundColor  = '#FF3402';  
        
        if (horaDefinitiva >= inicioInglesMie){           
            document.form_materia.text_materia.value ="Terminas de cursar Ingles en " +  CalcularHora(finInglesMie).substring(0,1) + " horas y " + CalcularHora(finInglesMie).substring(2,5) + " minutos."; 
            if (CalcularHora(finInglesMie).substring(0,1) == "00"){
                document.form_materia.text_materia.value ="Terminas de cursar Ingles en " + CalcularHora(finInglesMie).substring(2,5) + " minutos."; 
             }
        } else {
         if (horaDefinitiva.substring(0,1) == "0"){
        
            document.form_materia.text_materia.value ="Cursas Ingles en " +  CalcularHora(inicioInglesMie).substring(1,2) + " horas y " +CalcularHora(inicioInglesMie).substring(3,5) + " minutos.";    
         } else {
            document.form_materia.text_materia.value ="Cursas Ingles en " +  CalcularHora(inicioInglesMie).substring(0,2) + " horas y " + CalcularHora(inicioInglesMie).substring(3,5) + " minutos.";   
         }     
         if (CalcularHora(inicioInglesMie).substring(0,2) == "00"){
            document.form_materia.text_materia.value ="Cursas Ingles en " + CalcularHora(inicioInglesMie).substring(3,5) + " minutos."; 
         }
       }   
    //HORARIO SINTAXIS
    
    } else {
        if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finSintaxis) {
            document.querySelector('.grid-item:nth-child(31)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(34)').style.backgroundColor  = '#FF3402';  
           
            if (horaDefinitiva >= inicioSintaxis){           
                document.form_materia.text_materia.value ="Terminas de cursar Sintaxis en " +  CalcularHora(finSintaxis).substring(1,2) + " horas y " + CalcularHora(finSintaxis).substring(3,5) + " minutos."; 
                if (CalcularHora(finSintaxis).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Terminas de cursar Sintaxis en " + CalcularHora(finSintaxis).substring(3,5) + " minutos."; 
                 }
            } else {
             if (horaDefinitiva.substring(0,1) == "0"){
       
                document.form_materia.text_materia.value ="Cursas Sintaxis en " +  CalcularHora(inicioSintaxis).substring(0,2) + " horas y " +CalcularHora(inicioSintaxis).substring(3,5) + " minutos.";    
             } else {
                document.form_materia.text_materia.value ="Cursas Sintaxis en " +  CalcularHora(inicioSintaxis).substring(1,2) + " horas y " + CalcularHora(inicioSintaxis).substring(3,5) + " minutos.";   
             }     
             if (CalcularHora(inicioSintaxis).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Cursas Sintaxis en " + CalcularHora(inicioSintaxis).substring(3,5) + " minutos."; 
             }
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
        document.querySelector('.grid-item:nth-child(35)').style.backgroundColor  = '#FF7957';

        //HORARIO ALGEBRA 
        
        if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finAlgebra) { 

         document.querySelector('.grid-item:nth-child(11 )').style.backgroundColor  = '#FF3402';
         document.querySelector('.grid-item:nth-child(7)').style.backgroundColor  = '#FF3402';  
         
         if (horaDefinitiva >= inicioAlgebra){           
             document.form_materia.text_materia.value ="Terminas de cursar Álgebra en " +  CalcularHora(finAlgebra).substring(1,2) + " horas y " + CalcularHora(finAlgebra).substring(3,5) + " minutos."; 
             if (CalcularHora(finAlgebra).substring(0,2) == "00"){
                 document.form_materia.text_materia.value ="Terminas de cursar Álgebra en " + CalcularHora(finAlgebra).substring(3,5) + " minutos."; 
              }
         } else {
          if (horaDefinitiva.substring(0,1) == "0"){
         
             document.form_materia.text_materia.value ="Cursas Álgebra en " +  CalcularHora(inicioAlgebra).substring(1,2) + " horas y " +CalcularHora(inicioAlgebra).substring(3,5) + " minutos.";    
          } else {
             document.form_materia.text_materia.value ="Cursas Álgebra en " +  CalcularHora(inicioAlgebra).substring(0,2) + " horas y " + CalcularHora(inicioAlgebra).substring(3,5) + " minutos.";   
          }     
          if (CalcularHora(inicioAlgebra).substring(0,2) == "00"){
             document.form_materia.text_materia.value ="Cursas Álgebra en " + CalcularHora(inicioAlgebra).substring(3,5) + " minutos."; 
          }
        } 
        //HORARIO FISICA
        
        } else {
            if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finFisicaJue) {
                document.querySelector('.grid-item:nth-child(17)').style.backgroundColor  = '#FF3402';
                document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';  
               
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
         }
     
    break;

     case 'Fri': //VIERNES

          document.querySelector('.grid-item:nth-child(6)').style.backgroundColor  = '#FF3402';    
          document.querySelector('.grid-item:nth-child(12)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(18)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(24)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(30)').style.backgroundColor  = '#FF7957';
          document.querySelector('.grid-item:nth-child(36)').style.backgroundColor  = '#FF7957';

         //HORARIO INGLES 
         if (horaDefinitiva >= inicioDelDia && horaDefinitiva <= finInglesVie) {
            document.querySelector('.grid-item:nth-child(19)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(24)').style.backgroundColor  = '#FF3402';  
            
            if (horaDefinitiva >= inicioInglesVie){           
                document.form_materia.text_materia.value ="Terminas de cursar Ingles en " +  CalcularHora(finInglesVie).substring(1,2) + " horas y " + CalcularHora(finInglesVie).substring(3,5) + " minutos."; 
                if (CalcularHora(finInglesVie).substring(0,2) == "00"){
                    document.form_materia.text_materia.value ="Terminas de cursar Ingles en " + CalcularHora(finInglesVie).substring(3,5) + " minutos."; 
                 }
            } else {
             if (horaDefinitiva.substring(0,1) == "0"){
       
                document.form_materia.text_materia.value ="Cursas Ingles en " +  CalcularHora(inicioInglesVie).substring(0,2) + " horas y " +CalcularHora(inicioInglesVie).substring(3,5) + " minutos.";    
             } else {
                document.form_materia.text_materia.value ="Cursas Ingles en " +  CalcularHora(inicioInglesVie).substring(1,2) + " horas y " + CalcularHora(inicioInglesVie).substring(3,5) + " minutos.";   
             }     
             if (CalcularHora(inicioInglesVie).substring(0,2) == "00"){
                document.form_materia.text_materia.value ="Cursas Ingles en " + CalcularHora(inicioInglesVie).substring(3,5) + " minutos."; 
             }
           }   
        }
     break;

     default:
        document.form_materia.text_materia.value ="Es momento de descansar, o estudiar... :)"; 
     break;
}






//ASIGNAR TEXTO A LOS TEXT AREA DE CADA VEHICULO
document.form.text_area.value ='           -Mitsubishi Lancer GLS- \n\n  ▪Año:  2016 \n  ▪Motor:  2.0L 154HP \n  ▪Carrocería:   Sedan \n  ▪Fecha: 25/01/2022 \n ▪Valor Aprox: 15.000 USD';

document.form2.text_area2.value ='               -Ford F-150 Raptor- \n\n  ▪Año:  2021 \n  ▪Motor:  3.5L Bi-turbo V6 456HP \n  ▪Carrocería:   Pick-Up \n  ▪Fecha: 07/02/2022 \n ▪Valor Aprox: 160.000 USD';

document.form3.text_area3.value ='               -Ford F-150 Raptor- \n\n  ▪Año:  2020 \n  ▪Motor:  3.5L Bi-turbo V6 456HP \n  ▪Carrocería:   Pick-Up \n  ▪Fecha: 27/03/2021 \n ▪Valor Aprox: 100.000 USD';

document.form4.text_area4.value ='               -Chevrolet Camaro- \n\n  ▪Año:  2014 \n  ▪Motor:  6.2L V8 405HP \n  ▪Carrocería:   Coupé \n  ▪Fecha: ... \n ▪Valor Aprox: 50.000 USD';


//FUNCIÓN QUE MUESTRA LA CARROCERÍA SELECCIONADA
function FiltrarCarroceria(){
 let Selector = document.querySelector('.Div-selectorAutos_select');
 
 if (Selector.value == 'Sedan'){
     document.querySelector('.ContenedorSedan').style.display = '';
     document.querySelector('.ContenedorPickUp').style.display = 'none';
     document.querySelector('.ContenedorCoupe').style.display = 'none';

     
 } else if (Selector.value == 'Pick-Up'){
    document.querySelector('.ContenedorPickUp').style.display = ''; 
    document.querySelector('.ContenedorSedan').style.display = 'none'; 
    document.querySelector('.ContenedorCoupe').style.display = 'none';

 } else if (Selector.value == 'Todos') {
    document.querySelector('.ContenedorPickUp').style.display = ''; 
    document.querySelector('.ContenedorSedan').style.display = ''; 
    document.querySelector('.ContenedorCoupe').style.display = '';

 } else if (Selector.value == 'Coupe'){
    document.querySelector('.ContenedorPickUp').style.display = 'none'; 
    document.querySelector('.ContenedorSedan').style.display = 'none'; 
    document.querySelector('.ContenedorCoupe').style.display = '';  
 }

}
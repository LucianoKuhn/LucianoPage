var hoy = new Date();
var fecha = hoy.toDateString();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var diaSemana = fecha.substring(0,3);

//document.querySelector('.grid-item:nth-child(2)').style.backgroundColor  = 'green';;



switch (diaSemana){
    case 'Mon':
        document.querySelector('.grid-item:nth-child(2)').style.backgroundColor  = '#FF3402'; //rojo

        if (hora >= '06:0:00' && hora <= '12:15:00') {
            document.querySelector('.grid-item:nth-child(8)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(7)').style.backgroundColor  = '#FF3402'; 

        } else if (hora >= '12:15:00' && hora <= '20:30:00') {
           document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';
           document.querySelector('.grid-item:nth-child(14)').style.backgroundColor  = '#FF3402';
           
        } else {
            document.querySelector('.grid-item:nth-child(31)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(32)').style.backgroundColor  = '#FF3402';  
        }
    break;

    case 'Tue':
        document.querySelector('.grid-item:nth-child(3)').style.backgroundColor  = '#FF3402';

        if (hora >= '06:0:00' && hora < '19:0:00') {
            document.querySelector('.grid-item:nth-child(15)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';           
        } else {
           document.querySelector('.grid-item:nth-child(27)').style.backgroundColor  = '#FF3402';
           document.querySelector('.grid-item:nth-child(25)').style.backgroundColor  = '#FF3402';
        }
    break;

    case 'Wed':
    document.querySelector('.grid-item:nth-child(4)').style.backgroundColor  = '#FF3402';

        if (hora >= '06:0:00' && hora <= '17:0:00') {
            document.querySelector('.grid-item:nth-child(22)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(19)').style.backgroundColor  = '#FF3402';           
        } else {
           document.querySelector('.grid-item:nth-child(31)').style.backgroundColor  = '#FF3402';
           document.querySelector('.grid-item:nth-child(34)').style.backgroundColor  = '#FF3402';
        }
    break;

    case 'Thu':
        document.querySelector('.grid-item:nth-child(5)').style.backgroundColor  = '#FF3402';

        if (hora >= '06:0:00' && hora <= '12:15:00') {
            document.querySelector('.grid-item:nth-child(11)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(7)').style.backgroundColor  = '#FF3402';           
        } else {
           document.querySelector('.grid-item:nth-child(17)').style.backgroundColor  = '#FF3402';
           document.querySelector('.grid-item:nth-child(13)').style.backgroundColor  = '#FF3402';
        }
    break;

    case 'Fri':
        document.querySelector('.grid-item:nth-child(6)').style.backgroundColor  = '#FF3402';

        if (hora >= '06:0:00' && hora <= '18:30:00') {
            document.querySelector('.grid-item:nth-child(24)').style.backgroundColor  = '#FF3402';
            document.querySelector('.grid-item:nth-child(19)').style.backgroundColor  = '#FF3402';           
        }
    break;
}


document.write(diaSemana);
document.write(hora);
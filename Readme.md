## Dapp para la gestión de la Criptomoneda ERC20: RCC

La Dapp busca gestionar por una parte una lista de Cuentas Asociadas que gestionan cantidades de un nuevo token RCC de tipo ERC20 y por otra la Dapp permite realizar algunas operaciones sobre una criptomoneda RCC. 

Cualquier cuenta externa dentro de wallet de Metamask o cualquier otra como la gestionada por Ganache podrá realizar petición de criptomoneda a las cuentas asociadas a través de la DAPP. Las cuentas asociadas podrán aprobar o no esta petición.

Desde la Dapp además se podrá llevar además cualquier gestión con la moneda RCC: Envío a otra cuenta, Generación de la criptomoneda RCC (Mint) y podrá aprobar una petición (siempre que se trate de una cuenta asociada)

------
Se han desarrollado dos contratos en Solidity en los respectivos ficheros:
- RCC.sol
- RccDao.sol

Los contratos heredan además las propieades de los contratos abstractos Ownable.sol y Pausable.sol, creados para este proyecto.

Los contratos se ubican en el directorio: truffle/contracts. Su compilación y migración del código en Solidity se ha llevado a cabo mediante Truffle.


----

La aplicación se ha desarrollado bajo la plataforma Angular donde se almacena el código en la carpeta /angular. En /angular/dist se encuentra la versión compilada para abrir directamente como aplicación Web. En la carpeta de angular/assets/ se encuentran tres carpetas que almacena los ficheros resultado de la migración con Truffle:

  `/angular/dist/assets/contracts_ganache`
  `/angular/dist/assets/contracts_rinkeby`
  `/angular/dist/assets/contracts`


Al ejecutar la aplicación solo se utiliza la carpeta /`angular/dist/assets/contracts`. Se deberá de copiar el contenido dependiendo del proveedor de blockchain que se utilice

-----

El aspecto de la aplicación se muestra en la siguiente imagen:

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Inicio.png)]

Se pulsa ADD para añadir una cuenta a la lista de cuentas asociadas:

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/new_associated.png)]

Una vez asociadas varias cuentas se mostrarán en la lista de Cuentas Asociadas para llevar a cabo peticiones de criptomoneda RCC pulsando el botón ASK

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/associated.png)]

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/ask.png)]

Desde el apartado de RCC Management se podrán llevar a cavo Envíos de RCC

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/send.png)]

Generación de moneda RCC

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/mint.png)]

Y llevar a cabo una aprobación de una petición de moneda

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/aprove.png)]

## Instalación.
- Cuando descarguemos de github todo el código del proyecto, la aplicación de ángular no tendrá la carpeta de node_modules. para ello tendremos que instalar a través del gestor de paquetes npm:
 `/angular/npm install`

- Una vez que tengamos la aplicación instalada el siguiente paso es la contrucción de la aplicación Web, pero antes comprobamos que no hay problemas de compilación ejecutando el comando `ng serve` y comprobaremos si en el navegador podemos abrir la aplicación en la ruta localhost:4200
 `/angular/ng serve`
` ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **`
      
- Una vez comprobado que se ejecuta en el navegador cortamos el servicio que está ejecutando (Ctrl-C) y construimos la aplicación web mediante el comendo build:
- la construcción de la aplicación web por ángular se ubica en el carpeta angular/dist sobre un directorio de servidor web para mostrar la aplicación. (Por ejemplo descargar la extensión Web Server for Chrome y seleccionar el directorio angular/dist)
- complilar y generar los contratos de la carpeta Truflle. Los ficheros json resultantes deberán de copiarse en la carpeta angular/dist/assets/contrats (sustituir los que aparecen en la propia carpeta). 

Una vez instalado se podrá seleccionar como proveedor web3 entre una dirección url o metamask.
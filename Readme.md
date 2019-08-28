## Dapp para la gestión de la Criptomoneda ERC20: RCC

La Dapp busca gestionar por una parte una lista de Cuentas Asociadas que serán las encargadas de proporcionar una cantidad de criptomoneda RCC de tipo ERC20 a los proyectos de intercambio de material reciclado por la criptomoneda. 
Cualquier proyecto podrá realizar una petición sobre la DAPP que será respondida añadiendo la criptomoneda RCC a la cuenta peticionaria.
Desde la Dapp se podrá llevar a cabo cualquier gestión con la moneda RCC: Envío, Generación de la criptomoneda RCC y Aprobar una petición.

Se han desarrollado dos contratos en Solidity en los respectivos ficheros:
- RCC.sol
- RccDao.sol

Se ha desarrollado la Dapp en Angular donde se almacena el código en la carpeta /angular. En /angular/dist se encuentra la versión compilada para abrir directamente como aplicación Web.La compilación y migración del código en Solidity se ha llevado a cabo mediante Truffle.
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

El proceso de instalación es el siguiente:
- Se ubica el carpeta angular/dist sobre un directorio de servidor web para mostrar la aplicación. (Por ejemplo descargar la extensión Web Server for Chrome y seleccionar el directorio angular/dist)
- complilar y generar los contratos de la carpeta Truflle. Los ficheros json resultantes deberán de copiarse en la carpeta angular/dist/assets/contrats (sustituir los que aparecen en la propia carpeta). 

Una vez instalado se podrá seleccionar como proveedor web3 entre una dirección url o metamask.
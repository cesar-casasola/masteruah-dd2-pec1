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

### Funcionalidad de la aplicación

La aplicación muestra el siguiente aspecto:

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Inicio.png)]

Al inicio se ejecutará el método activate del contrato rcc para que el contrato rccDao sea de tipo Mint y se puedan generar las criptomonedas desde RccDao.
`RCC: function activate(address _address) onlyOwner`

Se pulsa ADD para añadir una cuenta a la lista de cuentas asociadas:

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Nuevo_asociado.png)]
`RccDao: function newAssociated(address _address, string memory name, string memory ref, bool minter) onlyOwner whenNotPaused public`

Todos los métodos de escritura en los dos contratos solo son ejecutados si no está en Pausa. Se ha añadido un contrato abstracto para heredar todas los métodos y modificadores.

Una vez asociadas varias cuentas se mostrarán en la lista de Cuentas Asociadas para llevar a cabo peticiones de criptomoneda RCC pulsando el botón ASK. Esto permite una petición de criptomonedas a una cuenta asociada:

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Nuevo_asociado_creado.png)]

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Peticion_RCC.png)]

La petición la lleva a cabo una llamada al método ask() que genera un evento Ask
`RccDao: function ask(address _address, uint amount, string memory message ) public whenNotPaused returns (bool)`

Cambiando a la cuenta asociada, esta podrá realizar una aprobación de la petición:

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Asociado_aprove.png)]

Se procede a comprobar (Check) todas las peticiones relaizadas a la Cuenta Asociada buscando coincidencias entre los Eventos de tipo Ask y los eventos de tipo Aprove, para mostrar solo las peticiones no aprobadas:

[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Lista_de_peticiones.png)]
`RccDao: function approve(uint id, address _address, uint amount, string memory message ) public whenNotPaused returns (bool) `

En la aplicación podemos llevar a cabo también operaciones de envío de Token:
[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Envio_RCC.png)]

Realizar una generación de token RCC mediante el método Mint (solo para cuentas asociadas):
[![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Asociado_mint.png)]


## Instalación.
- Cuando descarguemos de github todo el código del proyecto, la aplicación de ángular no tendrá la carpeta de node_modules. para ello tendremos que instalar a través del gestor de paquetes npm:
 `/angular/npm install`

- Una vez que tengamos la aplicación instalada el siguiente paso es la contrucción de la aplicación Web, pero antes comprobamos que no hay problemas de compilación ejecutando el comando `ng serve` y comprobaremos si en el navegador podemos abrir la aplicación en la ruta localhost:4200
 `/angular/ng serve`
` ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **`
      
- Una vez comprobado que se ejecuta en el navegador cortamos el servicio que está ejecutando (Ctrl-C) y construimos la aplicación web mediante el comendo build:
`angular/ng build --prod`
  
- la construcción de la aplicación web por ángular se ubica en el carpeta angular/dist.
- 
-  (Por ejemplo descargar la extensión Web Server for Chrome y seleccionar el directorio angular/dist)
- complilar y generar los contratos de la carpeta Truflle. Los ficheros json resultantes deberán de copiarse en la carpeta angular/dist/assets/contrats (sustituir los que aparecen en la propia carpeta). 

Una vez instalado se podrá seleccionar como proveedor web3 entre una dirección url o metamask.
## Dapp para la gestión de la Criptomoneda ERC20: RCC

La Dapp busca gestionar por una parte una lista de Cuentas Asociadas que distribuyen cantidades de un nuevo token RCC de tipo ERC20 y por otra la Dapp permite realizar algunas operaciones sobre una criptomoneda RCC. 

Cualquier cuenta externa a través de wallet de Metamask o cualquier otra cuenta externa asociada por ejemplo al nodo de Ganache, podrá realizar petición de criptomoneda a las cuentas asociadas a través de la DAPP. Las cuentas asociadas podrán aprobar o no esta petición.

Desde la Dapp además se podrá llevar además cualquier gestión con la moneda RCC: Envío a una cuenta de Ethereum, envío entre cuentas de la misma wallet, Generación (Mint) de la criptomoneda RCC (siempre desde una cuenta asociada)y se podrá aprobar una petición de criptomoneda (siempre que se opere de una cuenta asociada)

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

Cuando compilamos y migramos por truffle el código solidity se va a generar en la carpeta `/angular/dist/assets/contracts`. Este código se deberá de copiar en la carpeta `/angular/dist/assets/contracts_ganache` o `/angular/dist/assets/contracts_rinkeby` dependiendo de la red que se haya seleccionado.

Se han mantenido las dos carpetas de ganache y rinkeby para poder realziar pruebas sobre la aplicación utilizando un selector que cambia de red, modificando así el proveedor de web3 y pudiendo llevar a cabo en paralelo cualquier operación.


-----

### Funcionalidad de la aplicación

La aplicación muestra el siguiente aspecto:

![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Inicio.png)

Al inicio se ejecutará el método `activate` del contrato **rcc** para que el contrato **rccDao** sea de tipo **Mint** y se puedan generar las criptomonedas desde **rccDao**.
`RCC: function activate(address _address) onlyOwner`

Se pulsa **Add** para añadir una cuenta a la lista de cuentas asociadas:

![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Nuevo_asociado.png)
`RccDao: function newAssociated(address _address, string memory name, string memory ref, bool minter) onlyOwner whenNotPaused public`

Todos los métodos de escritura en los dos contratos solo son ejecutados si no está en **Pausa**. Se ha añadido un contrato abstracto para heredar todas los métodos y modificadores. El estado pausa se puede aplciar desde el botón **Pause** en la parte de arriba de la aplicación.

Una vez asociada la cuenta se mostrará en la **lista de Cuentas Asociadas** y se podrán llevar a cabo peticiones de criptomoneda RCC pulsando el botón **ASK**. Esto permite una petición de criptomonedas a una cuenta asociada:

![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Nuevo_asociado_creado.png)

![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Peticion_RCC.png)

La petición la lleva a cabo una llamada al método `ask()` que genera un evento **Ask**
`RccDao: function ask(address _address, uint amount, string memory message ) public whenNotPaused returns (bool)`

Si cambiamos de cuenta por defecto a una de la Cuenta Asociada recien creada, esta podrá realizar una aprobación de la petición anterior:

![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Asociado_aprove.png)

Antes de aprobar la petición Se procede a comprobar todas las peticiones realizadas a la Cuenta Asociada buscando coincidencias entre los Eventos de tipo Ask y los eventos de tipo Aprove, para mostrar solo las peticiones no aprobadas:

![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Lista_de_peticiones.png)
![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/seleccion_de_peticion.png)

`RccDao: function approve(uint id, address _address, uint amount, string memory message ) public whenNotPaused returns (bool) `

-----

En la aplicación podemos llevar a cabo también operaciones de envío de Token:
![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Envio_RCC.png)

Realizar una generación de token RCC mediante el método Mint (solo para cuentas asociadas):
![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/Asociado_mint.png)

-----

## Instalación.
- Cuando descarguemos de github todo el código del proyecto, la aplicación de ángular no tendrá la carpeta de node_modules. para ello tendremos que instalar a través del gestor de paquetes npm:
 `/angular/npm install`

- Antes de compilar el proyecto de angular debemos de realziar la compliación y migración de los contratos a través de truffle:

`/master-rcc/truffle$ truffle compile && truffle migrate --network rinkeby --reset`
`/master-rcc/truffle$ truffle compile && truffle migrate --network ganache --reset`

para ello debemos haber configurado el fichero truffle.js para que apunte a la red que queremos probar y añadir las cuentas que vamos a utilziar como cuetas owner de los contratos.

```
module.exports = {
    contracts_build_directory: "../angular/src/assets/contracts",
    networks: {
          ganache: {
              host: "localhost",
              port: 7545,
              network_id: "5777", 
              from: "0xb253e4fCe8122904072a7EcB464030A0C141D064",            
            }
          ,
          rinkeby: {
               host: "localhost", // Connect to geth on the specified
               port: 8545,
               from: "0xcf757ac9610b264aa967832c93a0e9ccc5f99d8e",
               network_id: 4,
               gas: 4612388, // Gas limit used for deploys      
          }
        }

};

```


- Una vez que tengamos los contratos generados el siguiente paso es la contrucción de la aplicación Web, pero antes comprobamos que no hay problemas de compilación ejecutando el comando `ng serve` y comprobaremos si desde el navegador podemos abrir la aplicación en la ruta localhost:4200
 `/angular/ng serve`
` ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **`
      
- Una vez comprobado que se ejecuta en el navegador cortamos el servicio que está ejecutando (Ctrl-C) y construimos la aplicación web mediante el comendo build:
`angular/ng build --prod`
  
- la construcción de la aplicación web por ángular se ubica en el carpeta angular/dist.
- 
- Por último, para poder abrir la aplicación web podemos utilizar cualquier servidor (Por ejemplo descargar la extensión Web Server for Chrome y seleccionar el directorio angular/dist)

![N|Solid](https://github.com/cesar-casasola/masteruah-dd2-pec1/blob/master/images/chrome-server.png)


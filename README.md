<p align="center">
    <img src="assets/SoloSimboloWave.png" alt="Logo">
  <h3 align="center">Waves</h3>
</p>

Waves es una aplicación en la cual tu podrás ver el artista que más escuchas, podrás ver una lista de los artistas que son de mayor relevancia para ti de acuerdo a las estadísticas, también podrás hacer búsquedas de cualquier artista y ver sus álbumes.

Es un proyecto para la clase de programación móvil I de la Universidad Catolica de Honduras Campus "Jesus Sacramentado".

## Objetivos
### Objetivos General
 * Obtener información desde una API y transformar su datos.
 
### Objetivos Específicos 
 * Reforzar los conocimientos aprendidos en la clase Programación Movil I sobre el lenguaje de programación JavaScript y el framework react.<br>
 * Comprender el funcionamiento de la Spoify API y la composición de un token.

## Mockups
<p align="center"><img src="https://user-images.githubusercontent.com/61590798/100043168-74bf2c80-2dd2-11eb-811b-f02f1cd9250f.png" height=500></p><br>

<p align="center"><img src="https://user-images.githubusercontent.com/61590798/100043500-2cecd500-2dd3-11eb-9e1f-71fcdbe00e3a.png"></p><br>


## Construido con

Es una aplicacion basada en los conocimientos de JavaScript, Expo, NodeJS en la clase Programación Móvil I, impartida por el 
[Ing. Héctor Sábillon](https://github.com/hsabillon7)

Como framework utilizamos:
* [React Native](https://reactnative.dev/)

Componentes para la UI:
* [NatievBase](https://nativebase.io/)

Par contruir la apps para que sea nativa:
* [Expo](https://expo.io/)




## Pre requisitos

1. Ejecute este comando despues de clonar el repositorio para que actulice o descargue los paquetes necesarios para el proyecto.
```
npm install 
```
## Solicitud de token
Tenes que colocarlo en el backend

1. Link para solicitar OAuth Token:

https://developer.spotify.com/console/get-current-user/

2. Para solicitar el token ocupamos 3 scopes:
    user-read-private
    user-read-email
    user-top-read
 
3. Coloca tu OAuth Token

```JS
 let AuthToken=['Here OAuth Token'];
```
    
    
## Autores


* **Cesar Mejia** - Developer || Designer  - [ArielMejia01](https://github.com/ArielMejia01)
* **Gustavo Meza** - Developer || Designer - [gustavo-exe](https://github.com/gustavo-exe)


## Conclusiones
 * La obtención de los datos de la API son completamente de la cuenta propia del usuario y es en donde entra en juego el token y su composición.
 * Se entendio bastante bien y se pudo aplicar lo aprendido en clase, como también la implementación de nuevas cosas no tan notorias pero significantes. Las cuales las podemos      apreciar en el collage.
 * Aunque no se haya tenido un éxito en obtener un token personal y colocarlo en el input se aprendieron muchas cosas nuevas con una posible interesante solución que podria        aplicarse en el futuro que no fue prioridad en este momento ya que teniamos como objetivo principal obtener datos y manipularlos.
 * Más allá de hacer algo es entender porqué lo estas haciendo y cómo funciona el lenguaje.
<br>
<br>
<p align="center">
 Platzi<br> 
  La única manera de lograr tus metas es fallar, fallar y aprender. 
                                                        
</p>





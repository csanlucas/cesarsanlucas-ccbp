# deuna-challenge-bp

## Objetivos esperados
### Objetivo 1
* Diseñar un servicio simulado tipo GET

### Objetivo 2
* Diseñar una API Rest con las operaciones básicas (CRUD).
* Arquitectura del proyecto.
* Buenas prácticas.
* Mapeado de entidad a un DTO (Data Transfer Object).
* Micro commits.
### Objetivo 3
* Relaciones entre de entidades.
* Control de excepciones.
* Pruebas unitarias por comportamientos.
* Formato de respuesta requerida.
* Uso correcto de enumerados y constantes.
### Objetivo 4
* Generar reporte en csv a través de un endpoint.
---

## Requisitos
* Node 16.14 o superior
* npm 8.3.1 o superior
* NestJS 

---
## Setup for develomplent
**1)** Clonar repositorio
```sh
git clone https://github.com/csanlucas/cesarsanlucas-ccbp.git
```
**2)** Ingresar a la carpeta del proyecto, renombrar las variables de entorno que forman parte de los secrets y accesos a db cockroach
```sh
cd cesarsanlucas-ccbp
cp .env.example .env
# Por facilidad de setup, se encuentran en texto el valor de los secrets para el deployment de development
```
**3)** Deploy local de aplicación NestJS
```sh
npm run start:dev
```

---

## **USO**
Se deben realizar los request a los endpoints haciendo uso de algún cliente de HTTP, se recomienda utilizar *Postman*

**URL** : http://localhost:3000/exercise1/
* **Method** `GET`
* **Success Response:**
    * **Code** 200 <br/>
    **Content** 
    ```json
    [
        {"id":1,"state":604},
        {"id":2,"state":605},
        {"id":3,"state":606}
    ]
    ```

**URL** : http://localhost:3000/organizations/
* **Method** `GET`
* **Success Response:**
    * **Code** 200 <br/>
    **Content** 
    ```json
    [{"id":2,"name":"guayaquil","status":"1"},{"id":3,"name":"daule","status":"1"}]
    ```
* **Methods_Available** `[POST, PUT, UPDATE]`

**URL**  : http://localhost:3000/repositories/
* **Query_Params** `tribeId: number (Required); state: string; coverage: number; create_time_gt: Isoformatdate`
* **Success Response:**
    * **Code** 200 <br/>
    **Content** 
    ```json
    {
        "repositories":
        [
            {
                "id":2,
                "name":"cd-common-text",
                "tribe":"Centro Digital",
                "organization":"Banco Pichincha",
                "coverage":"75.00",
                "codeSmells":"1",
                "bugs":"0",
                "vulnerabilities":"2",
                "hotspots":"0",
                "state":"Habilitado",
                "verificationState":"En espera"
            }
        ]
    }
    ```
* **Error handling** En caso de producirse un error se mantendrá la siguiente estructura
* **Error Response:**
    * **tribeId** `[No especificado]` <br/>
    * **Code** 400 <br/>
    **Content** 
    ```json
        {"statusCode":400,"message":["tribeId must be a number string","tribeId should not be empty"],"error":"Bad Request"}
    ```
    * **tribeId** [`validNumber`] <br/>
    * **Code** 404 <br/>
    **Content** 
    ```json
        {"statusCode":404,"message":"La tribu no se encuentra registrada","error":"Not Found"}
    ```
    * **coverage** [`validNumber`] <br/>
    * **Code** 404 <br/>
    **Content** 
    ```json
        {"statusCode":404,"message":"La tribu no tiene repositorios que cumplan con la cobertura necesaria","error":"Not Found"}
    ```
**URL**  : http://localhost:3000/repositories/export/
* **Query_Params** `tribeId: number (Required); state: string; coverage: number; create_time_gt: Isoformatdate`
* **Success Response:**
    * **Code** 200 <br/>
    **Content** 
    ```json
        [ARCHIVO_DESCARGADO.csv]
    ```
* **Error handling & Response** `[Errores similares a los presentes http://localhost:3000/repositories/]`
---
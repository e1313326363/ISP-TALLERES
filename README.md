
# Integrantes:
- Velez Ian
- Rodriguez Gustavo
- Alcivar Cristhopher
- Flores Diego
- Joviric Isaac
- Palacios Anthoy
## Testing
### 1er Paso.
#### Definimos las variables las cuales se van a testear.
![Alt text](images/9.png)

### 2do Paso.
#### En el Act detallamos todo el testeo que se realizará, hay que tener en cuenta los factores de "Proviers" que es el encargado de llamar al servicio que se quiera testear, y los mocker de usan para ayudarnos a definir variables de mongo a través de tokens
![Alt text](images/10.png)

### 3er Paso.
#### El assert que es el encargado de ejecutar el testeo, esto lo logramos usando la función describe sobre el findAll
![Alt text](images/11.png)

## Luego Procedemos a la Dockerizar 

### 1er Paso
#### Configuramos el Dockerfile
![Alt text](images/12.png)

### 2do Paso
#### Ejecutamos todos los Test del proyecto
```sh
  npm test
```
![Alt text](images/13.png)

### 3er Paso
#### Creamos la imagen del docker pero con referencia al Test
```sh
    docker build --target test -t mi-backend:test .  
```    
![Alt text](images/14.png)

### 4to Paso
#### Creamos la imagen del docker completa
```sh
    docker build -t mi-backend:latest .
``` 
![Alt text](images/15.png)

### 5to Paso
#### Revisamos las imagenes creadas 
```sh
    docker images
``` 
![Alt text](images/16.png)

### 6to Paso
#### Nos Logueamos en docker
```sh
    docker login
``` 
![Alt text](images/17.png)

### 7to Paso
#### Etiquetar las imágenes con tu nombre de usuario de Docker Hub, antes de poder subir tus imágenes a Docker Hub.
```sh
  docker tag mi-backend:test ianvelez2605/mi-backend:test
  docker tag mi-backend:latest ianvelez2605/mi-backend:latest
```
#### Subir las imágenes a Docker Hub
```sh
  docker push ianvelez2605/mi-backend:test
  docker push ianvelez2605/mi-backend:latest
```
![Alt text](images/18.png)

### 8vo Paso
#### Por ultimo hacemos el Docker Publico
```sh
  docker push ianvelez2605/mi-backend
```
![Alt text](images/19.png)

### 9no Paso
#### Ejecutamos la imagen bajada del docker del test y Observamos que funcione correctamente
![Alt text](images/20.png)

### 10mo Paso
#### Observamos todas las imagenes bajadas y creadas
![Alt text](images/21.png)

#### Observamos las imagenes subida en Docker Hub
![Alt text](images/22.png)
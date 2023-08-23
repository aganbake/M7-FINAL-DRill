## Code By:

- **Kevin Villarroel**

## Final Drill M7

#Sprint 1, sistema para crear bootcamps y añadir usuarios a bootcamps

### Explicación

#Ejecutar en primera instancia: npm run sync-db para preparar la base de datos
#Ejecutar luego npm run dev-unix / dev-win dependiendo del OS

### Primeros pasos

## Empezamos con los usuarios

#http://localhost:3000/user/create/Mateo/Díaz/mateo.diaz@correo.com
#http://localhost:3000/user/create/Santiago/Mejías/santiago.mejias@correo.com
#http://localhost:3000/user/create/Lucas/Rojas/lucas.rojas@correo.com
#http://localhost:3000/user/create/Facundo/Fernandez/facundo.fernandez@correo.com
#http://localhost:3000/user/create/Kevin/Villarroel/kevin@mail.com

## Luego los bootcamp

#http://localhost:3000/bootcamp/create/Bootcamp%20Big%20Data,%20Inteligencia%20Artificial%20&%20Machine%20Learning./18/Domina%20Data%20Science,%20y%20todo%20el%20ecosistema%20de%20lenguajes%20y%20herramientas%20de%20Big%20Data,%20e%20int%C3%A9gralos%20con%20modelos%20avanzados
#http://localhost:3000/bootcamp/create/Bootcamp%20Desarrollo%20Web%20Full%20Stack./12/Crear%C3%A1s%20aplicaciones%20web%20utilizando%20las%20tecnolog%C3%ADas%20y%20lenguajes%20m%C3%A1s%20actuales%20y%20populares,%20como:%20JavaScript,%20nodeJS,%20Angular,%20MongoDB,%20ExpressJS.
#http://localhost:3000/bootcamp/create/Introduciendo%20El%20Bootcamp%20De%20React./10/React%20es%20la%20librer%C3%ADa%20m%C3%A1s%20usada%20en%20JavaScript%20para%20el%20desarrollo%20de%20interfaces.

## Luego añadimos usuarios a los bootcamp

#http://localhost:3000/bootcamp/adduser/idBootcamp/1/idUser/1
#http://localhost:3000/bootcamp/adduser/idBootcamp/1/idUser/2
#http://localhost:3000/bootcamp/adduser/idBootcamp/2/idUser/1
#http://localhost:3000/bootcamp/adduser/idBootcamp/3/idUser/1
#http://localhost:3000/bootcamp/adduser/idBootcamp/3/idUser/2
#http://localhost:3000/bootcamp/adduser/idBootcamp/3/idUser/3

## Finalmente el request final

#http://localhost:3000/bootcamp/findById/1
#http://localhost:3000/bootcamp
#http://localhost:3000/user/findById/1
#http://localhost:3000/user/update/id/1/firstName/Pedro/lastName/S%C3%A1nchez
#http://localhost:3000/user/delete/id/5

## Repositorio

https://github.com/aganbake/M7-FINAL-DRill.git

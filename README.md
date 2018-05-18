# jquery_extension_url_reader
##English below
########### ESPAÑOL/SPANISH
Extensión para jquery que permite recuperar parametros de la url tanto resful como no.
Consta de tres formatos. Uno en le simplemente buscara un parametro por su nombre  por ejemplo:
  yoururl.server?param=super
$.getParam("param")=super
El segundo que busca en url resfull un nombre y devuelbe el siguiente valor:
 yoururl.server/param/super
$.getParam("param",1)=super
En este punto también permite obtener un valor usando la posición del parametro indicado como referencia:
 yoururl.server/param/param2/super
$.getParam("param",2)=super
 yoururl.server/super/param/
$.getParam("param",-1)=super

Y como tercera opción se puede obtener en una url resful el valor de una posición concreta 
 yoururl.server/super/
$.getParam(o)=super


########### INGLÉS // ENGLISH
Extension for jquery that allows to recover parameters of the url both resful and not.
It consists of three formats. One in it will simply look for a parameter by its name for example:
   yoururl.server? param = super
$ .getParam ("param") = super
The second search in url resfull a name and return the following value:
  yoururl.server / param / super
$ .getParam ("param", 1) = super
At this point it also allows you to obtain a value using the position of the parameter indicated as a reference:
  yoururl.server / param / param2 / super
$ .getParam ("param", 2) = super
  yoururl.server / super / param /
$ .getParam ("param", - 1) = super

And as a third option you can get in a resful url the value of a specific position
  yoururl.server / super /
$ .getParam (o) = super


function registroCliente(){
var elemento={
  id:$("#miId").val(),
  name:$("#name").val(),
  email:$("#email").val(),
  age:$("#age").val()
  }


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:elemento,
      url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/client/client",
      type:'POST',
      
      success:function(response) {
        console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function obtenerItems(){
   
  $.ajax({
      dataType: 'json',
      url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/client/client",
      type:'GET',
      
      success:function(response) {
       
        var misItems=response.items;
        
        for(i=0;i<misItems.length;i++){

          $("#miResultado").append("<tr>")

          $("#miResultado").append("<td >"+misItems[i].name+"</td>");
          $("#miResultado").append("<td>"+misItems[i].email+"</td>");
          $("#miResultado").append("<td>"+misItems[i].age+"</td>");
          $("#miResultado").append('<td><button onclick="borrar('+misItems[i].id+')">Borrar</button></td>');
          $("#miResultado").append('<td><button onclick="obtenerItemEspecifico('+misItems[i].id+')">Cargar</button></td>');
          $("#miResultado").append("</tr>");


        }

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}


function borrar(idElemento){
var elemento={
  id:idElemento
};


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/client/client",
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
}


function obtenerItemEspecifico(idItem){
  $.ajax({
      dataType: 'json',
      url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/farm/farm/"+idItem,
      type:'GET',
      success:function(response) {
        console.log(response);
        var item=response.items[0];

        $("#miId").val(item.id);
        $("#name").val(item.name);
        $("#email").val(item.email);
        $("#age").val(item.age);



      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function actualizar(){
var elemento={
  id:$("#miId").val(),
  name:$("#name").val(),
  email:$("#email").val(),
  age:$("#age").val()
  }


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/client/client",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}



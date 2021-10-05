function registrarMensaje(){
    var elementoMensaje={
      id:$("#miId2").val(),
      messagetext:$("#messagetext").val(),
      
      }
    
    
    var dataToSend=JSON.stringify(elementoMensaje);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType: 'json',
          data:elementoMensaje,
          url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/message/message",
          type:'POST',
          
          success:function(response) {
            console.log(response);
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
    
    function obtenerItemsMensaje(){
       
      $.ajax({
          dataType: 'json',
          url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/message/message",
          type:'GET',
          
          success:function(response) {
           
            var misItems2=response.items;
            
            for(i=0;i<misItems2.length;i++){
    
              $("#miResultadoMensajes").append("<tr>");
              $("#miResultadoMensajes").append("<td>"+misItems2[i].id+"</td>");
              $("#miResultadoMensajes").append("<td>"+misItems2[i].messagetext+"</td>");
              $("#miResultadoMensajes").append('<td><button onclick="borrar('+misItems2[i].id+')">Borrar</button></td>');
              $("#miResultadoMensajes").append('<td><button onclick="obtenerItemEspecifico('+misItems2[i].id+')">Cargar</button></td>');
              $("#miResultadoMensajes").append("</tr>");
    
    
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
          url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/message/message",
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
          url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/message/message/"+idItem,
          type:'GET',
          success:function(response) {
            console.log(response);
            var item=response.items[0];
    
            $("#miId2").val(item.id);
            $("#messagetext").val(item.messagetext);
            
    
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
    
    function actualizarMensaje(){
    var elemento={
        id:$("#miId2").val(),
        messagetext:$("#messagetext").val(),

      }
    
    
    var dataToSend=JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType: 'json',
          data:dataToSend,
          contentType:'application/json',
          url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/message/message",
          type:'PUT',
          
          success:function(response) {
            console.log(response);
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
    

function registroFinca(){
    var elementofinca={
      id:$("#miId1").val(),
      address:$("#address").val(),
      exension:$("#exension").val(),
      category_id:$("#category_id").val(),
      name:$("#namefarm").val()
      }
    
    
    var dataToSend=JSON.stringify(elementofinca);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType: 'json',
          data:elementofinca,
          url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/farm/farm ",
          type:'POST',
          
          success:function(response) {
            console.log(response);
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
    
    function obtenerItemsFinca(){
       
      $.ajax({
          dataType: 'json',
          url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/farm/farm",
          type:'GET',
          
          success:function(response) {
           
            var misItems1=response.items;
            
            for(i=0;i<misItems1.length;i++){
    
              $("#miResultadofinca").append("<tr>");
              $("#miResultadofinca").append("<td>"+misItems1[i].address+"</td>");
              $("#miResultadofinca").append("<td>"+misItems1[i].exension+"</td>");
              $("#miResultadofinca").append("<td>"+misItems1[i].category_id+"</td>");
              $("#miResultadofinca").append("<td>"+misItems1[i].name+"</td>");
              $("#miResultadofinca").append('<td><button onclick="borrar('+misItems1[i].id+')">Borrar</button></td>');
              $("#miResultadofinca").append('<td><button onclick="obtenerItemEspecifico('+misItems1[i].id+')">Cargar</button></td>');
              $("#miResultadofinca").append("</tr>");
    
    
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
          url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/farm/farm",
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
    
            $("#miId1").val(item.id);
            $("#address").val(item.address);
            $("#exension").val(item.exension);
            $("#category_id").val(item.category_id);
            $("#namefarm").val(item.name);
    
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
    
    function actualizarFinca(){
    var elemento={
        id:$("#miId1").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#namefarm").val()

      }
    
    
    var dataToSend=JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType: 'json',
          data:dataToSend,
          contentType:'application/json',
          url:"https://gb76996c2c4d5ce-db202109251701.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/farm/farm",
          type:'PUT',
          
          success:function(response) {
            console.log(response);
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
    
    
    
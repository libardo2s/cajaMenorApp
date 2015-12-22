app.service("ClienteService",function($http){
    var urlPeticion = "http://localhost:1436";
    this.getAll = function(){
        return $http.get(urlPeticion+"/Api/Clientes/");
    }
    
})
angular.module('starter.controllers', [])

.controller('HomeController', function($scope,$window,$ionicPopup, $timeout) {
    $scope.NuevoRecibo = function(){
        $window.location.href = "#/app/nuevo";        
    }
    
    $scope.DetalleRecibo = function(){
        $window.location.href = "#/app/detalles";
    }
    
    $scope.showPopup = function() {
        $scope.data = {};
        var myPopup = $ionicPopup.show({
            template: '<label class="item item-input item-stacked-label"><span class="input-label">Desde</span><input type="date" ng-model="data.fecha1"></label><br><label class="item item-input item-stacked-label"><span class="input-label">Hasta</span><input type="date" ng-model="data.fecha1"></label>',
            title: 'Elija la fecha que desea filtrar',
            scope: $scope,
            buttons: [
                { text: 'Cancelar' },
                {
                    text: '<b>Filtrar</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.wifi) {
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                }
            ]
        });
    }

})

.controller('ClienteController', function($scope,ClienteService) {
    var get = ClienteService.getAll();
    
    $scope.listaClientes = [];
    
    get.then(function(respuesta){
        $scope.listaClientes = respuesta.data;
        }, function(error){
        console.log(error);
    });
})

;
angular.module('painel',[])
    .controller('PainelController', 
        function($scope, $http) {
                  
            $http.get('http://painel.feb.unesp.br/gestor/api/v1/producaoAcademica/DEC/PB/2010/2010').
                    success(function(data, status, headers, config) {
                        console.info("sucesso");
                        $scope.dados = data;
                    }).error(function(data, status, headers, config) {
                        console.error("erro ao buscar dados");
                    }
                );
    }
);
angular.module('kmiApp', [])
    .controller('KmiController', function ($scope)
{    
    $scope.Reset = function ()
    {
        $scope.Height = "";
        $scope.Weight = "";
        
        $scope.Value = "--";
        $scope.Classification = "--";
    }

    $scope.Reset();

    $scope.Calculate = function ()
    {
        $scope.Value =  $scope.Weight / Math.pow(Ugiscm($scope.Height), 2);

        
            var val = $scope.Value;

            if (val < 18.5)
                $scope.Classification = "Reikia daugiau valgyti";
                
            else if (val >= 18.5 & val <= 25)
                $scope.Classification = "Sveiko žmogaus masės indeksas";
                
            
        
            else if  (val > 30)
                $scope.Classification= "Nutukimas";
                
            
            else  $scope.Classification = window.alert("Prašome užpildyti laukelius teisingai");
            
        
    };
    
    
      
    function Ugiscm( Height)
    {
         return Height / 100;

            
        
    }
  });
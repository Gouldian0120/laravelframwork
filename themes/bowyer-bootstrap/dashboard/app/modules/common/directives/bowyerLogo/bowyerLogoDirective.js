(function() {
  'use strict';
  bowyerApp.directive('bowyerLogo', function(){
      return {
          restrict: 'EA',
          template: '<span>bow</span><span style="color:#F39C12">yer</span>'
      };
  });
})();
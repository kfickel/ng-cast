angular.module('video-player')

.component('videoPlayer', {

  bindings: {
    video: '<'
  },
  controller: function() {
    console.log('before ', this);
    this.$onInint = () => {
      console.log('video ', this);
    };
  },
  
  
  templateUrl: 'src/templates/videoPlayer.html'
  // TODO
})
.filter('trustUrl', function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);  
  };
});

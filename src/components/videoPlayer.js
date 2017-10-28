angular.module('video-player')

.component('videoPlayer', {

  bindings: {
    video: '<'
  },
  // TODO
  templateUrl: 'src/templates/videoPlayer.html'
})
.filter('trustUrl', function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});

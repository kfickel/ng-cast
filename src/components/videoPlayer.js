angular.module('video-player')

.component('videoPlayer', {

  bindings: {
    video: '<',
    videoPresent: '<'
  },
  controller: function() {
    this.present = (this.video !== undefined) ? false : true;
    // ng-if="present" add to VP.html
  },
  
  
  templateUrl: 'src/templates/videoPlayer.html'
  // TODO
})
.filter('trustUrl', function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);  
  };
});

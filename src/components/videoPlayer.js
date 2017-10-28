angular.module('video-player')

.component('videoPlayer', {

  bindings: {
    video: '<',
    videoPresent: '<',
    autoplay: '<',
    autoresult: '<'
  },
  controller: function() {
    this.present = (this.video !== undefined) ? false : true;
    this.onClick = (autoplay) => {
      this.autoplay = !autoplay;
      if (this.autoplay) {
        this.autoresult = '?autoplay=1';  
      } else {
        this.autoresult = '';
      }
    };
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

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
  // checkVideo: function(video) {
  //   if (video.length === 0) {
  //    console.log("inside checkVideo lenght 0")
  //     $(".embed-responsive embed-responsive-16by9").html('');
  //     $(".embed-responsive embed-responsive-16by9").append('Please wait');
  //   } else {
  //     $(".embed-responsive embed-responsive-16by9").append("<iframe class='embed-responsive-item' ng-src='{{ 'https://www.youtube.com/embed/' + $ctrl.video.id.videoId | trustUrl}}' allowFullScreen></iframe>");
  //   }
  // },
  
  templateUrl: 'src/templates/videoPlayer.html'
  // TODO
})
.filter('trustUrl', function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);  
  };
});

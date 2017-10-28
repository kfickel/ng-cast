angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<'
  },

  controller: function() {

    //console.log('videoList ', this.videoList);
  },

  templateUrl: 'src/templates/videoList.html'
});

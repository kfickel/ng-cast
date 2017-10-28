angular.module('video-player')

.component('app', {

  // TODO
  controller: function() {
    this.selectVideo = () => {
    };
    this.searchResults = () => {
    };
    this.currentVideo = {};
    this.videos = window.exampleVideoData;
    console.log(this.videos);
  },

  templateUrl: 'src/templates/app.html'
});

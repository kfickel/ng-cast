angular.module('video-player')

.component('app', {

  // TODO
  controller: function() {
    this.selectVideo = () => {
    };
    this.searchResults = () => {
    };
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    console.log(this.videos);
    this.setCurrentVideo = function(index) {
      this.currentVideo = this.videos[index];
      console.log('click', this.currentVideo);
    };
  },
  

  templateUrl: 'src/templates/app.html'
});

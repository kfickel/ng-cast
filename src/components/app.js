angular.module('video-player')

.component('app', {

  // TODO
  controller: function(youTube) {
    this.query = '';
    this.autoplay = false;
    this.selectVideo = () => {
    };
    this.searchResults = (query) => {
      var params = {
        query: query,
        max: '5',
        key: window.YOUTUBE_API_KEY
      };
      
      this.callback = (results) => {
        this.videos = results;
        this.currentVideo = results[0];
      };
      youTube.search(params, this.callback);
      
    };
    this.videos = [];
    this.currentVideo = {};
    // console.log(this.videos);
    this.setCurrentVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.searchResults();
  },
  

  templateUrl: 'src/templates/app.html'
});

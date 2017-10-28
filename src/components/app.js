angular.module('video-player')

.component('app', {

  // TODO
  controller: function(youTube) {
    this.query = '';
    this.selectVideo = () => {
    };
    this.searchResults = (query) => {
      var params = {
        query: query,
        max: '5',
        key: window.YOUTUBE_API_KEY
      };
      console.log('invoked', params.query);
      
      this.callback = (results) => {
        this.videos = results;
        this.currentVideo = results[0];
      };
      console.log('results ', youTube.getResults(params, this.callback));
      
    };
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    console.log(this.videos);
    this.setCurrentVideo = (index) => {
      this.currentVideo = this.videos[index];
      console.log('click', this.currentVideo);
    };
  },
  

  templateUrl: 'src/templates/app.html'
});

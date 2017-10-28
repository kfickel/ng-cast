angular.module('video-player')
.service('youTube', function($http) {
  
  this.search = function(obj, cb) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        q: obj.query,
        maxResults: obj.max || 5,
        key: obj.key,
        type: 'video',
        videoEmbeddable: true 
      }
    }).then(function successCallback(response) {
      cb(response.data.items);
      // return response.item;
    }, function errorCallback(response) {
      console.log(response);
    });
  };
});

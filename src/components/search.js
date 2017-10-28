angular.module('video-player')

.component('search', {
  bindings: {
    query: '<',
    search: '<'
  },
  // TODO
  templateUrl: 'src/templates/search.html'
});


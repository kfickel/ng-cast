angular.module('video-player')

.component('search', {
  bindings: {
    query: '<',
    search: '<',
    result: '<'
  },

  controller: function() {
  },
  // TODO
  templateUrl: 'src/templates/search.html'
});


Package.describe({
  name: 'igoandtrace:trace-qrs-collection',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.7.3');
  api.use('ecmascript');
  api.mainModule('trace-qrs-collection.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('trace-qrs-collection');
  api.mainModule('trace-qrs-collection-tests.js');
});

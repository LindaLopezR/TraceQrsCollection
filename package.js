Package.describe({
  name: 'igoandtrace:trace-qrs-collection',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.use('zimme:collection-timestampable@1.0.9');
  api.use('mongo@1.1.17');
  api.mainModule('trace-qrs-collection.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('trace-qrs-collection');
  api.mainModule('trace-qrs-collection-tests.js');
});

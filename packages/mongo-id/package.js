Package.describe({
  summary: 'JS simulation of MongoDB ObjectIDs',
  version: '1.0.8',
  documentation: null
});

Package.onUse(function (api) {
  api.export('MongoID');
  api.use(['ejson', 'id-map', 'random', 'ecmascript']);
  api.mainModule('id.js');
});

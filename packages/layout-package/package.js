Package.describe({
  name: 'layout-package',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  
  api.use([
    'meteor-base'
  ]);

  api.use([
    'angular-templates@1.0.8_1',
    'pbastowski:angular-babel@1.3.6'
  ]);

  api.addFiles([
    'main.js',
    'layout.html'
  ], 'client');
});

Package.onTest(function(api) {
  api.use([
    'layout-package',

    'practicalmeteor:mocha',
    'practicalmeteor:chai',
    'practicalmeteor:sinon',
  ]);

  api.addFiles('test.js');
});
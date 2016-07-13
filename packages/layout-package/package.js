Package.describe({
  name: 'layout-package',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  
  api.use([
    'meteor-base',
    'jquery'
  ]);

  api.use([
    'angular-templates@1.0.3',
    'pbastowski:angular-babel@1.3.6'
  ]);

  api.addFiles([
    'layout.html'
  ], 'client');
});
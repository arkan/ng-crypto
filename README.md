ng-crypto
==================

ng-crypto provides a simple service to encrypt and decrypt data using AES (using crypto-js](https://code.google.com/p/crypto-js/))

##Install (bower)

* bower install ng-crypto

##Usage
* add dependency ('ng-crypto') to angular

* setup the encryption key in your config
```js
app.config(['$cryptoProvider', function($cryptoProvider){
  $cryptoProvider.setAesKey('ABCD123');
});
```

Example

```js
app.controller('ExampleController', function($scope, $crypto) {
  var encrypted = $crypto.encrypt('your text');
  var decrypted = $crypto.decrypt(encrypted);
});

```

or you can use a custom key everytime

```js
app.controller('ExampleController', function($scope, $crypto) {
  var encrypted = $crypto.encrypt('your text', 'a key');
  var decrypted = $crypto.decrypt(encrypted, 'a key');
});

```

That's all !

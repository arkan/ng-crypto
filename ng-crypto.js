angular.module('ng-crypto', [])
  .provider('$crypto', function() {
    var aesKey;

    this.setAesKey = function(value) {
      this.aesKey = value;
    }

    this.$get = [function(){
      return {
        aesKey: this.aesKey,
        encrypt: function(message, key) {
          if (key === undefined) {
            key = this.aesKey;
          }
          return CryptoJS.AES.encrypt(message, key ).toString();
        },
        decrypt: function(message, key) {
          if (key === undefined) {
            key = this.aesKey;
          }
          return CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8)
        }
      }
    }];
  });

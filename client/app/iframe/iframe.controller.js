'use strict';

angular.module('aboutYouApp')
  .controller('IframeCtrl', function ($scope) {

      $scope.hideCategories = true;

      var productId = 865662,
          variantId = 7927120;

      // Hack, not the angular way :)
      document.getElementById('btn-loginModalOpen').addEventListener('click', function() {
        AY.openLoginModal();
      });

      document.getElementById('btn-wishlistAddItem').addEventListener('click', function() {
        AY.addToWishlist(productId, variantId);
      });

      document.getElementById('btn-basketAddItem').addEventListener('click', function() {
        AY.addToCart(variantId);
      });

      document.getElementById('btn-appNavigationShow').addEventListener('click', function() {
        AY.showNavigation();
      });

      document.getElementById('btn-appNavigationHide').addEventListener('click', function() {
        AY.hideNavigation();
      });

      document.getElementById('btn-openQuickView').addEventListener('click', function() {
        AY.openQuickview(productId, variantId);
      });

      document.getElementById('btn-openProductLayer').addEventListener('click', function() {
        AY.openProductLayer(AY.data.id, productId, AY.data.id, variantId);
      });

      document.getElementById('btn-openLegalLayer').addEventListener('click', function() {
        AY.openTermsLayer();
      });

      document.getElementById('btn-openLegalNoticeLayer').addEventListener('click', function() {
        AY.openLegalNoticeLayer();
      });

      document.getElementById('btn-openPrivacyLayer').addEventListener('click', function() {
        AY.openPrivacyLayer();
      });

      document.getElementById('btn-addVariantsToBasket').addEventListener('click', function() {
        AY.addVariantsToBasket([variantId]);
      });

  });

const configureGAM = require('@randall-reilly/package-global/config/gam');

const config = configureGAM({ basePath: 'ccj' });

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
    { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
    { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
    { name: 'interstitial', path: 'interstitial' },
  ])
  .setAliasAdUnits('business', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('workforce', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'workforce-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'workforce-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'workforce-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'workforce-rotation' },
  ])
  .setAliasAdUnits('economic-trends', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'economic-trends-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'economic-trends-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'economic-trends-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'economic-trends-rotation' },
  ])
  .setAliasAdUnits('ecommerce-urban-delivery', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'ecommerce-urban-delivery-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'ecommerce-urban-delivery-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'ecommerce-urban-delivery-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'ecommerce-urban-delivery-rotation' },
  ])
  .setAliasAdUnits('regulations', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'regulations-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'regulations-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'regulations-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'regulations-rotation' },
  ])
  .setAliasAdUnits('trucks', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'trucks-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'trucks-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'trucks-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'trucks-rotation' },
  ])
  .setAliasAdUnits('alternative-power', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'alternative-power-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'alternative-power-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'alternative-power-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'alternative-power-rotation' },
  ])
  .setAliasAdUnits('equipment-controls', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'equipment-controls-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'equipment-controls-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'equipment-controls-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'equipment-controls-rotation' },
  ])
  .setAliasAdUnits('maintenance', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'maintenance-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'maintenance-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'maintenance-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'maintenance-rotation' },
  ])
  .setAliasAdUnits('technology', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'technology-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'technology-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'technology-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'technology-rotation' },
  ]);

module.exports = config;

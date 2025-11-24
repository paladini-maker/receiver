window['__onGCastApiAvailable'] = function(available) {
  if (!available) return;

  const context = cast.framework.CastContext.getInstance();

  context.setOptions({
    receiverApplicationId: 'B2FD5F03',
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });
};
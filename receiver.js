const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

context.addEventListener(cast.framework.system.EventType.READY, () => {
  console.log("Receiver listo");
});

context.start();
var entity;
var server;
handlers["solitaireGameConfigDataChanged"] = function (args, context) {
    var entityEvent = {};
    var entityEvent = {};
    entityEvent.Entity = { Id: "58AC", Type: "title" };
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "SolitaireGameConfigChanged";
    var eventResult = entity.WriteEvents({ Events: [entityEvent] });
    log.info("Write Events Result", eventResult);
};
//# sourceMappingURL=solitaireGameConfigDataChanged.js.map
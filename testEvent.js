var entity;
handlers["sendTestEventPlayer"] = function (args, context) {
    // write event
    var entityEvent = {};
    entityEvent.Entity = { Id: context.currentEntity.Entity, Type: "title_player_account" };
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "test_event_player";
    var eventResult = entity.WriteEvents({ Events: [entityEvent] });
    log.info("Write Events Result", eventResult);
    log.info("currentEntity", context.currentEntity);
};
//# sourceMappingURL=testEvent.js.map
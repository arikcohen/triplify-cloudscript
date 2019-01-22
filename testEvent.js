var entity;
handlers["sendTestEventPlayer"] = function (args, context) {
    // write event
    log.info("currentEntity", context.currentEntity);
    var entityEvent = {};
    entityEvent.Entity = { Id: context.currentEntity.Entity, Type: "title_player_account" };
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "test_event_player";
    var eventResult = entity.WriteEvents({ Events: [entityEvent] });
    log.info("Write Events Result", eventResult);
};
//# sourceMappingURL=testEvent.js.map
var entity;
var server;
handlers["sendTestEventPlayer"] = function (args, context) {
    var entityEvent = {};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "test_event_player";
    if (context.currentEntity == null) {
        //do accountInfo to look up title_player_account        
        entityEvent.Entity = server.GetUserAccountInfo({ PlayFabId: currentPlayerId }).UserInfo.TitleInfo.TitlePlayerAccount;
    }
    else {
        entityEvent.Entity = { Id: context.currentEntity.Entity, Type: "title_player_account" };
    }
    log.info("entity being written to", entityEvent.Entity);
    log.info("entityEvent", entityEvent);
    var eventResult = entity.WriteEvents({ Events: [entityEvent] });
    log.info("Write Events Result", eventResult);
};
//# sourceMappingURL=testEvent.js.map
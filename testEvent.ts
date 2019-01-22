var entity: any;

handlers["sendTestEventPlayer"]  = function (args: any, context: IPlayFabContext): void {  
    
    // write event
    log.info("currentEntity", context.currentEntity);

    var entityEvent:any = {};
    entityEvent.Entity = {Id: context.currentEntity.Entity, Type: "title_player_account"};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "test_event_player";    
    var eventResult = entity.WriteEvents({Events:[entityEvent]});
    log.info("Write Events Result", eventResult);
    
    
}

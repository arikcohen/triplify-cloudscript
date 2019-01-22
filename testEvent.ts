var entity: any;

handlers["sendTestEventPlayer"]  = function (args: string, context: IPlayFabContext): void {  
    
    // write event

    var entityEvent:any = {};
    entityEvent.Entity = {Id: context.currentEntity.Entity, Type: "title_player_account"};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "test_event_player";    
    var eventResult = entity.WriteEvents({Events:[entityEvent]});
    log.info("Write Events Result", eventResult);
    log.info("currentEntity", context.currentEntity);
    
}

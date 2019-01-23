var entity: any;
var server: any;

handlers["sendTestEventPlayer"]  = function (args: any, context: IPlayFabContext): void {  
    
    
    var entityEvent:any = {};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "test_event_player";    


    if (context.currentEntity == null)
    {
        //do accountInfo to look up title_player_account        
        entityEvent.Entity = server.GetUserAccountInfo({ PlayFabId: currentPlayerId }).UserInfo.TitleInfo.TitlePlayerAccount
    }
    else {
        entityEvent.Entity = context.currentEntity.Entity;
    }
    
    var eventResult = entity.WriteEvents({Events:[entityEvent]});
    log.info("Write Events Result", eventResult);        
}

var entity: any;
var server: any;

handlers["sendTestEventPlayer"]  = function (args: any, context: IPlayFabContext): void {  
    
    
    var entityEvent:any = {};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "test_event_player";    


    if (context.currentEntity == null)
    {
        //do accountInfo to look up title_player_account
        var accountInfo = server.GetUserAccountInfo({PlayFabId:currentPlayerId});
        log.info("currentPlayerId", currentPlayerId);
        log.info("accountInfo", accountInfo);
        //Get the Title Player Account
        var titlePlayerAccount = accountInfo.UserInfo.TitleInfo.TitlePlayerAccount;
        log.info("titlePlayerAccount", titlePlayerAccount);
        entityEvent.Entity = {Id: titlePlayerAccount, Type: "title_player_account"};        
    }
    else {
        entityEvent.Entity = {Id: context.currentEntity.Entity, Type: "title_player_account"};
    }
    log.info("entity being written to", entityEvent.Entity);
        
    var eventResult = entity.WriteEvents({Events:[entityEvent]});
    log.info("Write Events Result", eventResult);
    
    
}

var entity: any;
var server: any;

handlers["sendTestEventPlayer"]  = function (args: any, context: IPlayFabContext): void {  
    
    // write event
    log.info("currentEntity", context.currentEntity);


    var entityEvent:any = {};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "test_event_player";    


    if (context.currentEntity == null)
    {
        //do accountInfo to look up title_player_account
        var accountInfo = server.GetUserAccountInfo({PlayFabId:currentPlayerId});
  
        //Get the Title Player Account
        var titlePlayerAccount = accountInfo.UserInfo.TitleInfo.TitlePlayerAccount;
        entityEvent.Entity = {Id: titlePlayerAccount, Type: "title_player_account"};
    }
    else {
        entityEvent.Entity = {Id: context.currentEntity.Entity, Type: "title_player_account"};
    }
        
    var eventResult = entity.WriteEvents({Events:[entityEvent]});
    log.info("Write Events Result", eventResult);
    
    
}

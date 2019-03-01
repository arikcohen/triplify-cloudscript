var entity: any;
var server: any;

handlers["solitaireGameConfigDataChanged"]  = function (args: any, context: IPlayFabContext): void {  
    
    
    var entityEvent:any = {};
    var entityEvent:any = {};
    entityEvent.Entity = {Id: "58AC", Type: "title"};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "SolitaireGameConfigChanged";    
    var eventResult = entity.WriteEvents({Events:[entityEvent]});
    log.info("Write Events Result", eventResult);    
}

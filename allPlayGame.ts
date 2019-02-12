
handlers["StartAllPlayGame"]  = function (args: object, context: IPlayFabContext): void {
    let startTime = new Date();
    let endTime = new Date();
    startTime.setMinutes(startTime.getMinutes() + 2);    
    endTime.setMinutes(startTime.getMinutes() + 5);
    
    let gameData = {"StartDateTimeString":startTime.toUTCString(),"EndDateTimeString":endTime.toUTCString(),"Seed":startTime.toUTCString(),"Difficulty":0} ;    
    
    entity.SetObjects({
        Entity: {
            Id: "4D909557B5F68057",
            Type: "group"
        },
        Objects : [{ 
            ObjectName: "GameData",
            DataObject: gameData
        }]    
    });

    // write event

    var entityEvent:any = {};
    entityEvent.Entity = {Id: "58AC", Type: "title"};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "AllPlayGame";    
    entityEvent.Payload = gameData;
    var eventResult = entity.WriteEvents({Events:[entityEvent]});
    log.info("Write Events Result", eventResult);    
}

handlers["ProcessAllPlayGameResults"] = function (args: object, context:IPlayFabContext): void {
    var allPlayGameObjects = entity.GetObjects({
        Entity: {
            Id: "4D909557B5F68057",
            Type: "group"
        }
    });
    log.info("test", allPlayGameObjects.Objects["GameData"]);
    
    var gameData = allPlayGameObjects.Objects["GameData"];
    log.info("processing game:" + gameData.Seed);

    var entityEvent:any = {};
    entityEvent.Entity = {Id: "58AC", Type: "title"};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "AllPlayGameResults";    
    entityEvent.Payload = null;
    var eventResult = entity.WriteEvents({Events:[entityEvent]});    
    
}

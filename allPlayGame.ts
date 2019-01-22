
handlers["StartAllPlayGame"]  = function (args: object, context: IPlayFabContext): void {
    let startTime = new Date();
    let endTime = startTime;
    endTime.setMinutes(endTime.getMinutes() + 5);
    

    
    entity.SetObjects({
        Entity: {
            Id: "4D909557B5F68057",
            Type: "group"
        },
        Objects : [{ 
            ObjectName: "GameData",
            DataObject:
                {"StartDateTime":startTime.toUTCString(),"EndDateTime":endTime.toUTCString(),"Seed":startTime.toUTCString(),"Difficulty":0} 

        }]    
    });

    // write event

    var entityEvent:any = {};
    entityEvent.Entity = {Id: "58AC", Type: "title"};
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "AllPlayGameStart";    
    var eventResult = entity.WriteEvents({Events:[entityEvent]});
    log.info("Write Events Result", eventResult);
    
    
}

handlers["StartAllPlayGame"] = function (args, context) {
    var startTime = new Date();
    var endTime = new Date();
    startTime.setMinutes(startTime.getMinutes() + 2);
    endTime.setMinutes(startTime.getMinutes() + 5);
    var gameData = { "StartDateTimeString": startTime.toUTCString(), "EndDateTimeString": endTime.toUTCString(), "Seed": startTime.toUTCString(), "Difficulty": 0 };
    entity.SetObjects({
        Entity: {
            Id: "4D909557B5F68057",
            Type: "group"
        },
        Objects: [{
                ObjectName: "GameData",
                DataObject: gameData
            }]
    });
    // write event
    var entityEvent = {};
    entityEvent.Entity = { Id: "58AC", Type: "title" };
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "AllPlayGame";
    entityEvent.Payload = gameData;
    var eventResult = entity.WriteEvents({ Events: [entityEvent] });
    log.info("Write Events Result", eventResult);
};
handlers["ProcessAllPlayGameResults"] = function (args, context) {
    var allPlayGameObjects = entity.GetObjects({
        Entity: {
            Id: "4D909557B5F68057",
            Type: "group"
        }
    });
    var gameData = allPlayGameObjects.Result.Objects["GameData"];
    log.info("processong game:" + gameData.Seed);
    var entityEvent = {};
    entityEvent.Entity = { Id: "58AC", Type: "title" };
    entityEvent.EventNamespace = "com.playfab.events.triplify";
    entityEvent.Name = "AllPlayGameResults";
    entityEvent.Payload = null;
    var eventResult = entity.WriteEvents({ Events: [entityEvent] });
};
//# sourceMappingURL=allPlayGame.js.map
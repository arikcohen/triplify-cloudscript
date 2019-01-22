
handlers["StartAllPlayGame"]  = function (args: object, context: IPlayFabContext): void {
    entity.SetObjects({
        Entity: {
            Id: "4D909557B5F68057",
            Type: "group"
        },
        Objects : { GameData:
            {"StartDateTime":"foo","EndDateTime":"bar","Seed":123,"Difficulty":0} 
        }    
    });
}

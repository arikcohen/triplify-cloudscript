handlers["StartAllPlayGame"] = function (args, context) {
    entity.SetObjects({
        Entity: {
            Id: "4D909557B5F68057",
            Type: "group"
        },
        Objects: [{
                ObjectName: "GameData",
                DataObject: { "StartDateTime": "foo", "EndDateTime": "bar", "Seed": 123, "Difficulty": 0 }
            }]
    });
};
//# sourceMappingURL=allPlayGame.js.map
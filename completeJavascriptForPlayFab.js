var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
function GetEntityToken(params, context) {
    var getTokenRequest = {};
    var getTokenResponse = entity.GetEntityToken(getTokenRequest);
    var entityId = getTokenResponse.Entity.Id;
    var entityType = getTokenResponse.Entity.Type;
}
handlers.GetEntityToken = GetEntityToken;
function GetObjects(params, context) {
    var getObjRequest = {
        Entity: {
            Id: params.entityId,
            Type: params.entityType
        }
    };
    var getObjResponse = entity.GetObjects(getObjRequest);
    var entityId = getObjResponse.Entity.Id;
    var entityType = getObjResponse.Entity.Type;
    var entityObjs = getObjResponse.Objects["testKey"];
}
handlers.GetObjects = GetObjects;
//# sourceMappingURL=completeJavascriptForPlayFab.js.map
var entity;
var server;
handlers["addToGroups"] = function (args, context) {
    var titleRequest = { Keys: ["SolitaireGroup", "AllPlayGroup"] };
    var titleResponse = server.GetTitleData(titleRequest);
    var currentEntity = context.currentEntity;
    if (context.currentEntity == null) {
        //do accountInfo to look up title_player_account        
        currentEntity = server.GetUserAccountInfo({ PlayFabId: currentPlayerId }).UserInfo.TitleInfo.TitlePlayerAccount;
    }
    else {
        currentEntity = context.currentEntity.Entity;
    }
    if (checkGroup(currentEntity, titleResponse.data["SolitaireGroup"]) == false) {
        addToGroup(currentEntity, titleResponse.data["SolitaireGroup"]);
    }
    if (checkGroup(currentEntity, titleResponse.data["AllPlayGroup"]) == false) {
        addToGroup(currentEntity, titleResponse.data["AllPlayGroup"]);
    }
};
var checkGroup = function (currentEntity, groupId) {
    var response = entity.IsMember({
        Entity: currentEntity,
        Group: { Id: groupId }
    });
    return response.data.IsMember;
};
var addToGroup = function (currentEntity, groupId) {
    var response = entity.addMembers({
        Members: [{ currentEntity: currentEntity }],
        Group: { Id: groupId }
    });
};
//# sourceMappingURL=addToGroups.js.map
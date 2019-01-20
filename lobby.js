handlers["createRoomInLobby"] = function (args, context) {
    return { roomId: "123" };
};
var RoomType;
(function (RoomType) {
    RoomType[RoomType["public"] = 0] = "public";
    RoomType[RoomType["private"] = 1] = "private";
})(RoomType || (RoomType = {}));
handlers["createMutliPlayRoom"] = function (args, context) {
    log.debug("context", context);
};
//# sourceMappingURL=lobby.js.map
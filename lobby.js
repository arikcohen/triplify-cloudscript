handlers["createRoomInLobby"] = function (args, context) {
    return { roomId: "123" };
};
var RoomType;
(function (RoomType) {
    RoomType[RoomType["public"] = 0] = "public";
    RoomType[RoomType["private"] = 1] = "private";
})(RoomType || (RoomType = {}));
//# sourceMappingURL=lobby.js.map
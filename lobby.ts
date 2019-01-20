
handlers["createRoomInLobby"]  = function (args: ICreateRoomInLobbyArgs, context: IPlayFabContext): ICreateRoomInLobbyResponse {

    

    
    return { roomId: "123" };
}
enum RoomType {
    public,
    private
}

interface ICreateRoomInLobbyArgs {
    type: RoomType,
    privatePassword: string,
    maxPlayers: number
}

interface ICreateRoomInLobbyResponse {
    roomId: string;
}

handlers["createMutliPlayRoom"]  = function (args: object, context: IPlayFabContext): void {
    log.debug("context",context);
    
}
/** Static object you add your CloudScript endpoints to */
declare var handlers: IPlayFabHandlers;
interface IPlayFabHandlers {
  [handlerId:string]: (args?:any, context?:IPlayFabContext) => any;
}

/** The playfab id for the user who called into CloudScript */
declare var currentPlayerId: string;

/**
 * Static object containing cloudscript logging functions
 * debug(message: string, exc?: any): void,
 * error(message: string, exc?: any): void,
 * info(message: string, exc?: any): void,
 */
declare var log: Logger;
interface Logger {
    debug(message: string, exc?: any): void,
    error(message: string, exc?: any): void,
    info(message: string, exc?: any): void,
}

/**
 * Static object containing cloudscript external request functions
 * request(url: string, method?: string, content?: string, contentType?: string): string
 */
declare var http: IPlayFabHttp;
interface IPlayFabHttp {
    request(url: string, method?: string, content?: string, contentType?: string, headers?: { [key: string]: string }): string
}

interface IPlayFabContext {
    playStreamEvent: PlayStreamModels.IBasePlayStreamEvent;
    playerProfile: IPlayFabPlayerProfile;
    currentEntity: any;
}

interface IPlayFabPlayerProfile {
    PlayerId: string;
    DisplayName: string;
}

declare var script: IPlayFabEnvironment;
interface IPlayFabEnvironment {
    revision: number;
    titleId: string;
}

interface IPlayFabError {
    cloudScriptErrorCode : string;
    stack : string;
    apiErrorInfo?: IApiErrorInfo;
}

interface IApiErrorInfo {
    api : string;
    request : any;
    result : any;
    apiError?: IApiError;
}

interface IApiError {
    code : number;
    status : string;
    error : string;
    errorCode : number;
    errorMessage : string;
    errorDetails?: { [index:string] : { message: string[] } };
}




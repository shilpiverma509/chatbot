export const FETCH_CHAT = "fetchChat";
export const ADD_MESSAGE="addNewMessage";

export function fetchChat(data){
  return {
    type:FETCH_CHAT,
    payload:data
  }
}

export function addNewMessage(data){
  console.log("äction",data)
  return {
    type:ADD_MESSAGE,
    payload:data
  }
}

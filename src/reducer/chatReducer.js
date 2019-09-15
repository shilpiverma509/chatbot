import {FETCH_CHAT, ADD_MESSAGE} from '../actions/actions';

export default function (state={},action){
  switch(action.type){
    case FETCH_CHAT:
      return state;
    case ADD_MESSAGE:
      return{
        ...state,
        [action.payload.name]: action.payload.messages
      };
    default:
      return state;
  }
}


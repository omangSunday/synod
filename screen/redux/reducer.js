import {LOOPITEMSONE,LOOPITEMSTWO,USERID,CHECKISDARK,TOTALCOUNT,CHOISEIDARRAY,QUESTION,QUESTIONRESULT,SETMODAL,QUESTIONCOUNT,QUESTIONCOUNTINDEX,SYNODQUESTION,QUESTIONRESULTSYNOD,SETINPUTTEXT} from './action';

const initialLoginState = {
    isLoading: true,
    loopItemTwo: [],
    loopItemOne: [],
    userToken: null,
    userName: null,
    userImg: null,
    isDark: true,
    totalCount: 0,
    ChoiseIDArray: [],
    question: [],
    questResult: [],
    shomModal: false,
    questCount: 0,
    questCountIndex: 0,
    questSynod: [],
    questResultSynod: [],
    inputtext: ''
  };


  function userReducer (state = initialLoginState, action) {
    switch( action.type ) {
        case LOOPITEMSONE: 
        return {
          ...state,
          loopItemOne: action.items,
          isLoading: false
        };

        case LOOPITEMSTWO: 
        return {
          ...state,
          loopItemTwo: action.items,
          isLoading: false
        };

        case USERID:
        return {
          ...state,
          userToken: action.id,
          userName: action.user,
          userImg: action.img,
        };

        case CHECKISDARK:
        return {
          ...state,
          isDark: action.isdark,
        };

        case TOTALCOUNT:
          return {
            ...state,
            totalCount: action.payload,
          };

          case CHOISEIDARRAY:
          return {
            ...state,
            ChoiseIDArray: action.payload,
          };

          case QUESTION:
            return {
              ...state,
              question: action.payload,
            };

            case QUESTIONRESULT:
            return {
              ...state,
              questResult: action.payload,
            };

            case SETMODAL:
            return {
              ...state,
              shomModal: action.payload,
            };

            case QUESTIONCOUNT:
            return {
              ...state,
              questCount: action.payload,
            };

            case QUESTIONCOUNTINDEX:
            return {
              ...state,
              questCountIndex: action.payload,
            };

            case SYNODQUESTION:
            return {
              ...state,
              questSynod: action.payload,
            };

            case QUESTIONRESULTSYNOD:
            return {
              ...state,
              questResultSynod: action.payload,
            };

            case SETINPUTTEXT:
            return {
              ...state,
              inputtext: action.payload,
            };

        default:
            return state;
    }
  };

  export default userReducer;

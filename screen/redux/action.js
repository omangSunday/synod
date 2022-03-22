export const LOOPITEMSONE = 'LOOPITEMSONE';
export const LOOPITEMSTWO = 'LOOPITEMSTWO';
export const TOTALCOUNT = 'TOTALCOUNT';
export const USERID = 'USERID';
export const CHECKISDARK = 'CHECKISDARK';
export const CHOISEIDARRAY = 'CHOISEIDARRAY';
export const QUESTION = 'QUESTION';
export const SYNODQUESTION = 'SYNODQUESTION';
export const QUESTIONRESULT = 'QUESTIONRESULT';
export const QUESTIONRESULTSYNOD = 'QUESTIONRESULTSYNOD';
export const QUESTIONCOUNT = 'QUESTIONCOUNT';
export const QUESTIONCOUNTINDEX = 'QUESTIONCOUNTINDEX';
export const SETMODAL = 'SETMODAL';
export const SETINPUTTEXT = 'SETINPUTTEXT';
export const setUserID = (userToken,userName,userImg) => dispatch => {
    dispatch({
        type: USERID,
        id: userToken,
        user: userName,
        img: userImg
    });
};

export const setLoopItemOne = loopItemOne => dispatch => {
    dispatch({
        type: LOOPITEMSONE,
        items: loopItemOne,
    });
};


export const setLoopItemTwo = loopItemTwo => dispatch => {
    dispatch({
        type: LOOPITEMSTWO,
        items: loopItemTwo,
    });
};

export const setTotalCount = totalCount => dispatch => {
    dispatch({
        type: TOTALCOUNT,
        payload: totalCount,
    });
};

export const setChoiseIDArray = ChoiseIDArray => dispatch => {
    dispatch({
        type: CHOISEIDARRAY,
        payload: ChoiseIDArray,
    });
};

export const setIsDark = isDark => dispatch => {
    dispatch({
        type: CHECKISDARK,
        isdark: isDark,
    });
};

export const setQuest = question => dispatch => {
        dispatch({
            type: QUESTION,
            payload: question,
        });
};

export const setQuestResult = questResult => dispatch => {
    dispatch({
        type: QUESTIONRESULT,
        payload: questResult,
    });
};

export const setModal = shomModal => dispatch => {
    dispatch({
        type: SETMODAL,
        payload: shomModal,
    });
};

export const setQuestCount = questCount => dispatch => {
    dispatch({
        type: QUESTIONCOUNT,
        payload: questCount,
    });
};

export const setQuestCountIndex = questCountIndex => dispatch => {
    dispatch({
        type: QUESTIONCOUNTINDEX,
        payload: questCountIndex,
    });
};

export const setQuestSynode = questSynod => dispatch => {
    dispatch({
        type: SYNODQUESTION,
        payload: questSynod,
    });
};

export const setQuestResultSynode = questResultSynod => dispatch => {
    dispatch({
        type: QUESTIONRESULTSYNOD,
        payload: questResultSynod,
    });
};

export const setOnChangeText = inputtext => dispatch => {
    dispatch({
        type: SETINPUTTEXT,
        payload: inputtext,
    });
};
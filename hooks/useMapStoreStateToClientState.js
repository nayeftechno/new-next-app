import {autorun} from "mobx";
import {useState,useEffect} from "react";

function useMapStateToClientState(store,storePropsSelectionFunction){
    
    const [state,setState] = useState(storePropsSelectionFunction(store));

    useEffect(()=>{
        autorun(()=>{
            setState(storePropsSelectionFunction(store));
        });
    },[]);

    return state;

};
export {useMapStateToClientState};


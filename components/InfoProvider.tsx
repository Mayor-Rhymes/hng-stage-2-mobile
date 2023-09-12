import { InitialState } from "@react-navigation/native";
import { createContext, useReducer, ReactNode } from "react";



export interface CVContextType {

    fullName: string;
    slackUsername: string;
    githubHandle: string;
    personalBio: string;
    
}

const initialState: CVContextType = {
    fullName: "Olakunle Raheem",
    slackUsername: "Olakunle Raheem (Mayor)",
    githubHandle: "https://github.com/Mayor-Rhymes",
    personalBio:
      "I am a full stack developer from Lagos, Nigeria. I enjoy solving difficult problems even though they make me cry sometimes 🤣🤣.I am an academician at heart with both a National Diploma and a Bachelor's Degree in Computer Engineering.",
  };

export type Actions = 
  | {type: "changeFullName", payload: string}
  | {type: "changeSlackUsername", payload: string}
  | {type: "changeGithubHandle", payload: string}
  | {type: "changeBio", payload: string}
  
export interface contextType {
    state: CVContextType;
    dispatch: React.Dispatch<Actions>
}

export const Info = createContext<{
    state: CVContextType,
    dispatch: React.Dispatch<Actions>
}>({
    state: initialState,
    dispatch: () => null
});


const CVReducer = (state: CVContextType, action: Actions) => {

    switch(action.type){

        case "changeFullName":
            return {
                ...state,
                fullName: action.payload
            }

        case "changeSlackUsername":
            return {

                ...state,
                slackUsername: action.payload
            }


        case "changeGithubHandle":
            return {

                ...state,
                githubHandle: action.payload
            }

        case "changeBio":
            return {

                ...state,
                personalBio: action.payload,
            }

        default:
            return {
                ...state
            }
    }
}






export default function InfoProvider({ children }: { children: ReactNode }) {


  const [state, dispatch] = useReducer(CVReducer, initialState);


  return <Info.Provider value={{state, dispatch}}>{children}</Info.Provider>;


}

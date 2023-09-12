import { useContext } from "react";
import { Info } from "../components/InfoProvider";


export default function useInfo() {

    const context = useContext(Info);

    if(context){

        return context;
    } else {
        return "This component does not exist within the scope of the InfoProvider component.";
    }
    
}
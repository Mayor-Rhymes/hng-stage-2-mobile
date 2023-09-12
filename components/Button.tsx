
import { Pressable, PressableProps, StyleSheet } from "react-native";
import type { PropsWithChildren } from "react";
import { ReactNode } from "react";


interface CompProps extends PressableProps {
    
}

export default function Button({
    children, ...props
}: PropsWithChildren<CompProps>) {

   return (
    <Pressable {...props}>
        {children}
    </Pressable>
   )
}




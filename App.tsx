import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoProvider from "./components/InfoProvider";
import Home from "./screens/Home";
import Edit from "./screens/Edit";


export type StackList = {

   Home: undefined,
   Edit: undefined,


}


const Stack = createNativeStackNavigator<StackList>();
export default function App() {
  return (
    <NavigationContainer>
      <InfoProvider>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
        <StatusBar hidden={true} />
      </InfoProvider>
    </NavigationContainer>
  );
}

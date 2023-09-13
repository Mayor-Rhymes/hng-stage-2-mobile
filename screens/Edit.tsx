import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import useInfo from "../hooks/useInfo";
import { contextType } from "../components/InfoProvider";
import { StackList } from "../App";
import { useState, useRef } from "react";
import Button from "../components/Button";

type Props = NativeStackScreenProps<StackList, "Edit">;

export default function Edit({ route, navigation }: Props) {
  const fullNameRef = useRef<TextInput | null>(null);
  const usernameRef = useRef<TextInput | null>(null);
  const githubRef = useRef<TextInput | null>(null);
  const bioRef = useRef<TextInput | null>(null);

  const { state, dispatch } = useInfo() as contextType;
  const { fullName, slackUsername, githubHandle, personalBio } = state;

  const [newfullName, setNewFullName] = useState(fullName);
  const [username, setUsername] = useState(slackUsername);
  const [github, setGithub] = useState(githubHandle);
  const [bio, setBio] = useState(personalBio);
  const [clickCount, setClickCount] = useState(0);

  const handleEdit = () => {
    if (newfullName && username && github && bio) {
      dispatch({ type: "changeFullName", payload: newfullName });
      dispatch({ type: "changeSlackUsername", payload: username });
      dispatch({ type: "changeGithubHandle", payload: github });
      dispatch({ type: "changeBio", payload: bio });
      navigation.goBack();
    } else {
      if (clickCount > 10) {
        Alert.alert(
          "This is getting annoying",
          "You have pressed the edit button at least 10 times without actually making any changes",
          [
            {
              text: "Ok",
              style: "cancel",
            },
            { text: "Go Back", onPress: () => navigation.goBack() },
          ]
        );
      } else {
        Alert.alert(
          "No Credentials were filled",
          "You should enter all credentials",
          [
            {
              text: "Ok",
              style: "cancel",
            },
            { text: "Go Back", onPress: () => navigation.goBack() },
          ]
        );
        setClickCount(clickCount + 1);
      }
    }
  };

  return (
    <ScrollView
      
      contentContainerStyle={{flexGrow: 1, backgroundColor: "#ffffe0", justifyContent: "center", alignItems: "center", gap: 20, paddingVertical: 10 }}
    >
      <Text style={styles.mainText}>This is the edit screen</Text>

      <TextInput
        style={styles.textBox}
        value={newfullName}
        placeholder="Please enter new full name"
        placeholderTextColor="#65000b"
        onChangeText={setNewFullName}
        autoComplete="name"
        enterKeyHint="next"
        inputMode="text"
        returnKeyType="next"
        ref={fullNameRef}
        blurOnSubmit={false}
        onSubmitEditing={() => usernameRef.current?.focus()}
      />

      <TextInput
        style={styles.textBox}
        value={username}
        placeholder="Please enter new slack username"
        placeholderTextColor="#65000b"
        onChangeText={setUsername}
        autoComplete="username"
        enterKeyHint="next"
        inputMode="text"
        returnKeyType="next"
        ref={usernameRef}
        blurOnSubmit={false}
        onSubmitEditing={() => githubRef.current?.focus()}
      />

      <TextInput
        style={styles.textBox}
        value={github}
        placeholder="Please enter new github handle"
        placeholderTextColor="#65000b"
        onChangeText={setGithub}
        enterKeyHint="next"
        inputMode="text"
        returnKeyType="next"
        ref={githubRef}
        blurOnSubmit={false}
        onSubmitEditing={() => bioRef.current?.focus()}
      />

      <TextInput
        style={styles.textBoxBio}
        value={bio}
        placeholder="Please enter new personal bio"
        placeholderTextColor="#65000b"
        multiline={true}
        onChangeText={setBio}
        autoComplete="name"
        enterKeyHint="done"
        inputMode="text"
        returnKeyType="done"
        ref={bioRef}
      />

      <Button style={styles.editButton} onPress={handleEdit}>
        <Text style={{ fontSize: 20, color: "#ffffe0" }}>Edit</Text>
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
    
    
  },

  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#65000b",
  },

  textBox: {
    width: "80%",
    backgroundColor: "#f5f5dc",
    height: 50,
    borderRadius: 7,
    padding: 15,
    fontSize: 16,
    color: "#65000b",
  },
  textBoxBio: {
    width: "80%",
    backgroundColor: "#f5f5dc",
    height: 200,
    borderRadius: 7,
    padding: 15,
    fontSize: 16,
    color: "#65000b",
  },
  editButton: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#65000b",
    width: "50%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

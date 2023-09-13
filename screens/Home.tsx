import { View, Text, StyleSheet, ScrollView } from "react-native";
import useInfo from "../hooks/useInfo";
import { contextType } from "../components/InfoProvider";
import Button from "../components/Button";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackList } from "../App";

type Props = NativeStackScreenProps<StackList, "Home">;

export default function Home({ route, navigation }: Props) {
  const { state } = useInfo() as contextType;
  const { fullName, slackUsername, githubHandle, personalBio } = state;

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: "#ffffe0",
        justifyContent: "center",
        gap: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
    >
      <Text style={styles.titleText}>CV View</Text>

      <View style={styles.roundBox}>
        <Text style={{ fontSize: 15, color: "#65000b" }}>Fullname:</Text>
        <Text style={styles.mainText}>{fullName}</Text>
      </View>

      <View style={styles.roundBox}>
        <Text style={{ fontSize: 15, color: "#65000b" }}>Slack Username:</Text>
        <Text style={styles.mainText}>{slackUsername}</Text>
      </View>

      <View style={styles.roundBox}>
        <Text style={{ fontSize: 15, color: "#65000b" }}>Github Handle:</Text>
        <Text style={styles.mainText}>{githubHandle}</Text>
      </View>

      <View style={styles.roundBox}>
        <Text style={{ fontSize: 15, color: "#65000b" }}>Personal Bio:</Text>
        <Text style={styles.bio}>{personalBio}</Text>
      </View>

      <Button
        style={styles.editButton}
        onPress={() => navigation.navigate("Edit")}
      >
        <Text style={{ fontSize: 20, color: "#FFFFFF" }}>Edit</Text>
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    gap: 20,
  },

  titleText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#65000b",
  },

  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#65000b",
  },

  roundBox: {
    borderRadius: 20,
    backgroundColor: "#fff2de",
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 10,
  },

  bio: {
    elevation: 3,
    padding: 20,
    fontSize: 16,
    lineHeight: 20,
    color: "#65000b",
  },

  editButton: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#65000b",
    width: "50%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

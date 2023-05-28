import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("Simple Text");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button
        onPress={() => {
          console.log("Button pressed");
          text === "Simple Text"
            ? setText("Hello World!")
            : setText("Simple Text");
        }}
        title={"Button"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

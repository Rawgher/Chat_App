import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import MessageBubble from "./MessageBubble";

const ChatScreen = props => {
  const messages = [
    { isOwnMessage: false, message: "Hi, I'm Rawgher. How can I help you?" },
    {
      isOwnMessage: true,
      message: "Hello Rawgher, I wanted to upgrade to the next tier of service."
    },
    {
      isOwnMessage: false,
      message: "Sure thing! I can help you get that taken care of."
    }
  ];

  const bubbles = messages.map((m, i) => <MessageBubble {...m} key={i} />);

  return (
    <View behavior="padding" style={styles.container}>
      <View style={styles.bubbleContainer}>{bubbles}</View>

      <View style={styles.messageBoxContainer}>
        <TextInput style={styles.messageBox} />

        <TouchableOpacity>
          <Text style={styles.sendButton}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bubbleContainer: {
    flex: 1
  },
  messageBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#eee",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  messageBox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    paddingHorizontal: 5
  },
  sendButton: {
    color: "blue",
    marginLeft: 10,
    marginRight: 5,
    fontSize: 16,
    fontWeight: "500"
  }
});

export default ChatScreen;

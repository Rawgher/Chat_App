import PropTypes from "prop-types";
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import MessageBubble from "./MessageBubble";

let scrollWindow;
let scrollHeight;

const ChatScreen = props => {
  const bubbles = props.messages.map((m, i) => (
    <MessageBubble {...m} key={i} />
  ));

  const spacer = Platform.OS === "ios" ? <KeyboardSpacer /> : null;

  return (
    <View behavior="padding" style={styles.container}>
      <ScrollView
        style={styles.bubbleContainer}
        ref={scrollview => {
          scrollWindow = scrollview;
        }}
        onLayout={event => {
          scrollHeight = event.nativeEvent.layout.height;
        }}
        onContentSizeChange={(width, height) => {
          if (scrollHeight < height) {
            scrollWindow.scrollTo({ y: height - scrollHeight });
          }
        }}
      >
        {bubbles}
      </ScrollView>

      <View style={styles.messageBoxContainer}>
        <TextInput
          style={styles.messageBox}
          value={props.composingMessage}
          onChangeText={props.onComposeMessageUpdate}
          onSubmitEditing={props.onSendMessage}
          returnKeyType="send"
        />

        <TouchableOpacity onPress={props.onSendMessage}>
          <Text style={styles.sendButton}>Send</Text>
        </TouchableOpacity>
      </View>
      {spacer}
    </View>
  );
};

ChatScreen.propTypes = {
  messages: PropTypes.array.isRequired,
  composingMessage: PropTypes.string,
  onComposeMessageUpdate: PropTypes.func.isRequired,
  onSendMessage: PropTypes.func.isRequired
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

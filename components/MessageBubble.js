import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MessageBubble = props => (
  <View style={[styles.bubble, props.isOwnMessage && styles.ownBubble]}>
    <Text
      style={[styles.messageText, props.isOwnMessage && styles.ownMessageText]}
    >
      {props.message}
    </Text>
  </View>
);

MessageBubble.propTypes = {
  message: PropTypes.string.isRequired,
  isOwnMessage: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  bubble: {
    width: 250,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#ececec",
    borderRadius: 10
  },
  ownBubble: {
    backgroundColor: "#457de5ff",
    alignSelf: "flex-end"
  },
  messageText: {
    color: "#333"
  },
  ownMessageText: {
    color: "#fff"
  }
});

export default MessageBubble;

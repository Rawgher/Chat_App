import PropTypes from "prop-types";
import React, { Component } from "react";
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
let apiPollIntervalID;

class ChatScreen extends Component {
  constructor(props) {
    super(props);

    this._fetchResponses = this._fetchResponses.bind(this);
  }

  componentDidMount() {
    apiPollIntervalID = setInterval(this._fetchResponses, 5000);
  }

  componentWillUnmount() {
    clearInterval(apiPollIntervalID);
  }

  _fetchResponses() {
    fetch("http://192.168.50.7:8080/messages")
      .then(response => response.json())
      .then(data => {
        if (data && data.message) {
          this.props.onReceivedMessage(data);
        }
      });
  }
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Chat",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text style={styles.backText}>Done</Text>
      </TouchableOpacity>
    )
  });

  //   goHome() {
  //     this.props.navigation.popToTop();
  //   }

  render() {
    const bubbles = this.props.messages.map((m, i) => (
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
            value={this.props.composingMessage}
            onChangeText={this.props.onComposeMessageUpdate}
            onSubmitEditing={this.props.onSendMessage}
            returnKeyType="send"
          />

          <TouchableOpacity onPress={this.props.onSendMessage}>
            <Text style={styles.sendButton}>Send</Text>
          </TouchableOpacity>
        </View>
        {spacer}
      </View>
    );
  }
}

ChatScreen.propTypes = {
  messages: PropTypes.array.isRequired,
  composingMessage: PropTypes.string,
  onComposeMessageUpdate: PropTypes.func.isRequired,
  onSendMessage: PropTypes.func.isRequired,
  onReceivedMessage: PropTypes.func.isRequired
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
  },
  backText: {
    fontSize: 15,
    marginTop: Platform.OS === "ios" ? -5 : 0,
    marginRight: 15
  }
});

export default ChatScreen;

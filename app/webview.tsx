import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { WebView } from "react-native-webview";

const WebViewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "http://www.polycube.co.kr/v2/" }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;

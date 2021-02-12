import React from "react";
import { SafeAreaView } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import Classes from "./scenes/Classes";
import Materials from "./scenes/Materials";
import Hello from "./scenes/Hello";
import WebViewScene from "./scenes/WebViewScene";

function Main() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Router>
        <Stack key="root">
          <Scene key="Hello" component={Hello} hideNavBar={true} />
          <Scene key="Classes" component={Classes} hideNavBar={true} />
          <Scene key="Materials" component={Materials} hideNavBar={true} />
          <Scene key="WebViewScene" component={WebViewScene} hideNavBar={true} />
        </Stack>
      </Router>
    </SafeAreaView>
  );
}

export default Main;

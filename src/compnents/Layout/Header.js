import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { style } from "../../assets/style";

function Header() {
  return (
    <View style={[headerStyle.header, style.shadowBottom]}>
      <TouchableOpacity
        onPress={() => Actions.pop()}
        style={{ width: 40 }}
      >
        <Image
          source={require("../../assets/images/back.png")}
          style={style.icon30}
        />
      </TouchableOpacity>
      <View>
        <Image
          source={require("../../assets/images/logo.png")}
          style={style.logo}
        />
      </View>
      <TouchableOpacity
        onPress={() => Actions.push("haaha")}
        style={style.footerItem}
      >
        <Image
          source={require("../../assets/images/menu.png")}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const headerStyle = StyleSheet.create({
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    overflow: "hidden",
  },
});

export default Header;

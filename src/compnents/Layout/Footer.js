import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { style } from "../../assets/style";

function Footer() {
  return (
    <View style={footerStyles.shadow}>
      <View style={footerStyles.footer}>
        <TouchableOpacity
          onPress={() => Actions.push("Classes")}
          style={footerStyles.footerItem}
        >
          <Image
            source={require("../../assets/images/classes.png")}
            style={style.icon30}
          />
          <Text>الصفوف</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Actions.push("haaha")}
          style={footerStyles.footerItem}
        >
          <Image
            source={require("../../assets/images/contact.png")}
            style={style.icon30}
          />
          <Text>تواصل معنا</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Actions.push("haaha")}
          style={footerStyles.footerItem}
        >
          <Image
            source={require("../../assets/images/home.png")}
            style={style.icon30}
          />
          <Text>الرئيسية</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Actions.push("haaha")}
          style={footerStyles.footerItem}
        >
          <Image
            source={require("../../assets/images/about.png")}
            style={style.icon30}
          />
          <Text>عنا</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: 80,
  },
  footerItem: {
    alignItems: "center",
    flex: 1,
  },
  shadow: {
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "red",
    shadowOpacity: 0.4,
    elevation: 3,
    // background color must be set
    backgroundColor: "#0000", // invisible color
    height: 90,
    borderTopWidth: 0
  },
});

export default Footer;

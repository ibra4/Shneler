import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { style } from "../../assets/style";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, title = null }) {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={[style.container]}>
        {title && (
          <View style={layoutStyle.titleContainer}>
            <Text style={layoutStyle.title}>{title}</Text>
            <View style={layoutStyle.titleLine} />
          </View>
        )}
        {children}
      </ScrollView>
      <Footer />
    </>
  );
}

const layoutStyle = StyleSheet.create({
  titleContainer: {
    padding: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryBlue
  },
  titleLine: {
    height: 2,
    width: 150,
    marginBottom: 5,
    backgroundColor: colors.primaryOrange,
    position: 'absolute',
    right: 15,
    bottom: 0
  }
})

export default Layout;

import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, SafeAreaView, I18nManager } from "react-native";
import { colors } from "../../assets/colors";
import { style } from "../../assets/style";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, title = null, icon = null, webView = false }) {
  return (
    <>
      <Header />
      <SafeAreaView style={[style.container, { flex: 1 }]}>
        {title && (
          <View style={layoutStyle.titleContainer}>
            <View style={layoutStyle.titleRow}>
              {icon && <Image source={icon} style={[style.icon30, { [I18nManager.isRTL ? 'marginRight' : 'marginLeft']: 10 }]} />}
              <Text style={layoutStyle.title}>{title}</Text>
            </View>
            <View style={layoutStyle.titleLine} />
          </View>
        )}
        {webView ? children : <ScrollView>
          {children}
        </ScrollView>}
      </SafeAreaView>
      <Footer />
    </>
  );
}

const layoutStyle = StyleSheet.create({
  titleContainer: {
    padding: 15,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
  titleRow: {
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    // direction: 'rtl',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryBlue,
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

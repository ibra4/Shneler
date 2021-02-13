import React from 'react'
import Layout from '../compnents/Layout/Layout'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview';

function WebViewScene({ material }) {

    const ActivityIndicatorElement = () => {
        return (
            <View style={styles.activityIndicatorStyle}>
                <ActivityIndicator
                    color="#009688"
                    size="large"
                />
            </View>
        );
    };

    return (
        <Layout title={material.label} icon={material.icon} webView>
            <WebView
                source={{ uri: material.url }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                renderLoading={ActivityIndicatorElement}
                startInLoadingState={true}
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
    },
    activityIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    }
});

export default WebViewScene

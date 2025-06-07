import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const handleConsoleMessage = (message: any) => {
    console.log('WebView Console:', message.nativeEvent.message);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <WebView
        source={{ uri: 'https://ittory.co.kr' }}
        style={styles.webview}
        startInLoadingState={true}
        scalesPageToFit={true}
        bounces={false}
        onConsoleMessage={handleConsoleMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webview: {
    flex: 1,
  },
}); 
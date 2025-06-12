import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

export default function HomeScreen() {
  const isConsoleLevel = (level: any): level is 'log' | 'error' | 'warn' | 'info' | 'debug' =>
    ['log', 'error', 'warn', 'info', 'debug'].includes(level);

  const handleConsoleMessage = (event: WebViewMessageEvent) => {
    try {
      const { level, args } = JSON.parse(event.nativeEvent.data);
      if (isConsoleLevel(level)) {
        console[level]('[WebView]', ...args);
      } else {
        console.log('[WebView]', ...args);
      }
    } catch {
      console.log('[WebView][raw]', event.nativeEvent.data);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <WebView
        source={{ uri: 'https://dev-client.ittory.co.kr/' }}
        style={styles.webview}
        startInLoadingState={true}
        scalesPageToFit={true}
        bounces={false}
        onMessage={handleConsoleMessage}
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
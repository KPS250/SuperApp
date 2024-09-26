import {Federated} from '@callstack/repack/client';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const News = React.lazy(() => Federated.importModule('news', './App'));

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
  </View>
);

const NewsScreen = () => {
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <News />
    </React.Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewsScreen;

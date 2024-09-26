import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {ScriptManager, Federated} from '@callstack/repack/client';

const resolveURL = Federated.createURLResolver({
  containers: {
    //MiniApp: 'http://localhost:9000/[name][ext]',
    MiniApp: `https://storage.googleapis.com/bundle_store/repack/${Platform.OS}/[name][ext]`,
    news: `https://github.com/callstack/news-mini-app-showcase/releases/download/news-android%400.0.1/[name][ext]`,
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }
  console.log('URL', url);

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);

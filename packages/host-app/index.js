import {AppRegistry, Platform, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {ScriptManager, Federated} from '@callstack/repack/client';

LogBox.ignoreLogs(['Warning: ...']);

// MiniApp Remote config
const appUrl = 'https://storage.googleapis.com/mini_app';
const updateFile = 'update.json';
let latestVersion = '1.0.0';

// Function to fetch the latest version from the API
const fetchLatestVersion = async () => {
  try {
    const updateResponse = await fetch(
      `${appUrl}/${updateFile}?t=${new Date().getTime()}`,
    );
    if (!updateResponse.ok) {
      throw new Error('Failed to fetch version data');
    }

    const updateData = await updateResponse.json();
    // Update the latestVersion from the JSON
    latestVersion = updateData.latest_version;
    console.log('Fetched latest version:', latestVersion);
  } catch (e) {
    console.error('Failed to fetch the latest version:', e);
  }
};

// Main function to initialize ScriptManager after fetching version
const initializeScriptManager = async () => {
  // Fetch the latest version
  await fetchLatestVersion();

  // Setup the URL resolver with the fetched latest version
  const resolveURL = Federated.createURLResolver({
    containers: {
      //MiniApp: 'http://localhost:9000/[name][ext]',
      MiniApp: `${appUrl}/${latestVersion}/${Platform.OS}/[name][ext]`,
      news: `https://github.com/callstack/news-mini-app-showcase/releases/download/news-${Platform.OS}%400.0.1/[name][ext]`,
    },
  });

  // Add the resolver to ScriptManager
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
    console.log('Resolved URL:', url);

    return {
      url,
      cache: false, // For development
      query: {
        platform: Platform.OS,
      },
    };
  });
};

// Initialize the ScriptManager and register the App
initializeScriptManager();
AppRegistry.registerComponent(appName, () => App);

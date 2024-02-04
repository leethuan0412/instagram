import React from 'react';
import codePush from 'react-native-code-push';
import { Host } from 'react-native-portalize';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingProgress } from 'src/components/loading';
import { progressHolder } from 'src/components/loading/LoadingProgressRef';
import { useSplashScreen } from 'src/hooks';
import RootNavigation from 'src/navigation';
import NavigationUtils from 'src/navigation/navigation-utils';
import Store from 'src/store';
import './src/translate/configs';
import useNotification from './src/utils/notification';

function App() {
  useNotification();
  useSplashScreen();

  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <Host>
          <RootNavigation
            ref={(navigatorRef: any) => {
              NavigationUtils.setTopLevelNavigator(navigatorRef);
            }}
          />
          <LoadingProgress ref={progressHolder} />
        </Host>
      </PersistGate>
    </Provider>
  );
}

export default codePush(App);

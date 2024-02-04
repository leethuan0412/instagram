import AsyncStorage from '@react-native-async-storage/async-storage';

const PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default PersistConfig;

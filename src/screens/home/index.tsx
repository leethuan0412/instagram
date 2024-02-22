import { useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dataNews, dataStory } from 'src/utils/mock';
import { Header } from './components/Header';
import News from './components/News';
import Story from './components/Story';
import { styles } from './styles';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);

  const renderStory = ({ item, index }: any) => {
    return <Story data={item} index={index} />;
  };

  const renderNews = ({ item }: any) => {
    return <News data={item} />;
  };

  const onRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={dataNews}
        ListHeaderComponent={
          <View>
            <FlatList
              data={dataStory}
              horizontal
              renderItem={renderStory}
              keyExtractor={(item) => `${item?.id}`}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        }
        renderItem={renderNews}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};
export default HomeScreen;

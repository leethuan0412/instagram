import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'src/components';

import { useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import NavigationUtils from 'src/navigation/navigation-utils';
import { Colors, Images, Metrics } from 'src/themes';
import { dataStory } from 'src/utils/mock';

const StoryScreen = () => {
  const sliceRef = useRef<any>(null);
  const [progress] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = useRoute()?.params as {
    data: {
      user_name: string;
    };
  };
  console.log(data, 'dataaa');

  const startProgressBar = useCallback(() => {
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished && currentIndex < dataStory.length - 1) {
        sliceRef?.current?.scrollToIndex({ index: currentIndex + 1 });
        progress.setValue(0);
      } else if (currentIndex == dataStory.length - 1) {
        NavigationUtils.goBack();
      }
    });
  }, [currentIndex, progress]);
  const onLongPress = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).stop();
  };

  useEffect(() => {
    startProgressBar();
  }, [startProgressBar]);

  const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {
    console.log(viewableItems, 'view');
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={onLongPress}
        style={{ flex: 1, backgroundColor: '#AF9F93' }}
      >
        <View style={styles.progress}>
          <Animated.View style={[styles.progressBar, { width }]} />
        </View>
        <View style={[styles.header]}>
          <View style={[styles.view_avt]}>
            <FastImage
              source={item?.story}
              resizeMode="cover"
              style={styles.avt}
            />
            <Text style={styles.name}>{item?.user_name}</Text>
            <Text style={styles.time}>{item?.create_at} giờ</Text>
          </View>
          <TouchableOpacity onPress={() => NavigationUtils.goBack()}>
            <FastImage
              source={Images.ic_exit}
              resizeMode="contain"
              style={styles.exit}
              tintColor={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.view_video}>
          <FastImage
            source={Images.img_story}
            style={styles.video}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ref={sliceRef}
        data={dataStory}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={(item) => `${item?.id}`}
        onViewableItemsChanged={handleOnViewableItemsChanged}
      />
    </SafeAreaView>
  );
};
{
  /* <Video
ref={videoRef}
source={require('../../assets/video.mp4')}
style={styles.video}
resizeMode="cover"
onBuffer={(e) => console.log(e)}
repeat
onError={(error) => console.error('Error: ', error)}
onEnd={() => console.log('end')}
/> */
}

const styles = StyleSheet.create({
  progress: {
    borderWidth: 0.1,
    borderColor: Colors.gray[500],
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#CCCCCC90',
  },
  progressBar: {
    backgroundColor: '#FFFFFF80',
    height: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  exit: {
    height: 24,
    width: 24,
  },
  time: {
    marginLeft: 10,
    fontSize: 14,
    color: Colors.gray[300],
    fontWeight: '500',
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.white,
    fontWeight: '500',
  },
  avt: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
  view_avt: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    zIndex: 1,
  },
  view_video: {
    justifyContent: 'center',
    flex: 1,
  },
  video: {
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
  },
});

export default StoryScreen;

import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'src/components';
import Screen from 'src/navigation/configs/screen';
import NavigationUtils from 'src/navigation/navigation-utils';
import { Images, Metrics } from 'src/themes';
import { numberHelper } from 'src/utils/utils';
import { styles } from '../styles';

interface Props {
  data: any;
}
const { width } = Dimensions.get('screen');

const News = (props: Props) => {
  const { data } = props;
  const sliceRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem = ({ item }: any) => {
    return (
      <FastImage
        source={item?.image}
        resizeMode="cover"
        style={{ height: 300, width: Metrics.screenWidth, aspectRatio: 1 }}
      />
    );
  };

  const DotPanigation = ({ data, scrollX }: any) => {
    return (
      <View style={[styles.row, { justifyContent: 'center', top: 20 }]}>
        {data.map((_: any, idx: number) => {
          const inputRange = [
            (idx - 1) * width,
            idx * width,
            (idx + 1) * width,
          ];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [6, 6, 6],
            extrapolate: 'clamp',
          });
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#ccc', '#246BFD', '#ccc'],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={idx.toString()}
              style={[styles.dotStyle, { width: dotWidth, backgroundColor }]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.view_news} key={data?.id}>
      <View style={[styles.row, { paddingHorizontal: 10, marginBottom: 10 }]}>
        <View style={[styles.row, { flex: 1 }]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => NavigationUtils.navigate(Screen.STORY)}
          >
            <LinearGradient
              colors={['#FBB701', '#E1306C']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.view_mini_avt}
            >
              <View style={styles.view_story}>
                <FastImage
                  source={data?.avatar}
                  resizeMode="cover"
                  style={styles.mini_avt}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.user_name}>{data?.user_name}</Text>
        </View>
        <Text style={styles.dot}>...</Text>
      </View>
      <FlatList
        data={data?.content_image}
        ref={sliceRef}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        viewabilityConfig={viewabilityConfig}
      />
      {data?.content_image.length > 1 && (
        <DotPanigation data={data?.content_image} scrollX={scrollX} />
      )}
      <View
        style={[
          styles.view_cmt,
          styles.row,
          { justifyContent: 'space-between' },
        ]}
      >
        <View style={styles.row}>
          <FastImage
            source={Images.ic_heart}
            resizeMode="contain"
            style={styles.heart}
          />
          <FastImage
            source={Images.ic_cmt}
            resizeMode="contain"
            style={styles.ic_cmt}
          />
          <FastImage
            source={Images.ic_send}
            resizeMode="contain"
            style={styles.heart}
          />
        </View>
        <FastImage
          source={Images.ic_save}
          resizeMode="contain"
          style={styles.heart}
        />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.like}>{numberHelper(data?.like)} lượt thích</Text>
        <View style={styles.row}>
          <Text style={styles.user_cmt}>{data?.comments[0]?.user_comment}</Text>
          <Text style={styles.content} numberOfLines={1} ellipsizeMode="tail">
            {data?.comments[0]?.content}
          </Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.all_cmt}>Xem tất cả bình luận</Text>
      </TouchableOpacity>
    </View>
  );
};
export default News;

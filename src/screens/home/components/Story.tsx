import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Screen from 'src/navigation/configs/screen';
import NavigationUtils from 'src/navigation/navigation-utils';
import { styles } from '../styles';
import { Text } from 'src/components';
import { Colors } from 'src/themes';

interface Props {
  data: any;
  index: string | number;
}
const Story = (props: Props) => {
  const { data, index } = props;

  return (
    <View key={data?.id} style={styles.view_item}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          data?.story
            ? NavigationUtils.navigate(Screen.STORY, { data })
            : undefined
        }
      >
        {data?.story ? (
          <LinearGradient
            colors={['#FBB701', '#E1306C']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.story}
          >
            <View style={styles.view_story}>
              <FastImage
                source={data?.avatar}
                resizeMode="cover"
                style={styles.avt}
              />
            </View>
          </LinearGradient>
        ) : (
          <FastImage
            source={data?.avatar}
            resizeMode="cover"
            style={styles.avtDefault}
          />
        )}
        {index == 0 && (
          <TouchableOpacity style={styles.add} activeOpacity={0.8}>
            <View style={styles.view_plus}>
              <Text style={{ color: Colors.white, fontSize: 18 }}>+</Text>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      <Text style={styles.name}>
        {data?.user_name ? data?.user_name : 'Tin của bạn'}
      </Text>
    </View>
  );
};
export default Story;

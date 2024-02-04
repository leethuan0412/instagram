import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text } from 'src/components';
import { Colors, Images } from 'src/themes';

export function Header() {
  return (
    <View style={[styles.container, styles.row]}>
      <FastImage
        source={Images.ic_instagram}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.row}>
        <View>
          <FastImage
            source={Images.ic_heart}
            resizeMode="cover"
            style={styles.heart}
          />
          <View style={styles.view_noti}>
            <View style={styles.view_number} />
          </View>
        </View>
        <View>
          <FastImage
            source={Images.ic_messenger}
            resizeMode="cover"
            style={styles.messenger}
          />
          <View style={styles.number_mess}>
            <Text style={styles.number}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  number_mess: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 10,
    height: 18,
    width: 18,
    right: -8,
    top: -6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_noti: {
    position: 'absolute',
    right: -1,
    backgroundColor: Colors.white,
    padding: 1,
  },
  view_number: {
    backgroundColor: 'red',
    height: 8,
    width: 8,
    borderRadius: 5,
  },
  number: {
    fontSize: 10,
    color: Colors.white,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  logo: {
    height: 40,
    width: 100,
  },
  heart: {
    height: 24,
    width: 24,
  },
  messenger: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
});

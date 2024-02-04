import { StyleSheet } from 'react-native';
import { Colors } from 'src/themes';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  avt: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  avtDefault: {
    height: 66,
    width: 66,
    borderRadius: 40,
    marginLeft: 10,
  },
  story: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 68,
    width: 68,
    borderRadius: 50,
    marginLeft: 10,
  },
  view_item: {
    marginTop: 8,
  },
  view_story: {
    backgroundColor: Colors.white,
    padding: 1,
    borderRadius: 40,
  },
  name: {
    textAlign: 'center',
    fontSize: 12,
  },
  add: {
    backgroundColor: Colors.white,
    padding: 2,
    position: 'absolute',
    borderRadius: 10,
    bottom: 0,
    right: 0,
  },
  view_plus: {
    backgroundColor: '#0199FB',
    height: 18,
    width: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  view_news: {
    marginTop: 15,
  },
  mini_avt: {
    height: 30,
    width: 30,
    borderRadius: 20,
  },
  user_name: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: '500',
  },
  img: {
    height: 350,
    width: '100%',
    marginTop: 10,
  },
  dot: {
    fontWeight: '500',
    fontSize: 18,
  },
  heart: {
    height: 22,
    width: 22,
  },
  view_cmt: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  ic_cmt: {
    marginHorizontal: 15,
    height: 22,
    width: 22,
  },
  like: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    color: Colors.black,
  },
  content: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    marginLeft: 10,
    width: 280,
  },
  user_cmt: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
  },
  all_cmt: {
    fontSize: 14,
    color: Colors.gray[400],
    marginLeft: 10,
  },
  view_mini_avt: {
    height: 34,
    width: 34,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotStyle: {
    height: 6,
    width: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    marginHorizontal: 3,
  },
});

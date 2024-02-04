import { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { Text } from 'src/components';
import { Images } from 'src/themes';
import { requestCameraPermission } from 'src/utils/camera';
import InputMessage from './components/InputMessage';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const previewImageRef = useRef<any>(null);
  const onSend = async () => {
    console.log(message, 'send');
    setMessage('');
  };

  const onUploadImage = async () => {
    if (!(await requestCameraPermission())) {
      return;
    }

    const result = await launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    });

    if (Array.isArray(result.assets) && result.assets.length !== 0) {
      previewImageRef.current?.open(result.assets);
      // const resFile = await serviceUploadFile(result.assets[0]);

      // if (resFile.ok) {
      //   onSendMediaMessage(resFile.data.url);
      // }
    }
    // const result = await launchImageLibrary({
    //   mediaType: 'photo',
    //   selectionLimit: 3,
    //   presentationStyle: 'pageSheet',
    // });

    // if (Array.isArray(result.assets) && result.assets.length !== 0) {
    //   previewImageRef.current?.open(result.assets);
    //   // const resFile = await serviceUploadFile(result.assets[0]);

    //   // if (resFile.ok) {
    //   //   onSendMediaMessage(resFile.data.url);
    //   // }
    // }
  };
  const onChooseEmoji = () => {};

  return (
    <SafeAreaView>
      <Text style={{ flex: 1 }}>ChatScreen</Text>
      <InputMessage
        value={message}
        onChangeText={setMessage}
        placeholder="Type here..."
        rightIcon={Images.Apple}
        onSend={onSend}
        leftIcon={
          <View style={styles.row}>
            <TouchableOpacity onPress={onUploadImage}>
              <Images.UploadImage />
            </TouchableOpacity>
            <TouchableOpacity onPress={onChooseEmoji}>
              <Images.Emoji />
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ChatScreen;

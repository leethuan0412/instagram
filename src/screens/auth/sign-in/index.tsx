import messaging from '@react-native-firebase/messaging';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Formik } from 'formik';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppInput, Button, DismissKeyboard, Text } from 'src/components';
import { useAuthState } from 'src/store/reducer/auth-reducer';
import { Images } from 'src/themes';
import * as Yup from 'yup';
import LoginSocialButton from '../components/login-social-button';
import { styles } from './styles';

GoogleSignin.configure({
  webClientId:
    '514168828573-0o5cg0m73kktm76emc1b0chs1n0u4nds.apps.googleusercontent.com',
});

const SignInScreen = () => {
  const [, { setAccessToken }] = useAuthState();
  async function getCurrentAccessToken() {
    return await messaging().getToken();
  }

  async function onLoginWithGoogle() {
    const isSupport = await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    if (!isSupport) {
      return;
    }

    const fmcToken = await getCurrentAccessToken();
    console.log(fmcToken, 'fmc');

    if (!fmcToken) {
      return;
    }

    const { idToken } = await GoogleSignin.signIn();
    setAccessToken(idToken as string);
    if (!idToken) {
      return;
    }
  }

  async function onLoginWithFacebook() {
    const permission = await LoginManager.logInWithPermissions([
      'public_profile',
    ]);

    if (permission.isCancelled) {
      return;
    }

    const fmcToken = await getCurrentAccessToken();

    if (!fmcToken) {
      return;
    }

    // const result = await Profile.getCurrentProfile();
    // console.log('login with facebook', result);

    const code = await AccessToken.getCurrentAccessToken();
    console.log(code, 'code');

    if (!code) {
      return;
    }

    // NavigationUtils.navigate(Screen.ENTER_EMAIL, {
    //   flow: Screen.LOGIN_SOCIAL,
    // });
  }
  async function handleSubmit() {
    setAccessToken('abc');
  }
  const RegisterSchema = Yup.object().shape({
    email: Yup.string(),
  });
  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <FastImage
          source={Images.ic_instagram}
          resizeMode="contain"
          style={styles.logo}
        />
        <Formik
          initialValues={{
            email: 'abc@gmail.com',
            password: '1111',
          }}
          onSubmit={handleSubmit}
          validationSchema={RegisterSchema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={{ width: '100%', marginTop: 10 }}>
              <AppInput
                value={values.email}
                placeholder="email"
                onChangeText={handleChange('email')}
                rightIcon={Images.ic_account}
                errorMessage={errors.email}
                touched={touched.email}
              />
              <AppInput
                value={values.password}
                placeholder="password"
                onChangeText={handleChange('password')}
                secureTextEntry
                errorMessage={errors.password}
                touched={touched.password}
              />
              <View style={styles.row}>
                <TouchableOpacity>
                  <Text style={styles.signup}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.signup}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <Button
                title={'Login'}
                onPress={handleSubmit}
                style={{ marginTop: 30 }}
              />
            </View>
          )}
        </Formik>
        <View style={[styles.social, { marginTop: 24 }]}>
          <Text style={styles.txt}>-</Text>
          <Text style={styles.txt}>OR</Text>
          <Text style={styles.txt}>-</Text>
        </View>
        <View style={[styles.social, { marginTop: 10 }]}>
          <LoginSocialButton
            icon={<Images.Facebook />}
            onPress={onLoginWithFacebook}
          />
          <LoginSocialButton
            icon={<Images.Google />}
            onPress={onLoginWithGoogle}
            style={{ paddingHorizontal: 9 }}
          />
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};
export default SignInScreen;

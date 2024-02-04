import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Metrics } from 'src/themes';
import Text from 'src/components/text';
import Button from 'src/components/button';
import WrapperModal, { WrapperModalRef } from 'src/components/wrapper-modal';

interface Props {}

export interface AlertErrorFormRef {
  open: (obj: AlertError) => void;
  close: () => void;
}

export enum AlertFormType {
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface AlertError {
  title: string;
  message: string;
  type: AlertFormType;
}

const DefaultMessage = {
  title: 'Title',
  message: '',
  type: AlertFormType.SUCCESS,
};

const AlertErrorForm: ForwardRefRenderFunction<AlertErrorFormRef, Props> = (
  _,
  ref,
) => {
  const alertErrorFormRef = useRef<WrapperModalRef>(null);
  const [data, setData] = useState<AlertError>(DefaultMessage);

  useImperativeHandle(
    ref,
    () => ({
      open: (obj: AlertError) => {
        setData(obj);
        alertErrorFormRef.current?.open();
      },
      close: handleClose,
    }),
    [],
  );

  function handleClose() {
    alertErrorFormRef.current?.close();
    setData(DefaultMessage);
  }

  return (
    <WrapperModal ref={alertErrorFormRef}>
      <View style={styles.container}>
        <Text fontSize="large" bold="bold" style={styles.title}>
          {data.title}
        </Text>
        <Text style={styles.desc}>{data.message}</Text>
        <Button type="clear" onPress={handleClose}>
          Close
        </Button>
      </View>
    </WrapperModal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: 32,
    borderRadius: Metrics.baseMargin,
    maxWidth: 300,
    width: '100%',
  },
  title: {
    marginBottom: Metrics.baseMargin,
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default forwardRef(AlertErrorForm);

import React, { forwardRef, ForwardedRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Colors, Metrics } from 'src/themes';
import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';
import Button from 'src/components/button';

interface Props {
  initialDate?: Date;
  onSelected: (data: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
  minimumDate?: Date;
  maximumDate?: Date;
}

export type ModalizeRefType = Modalize;

function SelectionDate(
  {
    initialDate = new Date(),
    onSelected,
    mode = 'date',
    minimumDate,
    maximumDate,
  }: Props,
  ref: ForwardedRef<Modalize>,
) {
  const [date, setDate] = useState<Date>(() => {
    return new Date();
  });

  const onChangeDateHandler = (value: Date) => {
    setDate(value);
  };

  return (
    <Portal>
      <Modalize
        ref={ref}
        adjustToContentHeight
        withHandle={false}
        overlayStyle={styles.overlayStyle}
        useNativeDriver
        FooterComponent={
          <View style={styles.footer}>
            <Button onPress={() => onSelected(date)}>선택</Button>
          </View>
        }
        HeaderComponent={<View style={styles.header} />}
      >
        <DatePicker
          date={date || initialDate}
          style={styles.datePicker}
          mode={mode}
          locale="ko"
          onDateChange={onChangeDateHandler}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      </Modalize>
    </Portal>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  headerIndicator: {
    height: 4,
    width: 60,
    borderRadius: 2,
    backgroundColor: Colors.gray[400],
    marginBottom: 12,
  },
  footer: {
    paddingBottom: 36,
    paddingHorizontal: Metrics.baseMargin,
  },
  datePicker: {
    alignSelf: 'center',
  },
  overlayStyle: { backgroundColor: 'rgba(0,0,0,0.3)' },
});

export default forwardRef(SelectionDate);

import React from 'react';
import { Text, View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function HomeScreen({ navigation }) {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('welcome')}</Text>
      <Button title={t('view_patients')} onPress={() => navigation.navigate('Patients')} />
    </View>
  );
}

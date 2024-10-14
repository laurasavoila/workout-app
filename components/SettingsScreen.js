//Asetukset
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WorkoutsContext } from '../context/WorkoutsContext';
import styles from '../styles/SettingStyles'; // Tuo tyylitiedosto
import { RadioButton } from 'react-native-paper'; // Radiobutton komponentti

const SettingsScreen = () => {
  const { unit, setUnit } = useContext(WorkoutsContext);
  const [checked, setChecked] = React.useState(unit); // Alustetaan checked tilaksi

  const handleUnitChange = (value) => {
    setChecked(value);
    setUnit(value); // Asetetaan yksikkö
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <RadioButton.Group onValueChange={handleUnitChange} value={checked}>
        <View style={styles.radioContainer}>
          <RadioButton value="km" /> 
          <Text style={styles.radioText}>Use kilometers</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="miles" />
          <Text style={styles.radioText}>Use miles</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default SettingsScreen;

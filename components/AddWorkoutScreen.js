// Harjoituksen lisäys 
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { WorkoutsContext } from '../context/WorkoutsContext';
import { Picker } from '@react-native-picker/picker'; // Picker kalenteri päivämäärän valitsemiseen
import styles from '../styles/AddWorkoutStyles'; // Tyylit
import MyButton from '../styles/Mybutton'; // Muokattu painike

// Valitse urheilulaji, etäisyys, kesto ja päivämäärä. Tallenna "add wokrout" -painikkeesta.

const AddWorkoutScreen = () => {
  const [sportType, setSportType] = useState('Running');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { addWorkout } = useContext(WorkoutsContext);

  const handleAddWorkout = () => {
    const numericDistance = parseFloat(distance);
    const numericDuration = parseFloat(duration);

    // Tarkista, että syötetyt arvot on numeerisia
    if (isNaN(numericDistance) || isNaN(numericDuration)) {
      Alert.alert('Error', 'Distance and duration must be numeric values.');
      return;
    }

    // Tarkista, että arvot on positiivisa
    if (numericDistance < 0 || numericDuration < 0) {
      Alert.alert('Error', 'Distance and duration must be positive values.');
      return;
    }

    // Lisää harjoitus
    addWorkout({ sportType, distance: numericDistance, duration: numericDuration, date });

    // Viesti, kun harjoitus lisätty onnistuneesti
    Alert.alert('Success', 'Workout has been added successfully!');

    // Nollaa tekstikentät tallennuksen jälkeen
    setSportType('Running'); // jätetään esimerkki valinnaksi
    setDistance('');
    setDuration('');
    setDate(new Date());
    setShowDatePicker(false); // sulje kalenteri
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sport Type:</Text>
      <Picker
        selectedValue={sportType}
        style={styles.picker}
        onValueChange={(itemValue) => setSportType(itemValue)}
      >
        <Picker.Item label="Running" value="Running" />
        <Picker.Item label="Cycling" value="Cycling" />
        <Picker.Item label="Swimming" value="Swimming" />
      </Picker>
      <Text style={styles.label}>Distance (km):</Text>
      <TextInput
        style={styles.input}
        value={distance}
        onChangeText={setDistance}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Duration (minutes):</Text>
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <MyButton title="Select Date" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          themeVariant="dark" // tumma teema
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            setDate(selectedDate || date);
          }}
        />
      )}
      <MyButton title="Add Workout" onPress={handleAddWorkout} />
    </View>
  );
};

export default AddWorkoutScreen;
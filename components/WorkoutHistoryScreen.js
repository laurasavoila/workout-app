//Harjoitushistoria
import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WorkoutsContext } from '../context/WorkoutsContext'; //Context
import Icon from 'react-native-vector-icons/MaterialIcons'; //Ikonit
import styles from '../styles/WorkoutHistorystyles'; // Tyylit

const WorkoutHistoryScreen = () => {
  const { workouts } = useContext(WorkoutsContext);

  // Lasketaan etäisyydet kaikista lajeista
  const totals = workouts.reduce((acc, workout) => {
    const { sportType, distance } = workout;
    if (!acc[sportType]) {
      acc[sportType] = 0; 
    }
    acc[sportType] += distance; // Lisää etäisyys
    return acc;
  }, {});

  
  const renderItem = ({ item }) => {
    let iconName;

    // Ikonit lajeille
    if (item.sportType === 'Running') {
      iconName = 'directions-run';
    } else if (item.sportType === 'Cycling') {
      iconName = 'directions-bike';
    } else if (item.sportType === 'Swimming') {
      iconName = 'pool';
    }

    return (  // näytetään jokaisen tallennuksen kaikki syötetyt tiedot omana ilmoituksena harjoitushistoriassa
      <View style={styles.itemContainer}>
        <Icon name={iconName} size={24} color="#000" />
        <View style={styles.textContainer}>
          <Text style={styles.sportType}>{item.sportType}</Text>
          <Text style={styles.details}>Distance: {item.distance} km</Text>
          <Text style={styles.details}>Duration: {item.duration} min</Text>
          <Text style={styles.details}>Date: {item.date.toLocaleDateString()}</Text>
        </View>
      </View>
    );
  };

  return ( // headerissa näkyvä otsikko ja lajien yhteenlaskettujen etäisyyksien summaus ikonien kanssa, näkymä tarvittaessa skrollattava
    <View style={styles.container}>
      <Text style={styles.header}>Workout History</Text>
      <Text style={styles.summaryText}>Total Distance by Sport</Text>
      <View style={styles.summaryContainer}>
        {/* Juoksu yhteenveto */}
        <View style={styles.summaryItem}>
          <Icon name="directions-run" size={24} color="#000" />
          <Text style={styles.summaryText}> {totals.Running ? totals.Running.toFixed(2) : 0} km</Text>
        </View>
        {/* Pyöräily yhteenveto */}
        <View style={styles.summaryItem}>
          <Icon name="directions-bike" size={24} color="#000" />
          <Text style={styles.summaryText}> {totals.Cycling ? totals.Cycling.toFixed(2) : 0} km</Text>
        </View>
        {/* Uinti yhteenveto */}
        <View style={styles.summaryItem}>
          <Icon name="pool" size={24} color="#000" />
          <Text style={styles.summaryText}> {totals.Swimming ? totals.Swimming.toFixed(2) : 0} km</Text>
        </View>
      </View>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false} 
      />
    </View>
  );
};

export default WorkoutHistoryScreen;

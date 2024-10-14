// Asetuksien tyylit
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8e6f1' //Taustaväri
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row', // Asetetaan vierekkäin
    alignItems: 'center', // Keskitetään pystysuunnassa
    marginVertical: 10, // Lisätään tilaa ylös ja alas
  },
  radioText: {
    marginLeft: 10, // Lisätään tilaa radiopainikkeen vasemmalle puolelle
    fontSize: 18, 
  },
});

export default styles;

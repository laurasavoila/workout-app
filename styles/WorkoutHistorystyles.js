// Harjoitushistorian tyylit
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8e6f1' }, //taustaväri
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  summaryContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginBottom: 20, 
    backgroundColor: '#ffffff', // yhteenvetojen taustaväri
    padding: 10,
    borderRadius: 20
  },
  summaryItem: { 
    alignItems: 'center', 
  },
  summaryText: { 
    marginTop: 5,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold'
  },
  itemContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
    backgroundColor: 'white', //Tallennettujen harjoitustietojen  taustaväri
    padding: 10,
    borderRadius: 20,
    marginBottom: 10
  },
  textContainer: { 
    marginLeft: 10 
  },
  sportType: { 
    fontWeight: 'bold' 
  },
  details: { 
    marginLeft: 10, 
    padding: 5
  },
});

export default styles;

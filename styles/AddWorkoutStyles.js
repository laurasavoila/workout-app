// Lisää harjoitus -tyylit
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8e6f1', // taustaväri
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff' //tekstikenttien taustaväri
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#ffffff' 
  },
});

export default styles;

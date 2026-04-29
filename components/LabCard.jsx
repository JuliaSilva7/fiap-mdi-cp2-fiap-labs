import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function LabCard({ lab, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.nome}>{lab.nome}</Text>
      <Text>{lab.descricao}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:'#fff',
    padding:16,
    margin:10,
    borderRadius:10,
    elevation:3
  },
  nome: {
    fontSize:18,
    fontWeight:'bold'
  }
});
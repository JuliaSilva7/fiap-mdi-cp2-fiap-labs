import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getReservas } from '../../services/storage';
import { colors } from '../../styles/theme';

export default function Reservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  const carregar = async () => {
    const dados = await getReservas();
    setReservas(dados);
  };

  if (reservas.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.empty}>
          Nenhuma reserva ainda
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={reservas}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.nome}>{item.nome}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20
  },

  empty: {
    color: colors.subtext,
    textAlign: 'center',
    marginTop: 50
  },

  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 10,
    marginBottom: 10
  },

  nome: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
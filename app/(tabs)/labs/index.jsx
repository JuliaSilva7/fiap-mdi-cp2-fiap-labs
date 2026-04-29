import { FlatList, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { labs } from '../../../data/labs';
import LabCard from '../../../components/LabCard';
import { colors } from '../../../styles/theme';

export default function Labs() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={labs}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              Nenhum laboratório disponível
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <LabCard
            lab={item}
            onPress={() => router.push(`/labs/${item.id}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 10
  },

  empty: {
    alignItems: 'center',
    marginTop: 50
  },

  emptyText: {
    color: colors.subtext
  }
});
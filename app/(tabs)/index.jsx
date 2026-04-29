import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { logout } from '../../services/auth';
import { colors } from '../../styles/theme';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  const router = useRouter();

  const sair = async () => {
    await logout();
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>FIAP Labs</Text>

      <Text style={styles.subtitle}>
        Gerencie e reserve laboratórios de forma rápida e simples
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Bem-vindo ao sistema de reservas
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/labs')}
      >
        <Text style={styles.buttonText}>Ver Labs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout} onPress={sair}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10
  },

  subtitle: {
    color: colors.subtext,
    textAlign: 'center',
    marginBottom: 30
  },

  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    width: '100%',
    elevation: 4
  },

  cardText: {
    color: colors.text,
    textAlign: 'center'
  },

  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

  logout: {
    marginTop: 10
  },

  logoutText: {
    color: colors.subtext
  }
});
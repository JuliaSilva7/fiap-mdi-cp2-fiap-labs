import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { login } from '../services/auth';
import { colors } from '../styles/theme';
import { StatusBar } from 'expo-status-bar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const entrar = async () => {
    if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    setLoading(true);

    const ok = await login(email, senha);

    setLoading(false);

    if (ok) {
      router.replace('/');
    } else {
      alert('Email ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.card}>
        <Text style={styles.title}>FIAP Labs</Text>
        <Text style={styles.subtitle}>
          Faça login para continuar
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#777"
          style={styles.input}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#777"
          secureTextEntry
          style={styles.input}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={entrar} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/cadastro')}>
          <Text style={styles.link}>
            Não tem conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: 20
  },

  card: {
    backgroundColor: colors.card,
    padding: 25,
    borderRadius: 15,
    elevation: 5
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 10
  },

  subtitle: {
    color: colors.subtext,
    textAlign: 'center',
    marginBottom: 25
  },

  input: {
    backgroundColor: '#1A1A1A',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 15
  },

  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

  link: {
    color: colors.primary,
    textAlign: 'center',
    marginTop: 20
  }
});
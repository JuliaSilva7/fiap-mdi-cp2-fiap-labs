import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'user';
const LOGIN_KEY = 'logado';

// Cadastrar usuário
export const cadastrar = async (user) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.log('Erro ao cadastrar:', error);
  }
};

// Fazer login
export const login = async (email, senha) => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    const user = JSON.parse(data);

    if (user && user.email === email && user.senha === senha) {
      await AsyncStorage.setItem(LOGIN_KEY, 'true');
      return true;
    }

    return false;
  } catch (error) {
    console.log('Erro no login:', error);
    return false;
  }
};

// Verificar se está logado
export const isLogado = async () => {
  try {
    const status = await AsyncStorage.getItem(LOGIN_KEY);
    return status === 'true';
  } catch (error) {
    console.log('Erro ao verificar login:', error);
    return false;
  }
};

// Logout
export const logout = async () => {
  try {
    await AsyncStorage.removeItem(LOGIN_KEY);
  } catch (error) {
    console.log('Erro ao fazer logout:', error);
  }
};

// (Extra) pegar usuário logado
export const getUser = async () => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log('Erro ao pegar usuário:', error);
    return null;
  }
};
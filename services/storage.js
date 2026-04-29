import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'reservas';

// Salvar uma nova reserva
export const salvarReserva = async (lab) => {
  try {
    const dados = await AsyncStorage.getItem(KEY);
    const lista = dados ? JSON.parse(dados) : [];

    lista.push(lab);

    await AsyncStorage.setItem(KEY, JSON.stringify(lista));
  } catch (error) {
    console.log('Erro ao salvar reserva:', error);
  }
};

// Buscar todas as reservas
export const getReservas = async () => {
  try {
    const dados = await AsyncStorage.getItem(KEY);
    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.log('Erro ao buscar reservas:', error);
    return [];
  }
};

// Limpar todas as reservas (extra - opcional)
export const limparReservas = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) {
    console.log('Erro ao limpar reservas:', error);
  }
};
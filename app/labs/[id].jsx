import { View, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { labs } from '../../data/labs';
import { salvarReserva } from '../../services/storage';

export default function Detalhe() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const lab = labs.find(l => l.id == id);

  if (!lab) {
    return (
      <View>
        <Text>Lab não encontrado</Text>
      </View>
    );
  }

  const reservar = async () => {
    await salvarReserva(lab);
    router.push('/reservas');
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:22 }}>{lab.nome}</Text>
      <Text>{lab.descricao}</Text>

      <TouchableOpacity onPress={reservar} style={{ marginTop:20 }}>
        <Text style={{ color:'#E83D84' }}>Reservar</Text>
      </TouchableOpacity>
    </View>
  );
}
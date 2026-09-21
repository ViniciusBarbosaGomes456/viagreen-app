import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { notificacoesMock } from '../data/mockData';

export default function NotificationScreen({ navigation, route }) {
  const [destacadoId, setDestacadoId] = useState(null);

  useEffect(() => {
    if (route.params?.highlightId) {
      setDestacadoId(route.params.highlightId);
      const timeout = setTimeout(() => setDestacadoId(null), 3000); // some depois de 3s
      return () => clearTimeout(timeout);
    }
  }, [route.params?.highlightId]);
  return (
    <SafeAreaView style={styles.container}>
      {/* Aba superior */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Notificação</Text>
      </View>

      {/* Espaço central com as mensagens */}
      <FlatList
        data={notificacoesMock}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              item.tipo === 'critico' && styles.cardCritico,
              item.id === destacadoId && styles.cardDestacado
            ]}
          >
            <Text style={styles.cardAutor}>{item.autor}</Text>
            <Text style={styles.cardMensagem}>{item.mensagem}</Text>
            <Text style={styles.cardHora}>{item.hora}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhuma notificação por enquanto</Text>
        }
      />

      {/* Botão flutuante de configurações, acima da barra de abas */}
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={{ fontSize: 20 }}>⚙️</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E22F3',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerText: { fontSize: 17, fontWeight: '700', color: '#FFFFFF' },
  list: { padding: 16, flexGrow: 1 },
  card: {
    backgroundColor: '#F7F6FE',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
  cardCritico: { backgroundColor: '#FCEBEB' },
  cardDestacado: { borderWidth: 2, borderColor: '#5E22F3' },
  cardAutor: { fontSize: 13, fontWeight: '700', color: '#333', marginBottom: 4 },
  cardMensagem: { fontSize: 13, color: '#444' },
  cardHora: { fontSize: 11, color: '#999', marginTop: 6, textAlign: 'right' },
  vazio: { textAlign: 'center', color: '#999', marginTop: 40 },
  settingsButton: {
    position: 'absolute',
    right: 20,
    bottom: 20, // ajuste isso conforme a altura da sua barra de abas
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
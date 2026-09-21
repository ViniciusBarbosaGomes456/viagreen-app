import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { usuarioMock } from '../data/mockData';

const OPCOES_NOTIFICACAO = [
  { chave: 'desabilitado', label: 'Desabilitado' },
  { chave: 'padrao', label: 'Padrão' },
  { chave: 'critico', label: 'Apenas críticos' },
];

export default function SettingsScreen({ navigation }) {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [modoNotificacao, setModoNotificacao] = useState('padrao');
  const [volume, setVolume] = useState(0.7);

  function sair() {
    // reset() apaga o histórico de navegação — sem isso, o botão "voltar"
    // do celular deixaria o usuário retornar pro app mesmo deslogado
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Configurações</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Dados da conta */}
        <Text style={styles.secaoTitulo}>Dados da conta</Text>
        <View style={styles.card}>
          <Text style={styles.campoLabel}>Nome</Text>
          <Text style={styles.campoValor}>{usuarioMock.nome}</Text>

          <Text style={[styles.campoLabel, { marginTop: 12 }]}>Email</Text>
          <Text style={styles.campoValor}>{usuarioMock.email}</Text>

          <Text style={[styles.campoLabel, { marginTop: 12 }]}>Cargo</Text>
          <Text style={styles.campoValor}>{usuarioMock.cargo}</Text>
        </View>

        {/* Trocar senha */}
        <Text style={styles.secaoTitulo}>Alterar senha</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Senha atual"
            placeholderTextColor="#8A8798"
            secureTextEntry
            value={senhaAtual}
            onChangeText={setSenhaAtual}
          />
          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            placeholderTextColor="#8A8798"
            secureTextEntry
            value={novaSenha}
            onChangeText={setNovaSenha}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar nova senha"
            placeholderTextColor="#8A8798"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
          <TouchableOpacity style={styles.botaoSecundario}>
            <Text style={styles.botaoSecundarioTexto}>Atualizar senha</Text>
          </TouchableOpacity>
        </View>

        {/* Notificações */}
        <Text style={styles.secaoTitulo}>Notificações</Text>
        <View style={styles.card}>
          <View style={styles.segmentado}>
            {OPCOES_NOTIFICACAO.map((opcao) => {
              const ativo = modoNotificacao === opcao.chave;
              return (
                <TouchableOpacity
                  key={opcao.chave}
                  style={[styles.segmentoBotao, ativo && styles.segmentoBotaoAtivo]}
                  onPress={() => setModoNotificacao(opcao.chave)}
                >
                  <Text style={[styles.segmentoTexto, ativo && styles.segmentoTextoAtivo]}>
                    {opcao.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={[styles.campoLabel, { marginTop: 18, marginBottom: 4 }]}>
            Volume do alerta ({Math.round(volume * 100)}%)
          </Text>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onValueChange={setVolume}
            minimumTrackTintColor="#6C5CA8"
            maximumTrackTintColor="#D8D5E3"
            thumbTintColor="#6C5CA8"
          />
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.botaoSair} onPress={sair}>
          <Text style={styles.botaoSairTexto}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F0F4' },
  header: { height: 52, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2B2A33' },
  headerText: { fontSize: 17, fontWeight: '700', color: '#E8E7ED' },
  content: { padding: 16, paddingBottom: 32 },

  secaoTitulo: {
    fontSize: 12, fontWeight: '700', color: '#8A8798',
    textTransform: 'uppercase', letterSpacing: 0.5,
    marginTop: 18, marginBottom: 8, marginLeft: 4,
  },
  card: {
    backgroundColor: '#FFFFFF', borderRadius: 14, padding: 16,
    borderWidth: 1, borderColor: '#E4E2EA',
  },
  campoLabel: { fontSize: 11, color: '#8A8798' },
  campoValor: { fontSize: 14, color: '#3A3944', fontWeight: '600', marginTop: 2 },

  input: {
    borderWidth: 1, borderColor: '#D8D5E3', borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 10, marginBottom: 10,
    fontSize: 13, color: '#3A3944', backgroundColor: '#FAFAFC',
  },
  botaoSecundario: {
    borderWidth: 1, borderColor: '#6C5CA8', borderRadius: 10,
    paddingVertical: 10, alignItems: 'center', marginTop: 4,
  },
  botaoSecundarioTexto: { color: '#6C5CA8', fontSize: 13, fontWeight: '700' },

  segmentado: { flexDirection: 'row', backgroundColor: '#F1F0F4', borderRadius: 10, padding: 3 },
  segmentoBotao: { flex: 1, paddingVertical: 8, borderRadius: 8, alignItems: 'center' },
  segmentoBotaoAtivo: { backgroundColor: '#6C5CA8' },
  segmentoTexto: { fontSize: 11, color: '#8A8798', fontWeight: '600' },
  segmentoTextoAtivo: { color: '#FFFFFF' },

  botaoSair: {
    marginTop: 24, borderRadius: 12, paddingVertical: 14,
    alignItems: 'center', backgroundColor: '#3A3944',
  },
  botaoSairTexto: { color: '#E8E7ED', fontSize: 14, fontWeight: '700' },
});
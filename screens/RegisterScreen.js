import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.circle, styles.circlePurpleTop]} />
      <View style={[styles.circle, styles.circleGreenBottom]} />

      <View style={styles.content}>
        <Text style={styles.header}>Criar conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#5E22F3"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuário/Email"
          placeholderTextColor="#5E22F3"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#5E22F3"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Registrar</Text>
        </TouchableOpacity>

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Já possui uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  circle: { position: 'absolute', borderRadius: 999 },
  circlePurpleTop: { width: 160, height: 160, backgroundColor: '#EEEDFE', top: -40, left: -50 },
  circleGreenBottom: { width: 180, height: 180, backgroundColor: '#E1F5EE', bottom: -60, right: -50 },
  content: { flex: 1, justifyContent: 'center', paddingHorizontal: 28 },
  header: { fontSize: 24, fontWeight: '700', color: '#5E22F3', textAlign: 'center', marginBottom: 28 },
  input: {
    borderWidth: 1, borderColor: '#AFA9EC', borderRadius: 25,
    paddingHorizontal: 18, paddingVertical: 12, marginBottom: 14,
    fontSize: 14, color: '#333',
  },
  registerButton: {
    backgroundColor: '#2ED47A', borderRadius: 25, paddingVertical: 14,
    alignItems: 'center', marginTop: 6, marginBottom: 20,
  },
  registerButtonText: { color: '#04342C', fontSize: 16, fontWeight: '700' },
  loginRow: { flexDirection: 'row', justifyContent: 'center' },
  loginText: { fontSize: 13, color: '#666' },
  loginLink: { fontSize: 13, color: '#5E22F3', fontWeight: '600' },
});
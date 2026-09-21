import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.circle, styles.circlePurpleTop]} />
      <View style={[styles.circle, styles.circleGreenTop]} />
      <View style={[styles.circle, styles.circleGreenBottom]} />
      <View style={[styles.circle, styles.circlePurpleBottom]} />

      <View style={styles.content}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.titleRow}>
          <Text style={[styles.title, { color: '#5E22F3' }]}>Via</Text>
          <Text style={[styles.title, { color: '#2ED47A' }]}>Green</Text>
        </View>

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

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        {/* Aqui está a navegação: ao clicar, vai para a tela Home */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerRow}>
          <Text style={styles.registerText}>Não possui uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>Registre-se</Text>
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
  circleGreenTop: { width: 120, height: 120, backgroundColor: '#E1F5EE', top: 60, right: -30 },
  circleGreenBottom: { width: 140, height: 140, backgroundColor: '#E1F5EE', bottom: 120, left: -40 },
  circlePurpleBottom: { width: 180, height: 180, backgroundColor: '#EEEDFE', bottom: -60, right: -50 },
  content: { flex: 1, justifyContent: 'center', paddingHorizontal: 28 },
  logo: { width: 140, height: 140, alignSelf: 'center', marginBottom: 12 },
  titleRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 28 },
  title: { fontSize: 32, fontWeight: '700' },
  input: {
    borderWidth: 1, borderColor: '#AFA9EC', borderRadius: 25,
    paddingHorizontal: 18, paddingVertical: 12, marginBottom: 14,
    fontSize: 14, color: '#333',
  },
  forgotPassword: { textAlign: 'right', color: '#5E22F3', fontSize: 12, marginBottom: 24 },
  loginButton: {
    backgroundColor: '#2ED47A', borderRadius: 25, paddingVertical: 14,
    alignItems: 'center', marginBottom: 20,
  },
  loginButtonText: { color: '#04342C', fontSize: 16, fontWeight: '700' },
  registerRow: { flexDirection: 'row', justifyContent: 'center' },
  registerText: { fontSize: 13, color: '#666' },
  registerLink: { fontSize: 13, color: '#5E22F3', fontWeight: '600' },
});
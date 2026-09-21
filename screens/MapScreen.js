import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { pontosMapa } from '../data/mockData';

const corPorStatus = {
  ok: '#2ED47A',
  'atenção': '#E8A83C',
  'crítico': '#E14B4B',
};

// Monta o HTML do mapa dinamicamente a partir do mock — sem chave de API
function montarHtmlMapa(pontos) {
  const marcadores = pontos
    .map(
      (p) => `
    L.circleMarker([${p.latitude}, ${p.longitude}], {
      radius: 9, color: '#fff', weight: 2,
      fillColor: '${corPorStatus[p.status]}', fillOpacity: 1
    }).addTo(map).bindPopup(
      '<b>${p.titulo}</b><br/>Status: ${p.status}' +
      ${p.notificacaoId
        ? `'<br/><a href="#" onclick="enviarMensagem(\\'${p.notificacaoId}\\')">Ver notificação →</a>'`
        : `''`}
    );`
    )
    .join('\n');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <style>html, body, #map { height: 100%; margin: 0; padding: 0; }</style>
    </head>
    <body>
      <div id="map"></div>
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <script>
        const map = L.map('map').setView([${pontos[0].latitude}, ${pontos[0].longitude}], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        ${marcadores}

        function enviarMensagem(notificacaoId) {
          window.ReactNativeWebView.postMessage(notificacaoId);
        }
      </script>
    </body>
    </html>
  `;
}

export default function MapScreen({ navigation }) {
  const html = montarHtmlMapa(pontosMapa);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mapa</Text>
      </View>

      <WebView
        originWhitelist={['*']}
        source={{ html }}
        style={styles.map}
        onMessage={(event) => {
          const notificacaoId = event.nativeEvent.data;
          navigation.navigate('Notificação', { highlightId: notificacaoId });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { height: 52, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5E22F3' },
  headerText: { fontSize: 17, fontWeight: '700', color: '#FFFFFF' },
  map: { flex: 1 },
});
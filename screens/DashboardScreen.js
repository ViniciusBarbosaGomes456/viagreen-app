import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import { crescimentoSetores, alertasAgenda } from '../data/mockData';

const marcacoesIniciais = () => {
  const marcados = {};
  alertasAgenda.forEach((item) => {
    const dataFormatada = `${item.mes}-${String(item.dia).padStart(2, '0')}`;
    marcados[dataFormatada] = { selected: true, selectedColor: '#5E22F3' };
  });
  return marcados;
};

function BarraProgresso({ setor, percentual }) {
  return (
    <View style={styles.barraContainer}>
      <View style={styles.barraHeader}>
        <Text style={styles.barraLabel}>Crescimento ({setor})</Text>
        <Text style={styles.barraPercentual}>{percentual}%</Text>
      </View>
      <View style={styles.barraFundo}>
        <View style={[styles.barraPreenchida, { width: `${percentual}%` }]} />
      </View>
    </View>
  );
}

export default function DashboardScreen() {
  const [marcados, setMarcados] = useState(marcacoesIniciais());

  // 2. Estado dos setores — começa igual ao mock, mas vai mudar sozinho com o tempo
  const [setores, setSetores] = useState(crescimentoSetores);

  function alternarDia(dia) {
    const dataClicada = dia.dateString; // já vem no formato "2026-05-14"

    setMarcados((atual) => {
      const copia = { ...atual };

      if (copia[dataClicada]) {
        // já estava marcado -> remove
        delete copia[dataClicada];
      } else {
        // não estava marcado -> adiciona
        copia[dataClicada] = { selected: true, selectedColor: '#5E22F3' };
      }

      return copia;
    });
  }

  // 3. Roda a cada X segundos, simulando o crescimento "ao vivo" da vegetação
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSetores((atual) =>
        atual.map((item) => {
          const incremento = Math.floor(Math.random() * 3) + 1; // sobe de 1 a 3 por vez
          const novoValor = Math.min(item.percentual + incremento, 100); // nunca passa de 100
          return { ...item, percentual: novoValor };
        })
      );
    }, 4000); // a cada 4 segundos — ajuste esse número como quiser

    // limpa o intervalo quando a tela é desmontada, pra não vazar memória
    return () => clearInterval(intervalo);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {setores.map((item) => (
          <BarraProgresso key={item.id} setor={item.setor} percentual={item.percentual} />
        ))}

        <View style={styles.alertaBox}>
          {alertasAgenda.map((item) => (
            <Text key={item.id} style={styles.alertaItem}>
              •  [{item.dia}] {item.tipo} ({item.setor})
            </Text>
          ))}
        </View>

        <Calendar
          current={'2026-05-01'}
          markedDates={marcados}
          onDayPress={alternarDia}
          theme={{
            calendarBackground: '#FFFFFF',
            monthTextColor: '#FFFFFF',
            textMonthFontWeight: '700',
            textMonthFontSize: 18,
            arrowColor: '#FFFFFF',
            todayTextColor: '#5E22F3',
            selectedDayBackgroundColor: '#5E22F3',
            textDayFontWeight: '600',
          }}
          style={styles.calendario}
          renderHeader={() => (
            <View style={styles.calendarioHeader}>
              <Text style={styles.calendarioHeaderText}>Maio</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { height: 52, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5E22F3' },
  headerText: { fontSize: 17, fontWeight: '700', color: '#FFFFFF' },
  content: { padding: 16 },
  barraContainer: { marginBottom: 16 },
  barraHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  barraLabel: { fontSize: 13, fontWeight: '700', color: '#333' },
  barraPercentual: { fontSize: 13, fontWeight: '700', color: '#2ED47A' },
  barraFundo: { height: 10, borderRadius: 5, backgroundColor: '#E1F5EE' },
  barraPreenchida: { height: 10, borderRadius: 5, backgroundColor: '#2ED47A' },
  alertaBox: { backgroundColor: '#F3F0FE', borderRadius: 12, padding: 14, marginBottom: 20 },
  alertaItem: { fontSize: 13, color: '#333', marginBottom: 4 },
  calendario: { borderRadius: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#EEE' },
  calendarioHeader: { backgroundColor: '#5E22F3', paddingVertical: 10, alignItems: 'center' },
  calendarioHeaderText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
});
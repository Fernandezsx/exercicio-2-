import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* PASSO 2: ScrollView Principal */}
      <ScrollView showsVerticalScrollIndicator={true}>
        
        {/* PASSO 3: Cabeçalho e Parágrafo Longo */}
        <View style={styles.paddingContainer}>
          <Text style={styles.headerTitle}>Sobre o App</Text>
          <Text style={styles.longText}>
            sei la o que por aqui
          </Text>
        </View>

        {/* PASSO 4: Cards Informativos */}
        <View style={styles.cardsContainer}>
          <View style={styles.card}><Text style={styles.cardText}>Versão: 1.0.2</Text></View>
          <View style={styles.card}><Text style={styles.cardText}>Plataforma: iOS/Android</Text></View>
          <View style={styles.card}><Text style={styles.cardText}>Status: Online</Text></View>
        </View>

        {/* PASSO 5: Categorias e ScrollView Horizontal */}
        <View style={styles.paddingContainer}>
          <Text style={styles.sectionTitle}>Categorias</Text>
        </View>

        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
          contentContainerStyle={styles.horizontalPadding}
        >
          <View style={styles.chip}><Text>React Native</Text></View>
          <View style={styles.chip}><Text>JavaScript</Text></View>
          <View style={styles.chip}><Text>Mobile</Text></View>
          <View style={styles.chip}><Text>Design</Text></View>
          <View style={styles.chip}><Text>Performance</Text></View>
        </ScrollView>

        {/* Espaçamento extra no final para não grudar na borda */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // PASSO 1
    backgroundColor: '#F5F5F5',
  },
  paddingContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  longText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  cardsContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF',
    elevation: 2, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  cardText: {
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  horizontalScroll: {
    marginVertical: 10,
  },
  horizontalPadding: {
    paddingHorizontal: 20,
  },
  chip: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#CCC',
  }
});
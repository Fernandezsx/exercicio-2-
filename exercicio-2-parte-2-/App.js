import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

export default function App() {
  // PASSO 1: Estado começando vazio
  const [contatos, setContatos] = useState([]);

  // Função para simular o carregamento de dados (PASSO 5)
  const carregarContatos = () => {
    const dadosFicticios = [
      { id: '1', nome: 'Ana Silva', email: 'ana@email.com' },
      { id: '2', nome: 'Bruno Costa', email: 'bruno@email.com' },
      { id: '3', nome: 'Carla Souza', email: 'carla@email.com' },
      { id: '4', nome: 'Diego Lima', email: 'diego@email.com' },
    ];
    setContatos(dadosFicticios);
  };

  // PASSO 4: Componente de Cabeçalho
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Minha Agenda</Text>
    </View>
  );

  // PASSO 3: Componente de Estado Vazio
  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>🔍</Text>
      <Text style={styles.emptyText}>Sem contatos.</Text>
      <Text style={styles.emptySubtext}>Sua lista está vazia no momento.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* PASSO 2: Configuração da FlatList */}
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.nome}</Text>
            <Text style={styles.itemEmail}>{item.email}</Text>
          </View>
        )}
        // PASSO 4
        ListHeaderComponent={renderHeader}
        // PASSO 3
        ListEmptyComponent={renderEmpty}
        // PASSO 6: Linha fina cinza
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={contatos.length === 0 && { flex: 1 }}
      />

      {/* PASSO 5: Botão de Carregar fora da lista */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={carregarContatos}
        >
          <Text style={styles.buttonText}>Carregar Contatos</Text>
        </TouchableOpacity>
        
        {/* Botão extra para resetar e ver o estado vazio de novo */}
        <TouchableOpacity 
          onPress={() => setContatos([])}
          style={styles.resetButton}
        >
          <Text style={styles.resetText}>Limpar Lista</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  item: {
    padding: 20,
    backgroundColor: '#FFF',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100, // Compensa o espaço para centralizar melhor visualmente
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#888',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  resetText: {
    color: '#FF3B30',
  }
});
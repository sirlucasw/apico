// Importação dos módulos necessários do React Native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { decode } from 'html-entities';

export default function App() {

  // Estados do componente
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const [resultado, setResultado] = useState<string | null>(null);
  const [pergunta, setPergunta] = useState<string>('');
  const [respostaCorreta, setRespostaCorreta] = useState<string>('');
  const [alternativas, setAlternativas] = useState<string[]>([]);

  // 👇 PASSO 1: Função que busca uma nova pergunta da API
  const buscarPergunta = () => {
    setSelecionado(null);
    setResultado(null);
    fetch('https://tryvia.ptr.red/api.php?amount=1')
      .then(resposta => resposta.json())
      .then(dados => {
        const item = dados.results[0];
        setPergunta(decode(item.question));
        setRespostaCorreta(decode(item.correct_answer));
        const todas = [
          decode(item.correct_answer),
          ...item.incorrect_answers.map((a: string) => decode(a))
        ];
        const embaralhadas = todas.sort(() => Math.random() - 0.5);
        setAlternativas(embaralhadas);
      });
  };

  // 👇 PASSO 2: useEffect chama buscarPergunta ao carregar o app
  useEffect(() => {
    buscarPergunta();
  }, []);

  // Verifica se a alternativa selecionada é a correta
  const verificar = (alternativa: string) => {
    setSelecionado(alternativa);
    if (alternativa === respostaCorreta) {
      setResultado('Correto! ✅');
    } else {
      setResultado('Errado! ❌');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Quiz de Trivialidades</Text>
      <Text style={styles.pergunta}>{pergunta}</Text>

      {alternativas.map((alternativa) => (
        <TouchableOpacity
          key={alternativa}
          style={[styles.botao, selecionado === alternativa && styles.botaoSelecionado]}
          onPress={() => verificar(alternativa)}>
          <Text style={styles.botaoTexto}>{alternativa}</Text>
        </TouchableOpacity>
      ))}

      {resultado && <Text style={styles.resultado}>{resultado}</Text>}

      {/* 👇 PASSO 3: Botão que chama buscarPergunta */}
      <TouchableOpacity
        style={styles.botaoProximo}
        onPress={buscarPergunta}>
        <Text style={styles.botaoTexto}>Próxima pergunta ➡️</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

// Estilos para os componentes do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    marginBottom: 10,
  },
  pergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff8800',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: '#ff8800',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
    width: '60%',
    alignItems: 'center',
  },
  botaoSelecionado: {
    backgroundColor: '#005500',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  botaoProximo: {
    backgroundColor: '#0055ff',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    width: '60%',
    alignItems: 'center',
  },
});
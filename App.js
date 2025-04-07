import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Biblioteca Online</Text>

        <CardCategoria
          nomeCategoria="Ficção"
          imagemCategoria="https://upload.wikimedia.org/wikipedia/commons/4/4e/Book.svg"
        />

        <Text style={styles.subtitulo}>Livros de Ficção:</Text>
        <CardLivro
          nomeLivro="O Grande Gatsby"
          autor="F. Scott Fitzgerald"
          descricao="Romance clássico sobre o sonho americano."
          imagem="https://upload.wikimedia.org/wikipedia/commons/d/df/The_Great_Gatsby_1925_jacket.jpg"
        />
        <CardLivro
          nomeLivro="1984"
          autor="George Orwell"
          descricao="Distopia sobre vigilância e controle social."
          imagem="https://upload.wikimedia.org/wikipedia/commons/6/69/1984_1st_ed.jpg"
        />
        <CardLivro
          nomeLivro="Dom Quixote"
          autor="Miguel de Cervantes"
          descricao="Aventura de um cavaleiro que luta contra moinhos de vento."
          imagem="https://upload.wikimedia.org/wikipedia/commons/9/92/Don_Quixote_%28First_edition%29.jpg"
        />

        <CardCategoria
          nomeCategoria="Não-Ficção"
          imagemCategoria="https://upload.wikimedia.org/wikipedia/commons/9/92/Books_icon.svg"
        />

        <Text style={styles.subtitulo}>Livros de Não-Ficção:</Text>
        <CardLivro
          nomeLivro="Sapiens"
          autor="Yuval Noah Harari"
          descricao="Uma breve história da humanidade."
          imagem="https://upload.wikimedia.org/wikipedia/commons/2/2f/Sapiens_-_Yuval_Noh_Harari.jpg"
        />
        <CardLivro
          nomeLivro="Educated"
          autor="Tara Westover"
          descricao="Memórias de uma jovem que foge de uma educação rígida."
          imagem="https://upload.wikimedia.org/wikipedia/commons/a/a2/Educated_-_Tara_Westover.jpg"
        />

        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Library_Icon.svg" }}
          style={styles.imagemExtra}
        />
      </ScrollView>
    );
  }
}

class CardCategoria extends Component {
  render() {
    return (
      <View style={styles.cardCategoria}>
        <Image
          source={{ uri: this.props.imagemCategoria }}
          style={styles.imagemCategoria}
        />
        <Text style={styles.nomeCategoria}>{this.props.nomeCategoria}</Text>
      </View>
    );
  }
}

class CardLivro extends Component {
  render() {
    return (
      <View style={styles.cardLivro}>
        <View style={styles.livroInfo}>
          <Image source={{ uri: this.props.imagem }} style={styles.imagemLivro} />
          <View style={styles.infoLivro}>
            <Text style={styles.nomeLivro}>{this.props.nomeLivro}</Text>
            <Text style={styles.autor}>{this.props.autor}</Text>
            <Text style={styles.descricao}>{this.props.descricao}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#800080", // Cor de fundo roxa
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  titulo: {
    fontFamily: 'Inter_700Bold',
    color: '#fff', // Cor branca para o título
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontFamily: 'Inter_700Bold',
    color: '#fff', // Cor branca para os subtítulos
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  cardCategoria: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: 'hidden',
  },
  imagemCategoria: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  nomeCategoria: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: '#800080', // Cor roxa para o nome da categoria
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  cardLivro: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: 'hidden',
  },
  livroInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  imagemLivro: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  infoLivro: {
    flex: 1,
  },
  nomeLivro: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: '#800080', // Cor roxa para o nome do livro
    fontWeight: 'bold',
  },
  autor: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    color: '#fff', // Cor branca para o autor
    paddingBottom: 5,
  },
  descricao: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#fff', // Cor branca para a descrição
  },
  imagemExtra: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default App;

import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'"Interestelar" narra as aventuras de um grupo de exploradores que faz uso de um buraco negro recém-descoberto para superar as limitações de uma viagem espacial humana e conquistar as grandes distâncias relacionadas a uma viagem interestelar.'}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Footer />
    </div>
  );
}

export default App;

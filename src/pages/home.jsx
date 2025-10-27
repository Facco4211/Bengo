import Header from "../components/Header";
import Lancamento from "../components/Lancamentos"
import Carrossel3 from "../components/Carrossel3"
import Carrossel from "../components/Carrossel";

function Home() {
  return (
    <>
    <Header/>
    {/* <Carrossel /> */}
    <Carrossel3 />
    <Lancamento/>
    </>
  );
}

export default Home;

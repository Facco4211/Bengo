import { Link } from 'react-router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/paginadojogo.css";

function Paginadojogo() {
    return (
        <>
            <Header />
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/4_42UdWgEmY?si=cLWCnnUvqgUs0ioI" title="Okami" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className='informacoes'>
                <div className='descricao'><h1>Okami</h1></div>
                <div className='comprar'><h1>R$89,90</h1></div>
            </div>
            <Footer />
        </>
    )
}
export default Paginadojogo;

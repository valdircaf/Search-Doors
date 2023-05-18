import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import { motion } from 'framer-motion';
import { NewContext } from '../contexts/repositoryContext';
import '../styles/components/searchresults.scss';
import Footer from '../components/Footer';

export default function SearchResults() {
  const { reqResponse, counter } = useContext(NewContext);
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  const dragToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [carousel.current?.scrollWidth]);

  return (

    <section className={counter >= 2 ? 'search-results' : 'hide'}>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          className="inner"
          drag="x"
          whileTap={{ cursor: 'grabbing' }}
          dragConstraints={{ right: 0, left: -width }}
        >
          {reqResponse.length > 1 ? reqResponse.map((items) => (
            <motion.div className="response" key={items.id}>
              <div>
                <img src={items.img} alt="Imagem do produto" />
                <h2>{items.name}</h2>
                <p>{items.description}</p>
                <h1>{`R$${items.price.replace('.', ',')}`}</h1>
              </div>
            </motion.div>
          )) : <h3>Hmm, parece vazio por aqui :/</h3>}

        </motion.div>
      </motion.div>
      <section className="btn-back">
        <button type="button" onClick={dragToTop}>Voltar</button>
      </section>
      <footer className="footer">
        <Footer />
      </footer>

    </section>
  );
}

import React, {
  useContext, useRef, useEffect, useState,
} from 'react';
import '../styles/components/searchresults.scss';
import { motion } from 'framer-motion';
import { NewContext } from '../contexts/repositoryContext';

export default function SearchResults() {
  const { requisition, closePage, setClosePage } = useContext(NewContext);
  const ref = useRef();
  const [width, setWidth] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    setWidth(ref.current?.scrollWidth - ref.current?.offsetWidth);
  }, [ref.current?.offsetWidth]);

  return (
    <section className={closePage ? 'container-SearchResults' : 'hide'}>
      <motion.div className="container-products">
        <motion.div className="container-grid" ref={ref} drag="x" dragConstraints={{ left: -width, right: 0 }}>
          {requisition.map((items) => (
            <motion.div className="products-container" whileTap={{ cursor: 'grabbing' }}>
              <div className="img">
                <img src={items.img} alt="Products" />
              </div>
              <h1>{items.name}</h1>
              <h2>{items.description}</h2>
              <h3>
                R$
                {items.price.replace('.', ',')}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="btn">
        <button
          type="button"
          onClick={() => {
            setClosePage(!closePage);
          }}
        >
          Voltar

        </button>
      </div>
    </section>
  );
}

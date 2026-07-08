import { useState } from 'react';
import { FAQS } from '../../data/content';
import { PlusIcon, MinusIcon } from '../icons/Icons';
import faqImage from '../../assets/figma/web/faq/img133391.png';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
const currentImage =
  openIndex >= 0
    ? FAQS[openIndex]?.image
    : faqImage; 


  return (
    <section className="faq section">
      <div className="container faq__row">
        <div className="faq__left">
          <h2 className="faq__heading">Frequently Asked Questions</h2>
          <div className="faq__visual">
            <img key={currentImage} src={currentImage} alt="Aviation career at Tiger Wings" loading="lazy" className="faq__image" />
          </div>
        </div>

        <div className="faq__list">
          {FAQS.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-item__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-item__icon">
                    {isOpen ? <MinusIcon size={22} color="#0f1b52" /> : <PlusIcon size={22} color="#0f1b52" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-item__content">
                    <p className="faq-item__answer">{item.a}</p>
                    <img src={item.image} alt={item.q} className='faq-item__mobile-image' />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

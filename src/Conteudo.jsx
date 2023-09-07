import React from 'react';
import seta from './assets/seta.svg';
import marca from './assets/marca.svg';
import engrenagem from './assets/engrenagem.svg';
import imagem from './assets/imagem.jpg';
import calendario from './assets/calendario.svg';
import codigobarras from './assets/codigobarras.svg';
import carteira from './assets/carteira.svg';
import noticia from './assets/noticia.svg';
import contato from './assets/contato.svg';
import plano from './assets/plano.svg';
import './Conteudo.css';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Modal from './Modal';

const Conteudo = () => {
  const data = new Date();
  const mes = format(data, 'MMMM', { locale: ptBR });
  const [fatura, setFatura] = React.useState(1);

  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="cabecalho">
        <img src={seta} alt="voltar" className="seta" />
        <div className="cabecalho-info">
          <img src={marca} alt="marca" />
          <img src={engrenagem} alt="engrenagem" />
        </div>
      </div>
      <main>
        <div className="conteudo-principal">
          <div className="imagem">
            <img src={imagem} alt="" />
          </div>
          <div className="informacoes-conta">
            {fatura ? null : (
              <>
                <div className="maisFatura">
                  <p>
                    Você não possui nenhuma fatura em aberto.{' '}
                    <span className="bold">
                      Suas contas estão todas em dia, parabéns!
                    </span>
                  </p>
                </div>
              </>
            )}
            {fatura === 1 ? (
              <>
                <p className="nome">Olá, Guilherme!</p>
                <p className="fatura">Fatura {mes}</p>
                <p className="saldo">R$ 231,45</p>
                <span className="pagarFatura" onClick={openModal}>
                  Pagar Fatura
                </span>
              </>
            ) : null}
            {fatura > 1 ? (
              <>
                <div className="maisFatura">
                  <p>
                    <span className="bold">{`Você possui ${fatura} faturas em aberto.`}</span>{' '}
                    Clique em <span className="bold">Pagar Faturas</span> para
                    regualizar sua situação...
                  </p>
                </div>
                <span className="pagarFatura" onClick={openModal}>
                  Pagar Fatura
                </span>
              </>
            ) : null}
          </div>
          <div className="opcoes">
            <div className="opcao-item">
              <img src={calendario} alt="" />
              <span>Agendar Consulta</span>
            </div>
            <div className="opcao-item">
              <img src={codigobarras} alt="" />
              <span>Minhas Faturas</span>
            </div>
            <div className="opcao-item">
              <img src={carteira} alt="" />
              <span>Carteirinha Digital</span>
            </div>
          </div>
          <div className="mais-opcoes-container">
            <div className="titulo">
              <span>Mais Opções</span>
            </div>

            <div className="mais-opcoes">
              <div className="mais-opcoes-item">
                <img src={noticia} alt="" />
                <span>Notícias do CCG</span>
              </div>
              <div className="mais-opcoes-item">
                <img src={contato} alt="" />
                <span>Contatos Importantes</span>
              </div>
              <div className="mais-opcoes-item">
                <img src={plano} alt="" />
                <span>Plano Odontológico</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>{modalOpen && <Modal onClose={closeModal} fatura={fatura} />}</div>
    </div>
  );
};

export default Conteudo;

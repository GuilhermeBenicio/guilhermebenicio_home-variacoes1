import React from 'react';
import './Modal.css';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Modal = (props) => {
  const data = new Date();
  const mes = format(data, 'MMMM', { locale: ptBR });
  return (
    <>
      <div className="overflay" onClick={props.onClose}></div>
      <div className="modal">
        {props.fatura > 1 ? (
          <>
            <p>Pagar todas as faturas em aberto?</p>
            <p className="label">Valor total:</p>
            <p className="valor bold">R$ 654,45</p>
            <span className="btn">Copiar código de barras</span>
          </>
        ) : null}
        {props.fatura === 1 ? (
          <>
            <p>
              {`Pagar a fatura de`}
              <span className="bold"> {mes}</span>?
            </p>
            <p className="label">Valor:</p>
            <p className="valor bold">R$ 231,45</p>
            <span className="btn">Copiar código de barras</span>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Modal;

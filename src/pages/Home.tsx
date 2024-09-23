import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { Link } from 'react-router-dom';
import { Transaction } from '../types/Transaction';


const Home: React.FC = () => {
  const transactionContext = useContext(TransactionContext);
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar a visibilidade (animação)

  useEffect(() => {
    setIsVisible(true); // Ativa a animação após o componente montar
  }, []);

  if (!transactionContext) return null;

  const { transactions, addTransaction, setTransactions, setTransactionToEdit } = transactionContext;

  const handleDeleteTransaction = (id: number) => {
    setTransactions(prevTransactions => prevTransactions.filter(t => t.id !== id));
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setTransactionToEdit(transaction);
  };

  return (
    <div className={`home-container ${isVisible ? 'slide-up' : ''}`}> {/* Adicionando classe de animação */}
      <h1 className={`slide-up ${isVisible ? 'slide-up-delay-1' : ''}`}>Home</h1>
      <TransactionForm onSubmit={addTransaction} />
      <TransactionList 
        transactions={transactions} 
        onDelete={handleDeleteTransaction} 
        onEdit={handleEditTransaction} 
      />
      <Link to="/dashboard" className={`dashboard-link slide-up ${isVisible ? 'slide-up-delay-2' : ''}`}>Ir para o Dashboard</Link>

      <p className={`info-text slide-up ${isVisible ? 'slide-up-delay-3' : ''}`}>
        O site é um gerenciador de orçamento pessoal e ele te auxilia a controlar suas finanças, podendo adicionar receitas e despesas.
      </p>
    </div>
  );
};

export default Home;

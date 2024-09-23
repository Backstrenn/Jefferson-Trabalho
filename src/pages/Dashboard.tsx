import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import Summary from '../components/Summary';
import { Link } from 'react-router-dom';


const Dashboard: React.FC = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;

  const { transactions } = transactionContext;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="summary">
        <Summary transactions={transactions} />
      </div>
      <Link to="/" className="home-link">Voltar para Home</Link>

      {/* Adicionando folhas animadas */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="leaf"
          style={{
            left: `${Math.random() * 100}vw`, // Posição aleatória na horizontal
            animationDelay: `${Math.random() * 3}s`, // Atraso aleatório na animação
          }}
        ></div>
      ))}
    </div>
  );
};

export default Dashboard;

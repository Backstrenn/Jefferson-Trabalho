import React from 'react';

interface Transaction {
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

interface SummaryProps {
  transactions: Transaction[];
}

const Summary: React.FC<SummaryProps> = ({ transactions }) => {
  const { totalIncome, totalExpense } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.totalIncome += transaction.amount;
      } else if (transaction.type === 'expense') {
        acc.totalExpense += transaction.amount;
      }
      return acc;
    },
    { totalIncome: 0, totalExpense: 0 }
  );

  const balance = totalIncome - totalExpense;

  // Formatação para moeda
  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);

  return (
    <div className="summary-container">
      <h2>Resumo</h2>
      <p>Renda Total: {formatCurrency(totalIncome)}</p>
      <p>Despesa Total: {formatCurrency(totalExpense)}</p>
      <p>Saldo: {formatCurrency(balance)}</p>
    </div>
  );
};

export default Summary;

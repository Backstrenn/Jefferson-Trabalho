import React from 'react';


interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: number) => void;
  onEdit: (transaction: Transaction) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onDelete, onEdit }) => {
  const handleDelete = (id: number) => {
    if (window.confirm("Tem certeza de que deseja excluir esta transação?")) {
      onDelete(id);
    }
  };

  return (
    <ul className="transaction-list">
      {transactions.map((transaction) => (
        <li key={transaction.id} className={`transaction-item ${transaction.type}`}>
          <span>{transaction.description}: R${transaction.amount.toFixed(2)}</span>
          <div className="transaction-buttons">
            <button onClick={() => onEdit(transaction)}>Editar</button>
            <button onClick={() => handleDelete(transaction.id)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;

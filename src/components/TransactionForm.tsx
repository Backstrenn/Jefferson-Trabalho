import React, { useState, useEffect } from 'react';
import { Transaction } from '../types/Transaction';


interface TransactionFormProps {
  onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
  transactionToEdit?: Transaction | null;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit, transactionToEdit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number | ''>('');
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [error, setError] = useState('');

  useEffect(() => {
    if (transactionToEdit) {
      setDescription(transactionToEdit.description);
      setAmount(transactionToEdit.amount);
      setType(transactionToEdit.type);
    }
  }, [transactionToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof amount === 'number' && amount <= 0) {
      setError('O valor deve ser maior que zero.');
      return;
    }
    
    setError(''); // Limpa a mensagem de erro
    onSubmit({ description, amount: Number(amount), type });
    
    // Limpa os campos após o envio
    setDescription('');
    setAmount('');
    setType('income');
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h2>{transactionToEdit ? 'Editar' : 'Adicionar'} Transação</h2>
      {error && <p className="error-message">{error}</p>}
      <div>
        <label>Descrição</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Valor</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Tipo</label>
        <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
          <option value="income">Entrada</option>
          <option value="expense">Saída</option>
        </select>
      </div>
      <button type="submit">{transactionToEdit ? 'Atualizar' : 'Adicionar'} Transação</button>
    </form>
  );
};

export default TransactionForm;

'use client';

import { useState } from 'react';
import styles from './Input.module.css';

interface InputProps {
  onSend: (content: string) => void;
}

export const Input = ({ onSend }: InputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.input}
        placeholder="Напишите сообщение..."
        aria-label="Ввод сообщения"
      />
      <button 
        type="submit" 
        className={styles.button}
        disabled={!message.trim()}
      >
        Отправить
      </button>
    </form>
  );
};

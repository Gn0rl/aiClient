'use client'

import React, { useEffect, useState } from 'react';
import { Message as MessageComponent } from '../Message';
import { Message } from '@/shared/types';
import styles from './Chat.module.css';
import { Input } from '../Input';

export function Chat() {
  // Example messages for demonstration
  const [messages, setMessage] = useState<Message[]>([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      setMessage(JSON.parse(storedMessages));
    }
  }, []);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <MessageComponent key={message.id} message={message} />
        ))}
      </div>
      <div className={styles.inputContainer}>
        <Input onSend={(content: string) => {
          localStorage.setItem('messages', JSON.stringify([...messages, {
            id: Date.now().toString(),
            content,
            role: 'user',
            timestamp: Date.now()
          }]));
          setMessage([...messages, {
            id: Date.now().toString(),
            content,
            role: 'user',
            timestamp: Date.now()
          }]);
        }} />
      </div>
    </div>
  );
}
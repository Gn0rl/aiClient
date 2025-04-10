import React from 'react';
import { Message as MessageType } from '@/shared/types';
import styles from './Message.module.css';

interface MessageProps {
  message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`${styles.message} ${isUser ? styles.userMessage : styles.assistantMessage}`}>
      <div className={styles.avatar}>
        {isUser ? (
          <div className={styles.userAvatar}>Y</div>
        ) : (
          <div className={styles.assistantAvatar}>AI</div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.name}>{isUser ? 'You' : 'AI'}</span>
          <span className={styles.time}>
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className={styles.text}>{message.content}</div>
      </div>
    </div>
  );
};
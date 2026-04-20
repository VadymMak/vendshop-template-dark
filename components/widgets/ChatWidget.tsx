'use client';

import { useState, useRef, useEffect } from 'react';
import { SITE_CONFIG } from '@/lib/config';
import { CHAT_CONFIG } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './ChatWidget.module.css';

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
}

export default function ChatWidget() {
  const ui = t();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: 'bot', text: ui.chat.greeting },
  ]);
  const [input, setInput] = useState('');
  const [quickRepliesUsed, setQuickRepliesUsed] = useState<Set<string>>(new Set());
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const addMessage = (from: 'bot' | 'user', text: string) => {
    setMessages((prev) => [...prev, { id: prev.length, from, text }]);
  };

  const handleQuickReply = (reply: (typeof CHAT_CONFIG.quickReplies)[number]) => {
    addMessage('user', reply.label);
    setQuickRepliesUsed((prev) => new Set(prev).add(reply.id));
    setTimeout(() => addMessage('bot', reply.response), 400);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    addMessage('user', text);
    setTimeout(() => addMessage('bot', ui.chat.fallback), 500);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  const availableQuickReplies = CHAT_CONFIG.quickReplies.filter(
    (r) => !quickRepliesUsed.has(r.id)
  );

  return (
    <>
      {/* Toggle button */}
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Zavrieť chat' : 'Otvoriť chat'}
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat panel */}
      {open && (
        <div className={styles.panel}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.avatar}>🤖</div>
            <div>
              <div className={styles.botName}>{SITE_CONFIG.name}</div>
              <div className={styles.status}>Online</div>
            </div>
          </div>

          {/* Messages */}
          <div className={styles.messages}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.msg} ${msg.from === 'user' ? styles.msgUser : styles.msgBot}`}
              >
                {msg.text}
              </div>
            ))}

            {/* Quick replies */}
            {availableQuickReplies.length > 0 && (
              <div className={styles.quickReplies}>
                {availableQuickReplies.map((r) => (
                  <button key={r.id} className={styles.qBtn} onClick={() => handleQuickReply(r)}>
                    {r.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className={styles.inputRow}>
            <input
              type="text"
              className={styles.input}
              placeholder="Napíšte správu..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className={styles.sendBtn} onClick={handleSend} aria-label="Odoslať">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

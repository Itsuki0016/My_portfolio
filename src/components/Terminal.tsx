import { useState, useEffect, useRef } from 'react';
import { HistoryItem } from '../types';
import { executeCommand } from '../utils/commands';
import './Terminal.css';

const Terminal = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 初回起動時にウェルカムメッセージを表示
        const welcomeOutput = executeCommand('banner');
        setHistory([
            {
                command: '',
                output: welcomeOutput,
                timestamp: new Date(),
            },
        ]);
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        // 自動スクロール
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!input.trim()) {
            return;
        }

        const output = executeCommand(input);

        // clearコマンドの特別処理
        if (output === 'CLEAR_SCREEN') {
            setHistory([]);
            setInput('');
            return;
        }

        const newHistoryItem: HistoryItem = {
            command: input,
            output,
            timestamp: new Date(),
        };

        setHistory([...history, newHistoryItem]);
        setCommandHistory([...commandHistory, input]);
        setHistoryIndex(-1);
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // 上キー: 前のコマンド
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex =
                    historyIndex === -1
                        ? commandHistory.length - 1
                        : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        }
        
        // 下キー: 次のコマンド
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
                if (newIndex === commandHistory.length - 1 && historyIndex === newIndex) {
                    setHistoryIndex(-1);
                    setInput('');
                } else {
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[newIndex]);
                }
            }
        }
    };

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="terminal" onClick={handleTerminalClick} ref={terminalRef}>
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-button close"></span>
                    <span className="terminal-button minimize"></span>
                    <span className="terminal-button maximize"></span>
                </div>
                <div className="terminal-title">visitor@portfolio:~</div>
            </div>
            
            <div className="terminal-body">
                {history.map((item, index) => (
                    <div key={index} className="terminal-history-item">
                        {item.command && (
                            <div className="terminal-command">
                                <span className="terminal-prompt">visitor@portfolio:~$</span>
                                <span className="terminal-command-text">{item.command}</span>
                            </div>
                        )}
                        <div className="terminal-output">
                            {typeof item.output === 'string'
                                ? item.output.split('\n').map((line, i) => (
                                    <div key={i}>{line || '\u00A0'}</div>
                                ))
                                : item.output}
                        </div>
                    </div>
                ))}
                
                <form onSubmit={handleSubmit} className="terminal-input-line">
                    <span className="terminal-prompt">visitor@portfolio:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="terminal-input"
                        autoComplete="off"
                        spellCheck="false"
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;

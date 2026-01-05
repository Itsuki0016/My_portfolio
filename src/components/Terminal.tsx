import { useState, useEffect, useRef } from 'react';
import { HistoryItem } from '../types';
import { executeCommand, commands } from '../utils/commands';
import './Terminal.css';

const Terminal = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [theme, setTheme] = useState<'green' | 'blue' | 'amber'>('green');
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalBodyRef = useRef<HTMLDivElement>(null);

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
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [history]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!input.trim()) {
            return;
        }

        const output = executeCommand(input, commandHistory, setTheme);

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
        // タブキー: コマンド補完
        if (e.key === 'Tab') {
            e.preventDefault();
            if (input.trim()) {
                const inputLower = input.toLowerCase().trim();
                const matches = commands.filter(cmd => 
                    cmd.name.startsWith(inputLower)
                );
                
                if (matches.length === 1) {
                    // 1つだけマッチした場合、そのコマンドで補完
                    setInput(matches[0].name);
                } else if (matches.length > 1) {
                    // 複数マッチした場合、共通部分まで補完
                    let commonPrefix = matches[0].name;
                    for (let i = 1; i < matches.length; i++) {
                        let j = 0;
                        while (j < commonPrefix.length && j < matches[i].name.length && 
                               commonPrefix[j] === matches[i].name[j]) {
                            j++;
                        }
                        commonPrefix = commonPrefix.substring(0, j);
                    }
                    
                    // 共通部分が現在の入力より長い場合は補完
                    if (commonPrefix.length > inputLower.length) {
                        setInput(commonPrefix);
                    } else {
                        // 共通部分がない場合は候補を表示
                        const suggestion = matches.map(m => m.name).join(', ');
                        const newHistoryItem: HistoryItem = {
                            command: '',
                            output: `候補: ${suggestion}`,
                            timestamp: new Date(),
                        };
                        setHistory([...history, newHistoryItem]);
                    }
                }
            }
            return;
        }

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
        <div className={`terminal theme-${theme}`} onClick={handleTerminalClick}>
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-button close"></span>
                    <span className="terminal-button minimize"></span>
                    <span className="terminal-button maximize"></span>
                </div>
                <div className="terminal-title">visitor@portfolio:~</div>
            </div>
            
            <div className="terminal-body" ref={terminalBodyRef}>
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

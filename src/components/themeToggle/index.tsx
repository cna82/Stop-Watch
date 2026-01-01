//ThemeToggle comp
'use client';
//imports
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
//comp
const ThemeToggle = () => {
    //hooks ,states , effects
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-32 h-11" />;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;
    //return of comp
    return (
        <div className="flex items-center gap-1 p-1 bg-muted/70 backdrop-blur-sm rounded-full border border-border/50 shadow-sm">
            {/* Light Mode */}
            <button
                onClick={() => setTheme('light')}
                className={`
         cursor-pointer relative p-2 rounded-full transition-all duration-300
          ${currentTheme === 'light'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }
        `}
                aria-label="light"
            >
                <Sun className="w-4 h-4" />
                {currentTheme === 'light' && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 " />
                )}
            </button>

            {/* Dark Mode */}
            <button
                onClick={() => setTheme('dark')}
                className={`
          cursor-pointer relative p-2 rounded-full transition-all duration-300
          ${currentTheme === 'dark'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }
        `}
                aria-label="dark"
            >
                <Moon className="w-4 h-4" />
                {currentTheme === 'dark' && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 " />
                )}
            </button>

            {/* System Mode */}
            <button
                onClick={() => setTheme('system')}
                className={`
         cursor-pointer relative p-2 rounded-full transition-all duration-300
          ${theme === 'system'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }
        `}
                aria-label="system"
            >
                <Monitor className="w-4 h-4" />
                {theme === 'system' && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 " />
                )}
            </button>
        </div>
    );
}

export default ThemeToggle;
"use client";
//imports
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTimerStore } from "@/stores/timerStore";
import ThemeToggle from "@/components/themeToggle";
import { Trash2 } from "lucide-react";
//format time function
const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
// Stop watch comp 
const StopwatchClient = () => {
    //states , effects , zustand satates
    const { time, isRunning, start, pause, reset, tick, history } = useTimerStore();

    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => tick(), 1000);
        //clean up function
        return () => clearInterval(interval);
    }, [isRunning, tick]);
    //title of document sync with timer 
    useEffect(() => {
        const formatted = formatTime(time);
        document.title = isRunning
            ? `${formatted} • Stopwatch `
            : "Stopwatch";
    }, [time, isRunning]);
    // clear history function 
    const clearHistory = (): void => {
        localStorage.removeItem("history");
        useTimerStore.setState({ history: [] });
    };
    //remove item from history 
    const handleRemoveItem = (index: number) => {
        const updatedHistory = history.filter((_, idx) => idx !== index);
        useTimerStore.setState({ history: updatedHistory });
        localStorage.setItem("history", JSON.stringify(updatedHistory));
    };
    //retuen of comp
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-5">
            <Card className="w-full max-w-sm shadow-xl">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="md:text-xl text-lg font-bold">
                            Sina's Stopwatch ⏱
                        </CardTitle>
                        <ThemeToggle />
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="text-center">
                        <div className="text-5xl font-mono font-semibold tracking-wider">
                            {formatTime(time)}
                        </div>
                        <Badge variant={isRunning ? "default" : "secondary"} className="mt-3">
                            {isRunning
                                ? "Running"
                                : time === 0
                                    ? "Hasn't started yet"
                                    : "Paused"}
                        </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {!isRunning ? (
                            <Button onClick={start} size="lg" className="cursor-pointer">
                                {time === 0 ? "Start" : "Resume"}
                            </Button>
                        ) : (
                            <Button onClick={pause} variant="secondary" size="lg" className="cursor-pointer">
                                Pause
                            </Button>
                        )}
                        <Button
                            onClick={reset}
                            variant="destructive"
                            size="lg"
                            disabled={time === 0}
                            className="cursor-pointer"
                        >
                            Reset
                        </Button>
                    </div>

                    {history.length > 0 && (
                        <div className="flex justify-end">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearHistory}
                                className="text-muted-foreground cursor-pointer"
                            >
                                <Trash2 className="w-3.5 h-3.5 mr-1" />
                                Clear All
                            </Button>
                        </div>
                    )}

                    <Separator />

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-muted-foreground">History</h3>
                        </div>

                        {history.length === 0 ? (
                            <p className="text-xs text-muted-foreground text-center py-4 italic">
                                No records yet — start timing!
                            </p>
                        ) : (
                            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                                {history.map((t: number, index: number) => (
                                    <div
                                        key={`${t}-${index}`} // ۱۰۰٪ منحصر به فرد حتی با زمان تکراری
                                        className="flex items-center justify-between gap-4 p-3 rounded-xl bg-muted/60 hover:bg-muted/80 transition-all duration-200 border border-border/50"
                                    >
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-sm font-semibold text-primary">
                                                Lap {index + 1}
                                            </span>
                                            <span className="text-lg font-mono text-foreground">
                                                {formatTime(t)}
                                            </span>
                                        </div>

                                        <Button
                                            onClick={() => handleRemoveItem(index)}
                                            variant="ghost"
                                            size="icon"
                                            className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg cursor-pointer transition-all"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            <span className="sr-only">Remove lap {index + 1}</span>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default StopwatchClient;


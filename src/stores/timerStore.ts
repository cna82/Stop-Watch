//imports
import { create } from "zustand"
// TS interface
interface TimerState {
    time: number
    isRunning: boolean
    history: number[]
    start: () => void
    pause: () => void
    reset: () => void
    tick: () => void
}
//function
export const useTimerStore = create<TimerState>((set) => ({
    time: 0,
    isRunning: false,
    history: [],
    start: () => set({ isRunning: true }),
    pause: () => set({ isRunning: false }),
    reset: () =>
        set((state) => ({
            time: 0,
            isRunning: false,
            history: [...state.history, state.time],
        })),
    tick: () => set((state) => ({ time: state.time + 1 })),
}))

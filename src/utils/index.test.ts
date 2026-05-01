import { describe, it, expect, vi } from 'vitest'
import { numbers, exercises, shuffle, randomInteger, synthSpeak } from '.'

describe('numbers', () => {
    it('is an array of 1–12', () => {
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    })
})

describe('exercises', () => {
    it('contains all 7 exercise slugs', () => {
        expect(exercises).toHaveLength(7)
        expect(exercises).toContain('add')
        expect(exercises).toContain('subtract')
    })
})

describe('shuffle', () => {
    it('returns the same array reference', () => {
        const arr = [1, 2, 3]
        expect(shuffle(arr)).toBe(arr)
    })

    it('contains the same elements after shuffle', () => {
        const arr = [1, 2, 3, 4, 5]
        expect(shuffle([...arr]).sort()).toEqual(arr)
    })
})

describe('randomInteger', () => {
    it('returns an integer within [min, max]', () => {
        for (let i = 0; i < 100; i++) {
            const n = randomInteger(3, 7)
            expect(n).toBeGreaterThanOrEqual(3)
            expect(n).toBeLessThanOrEqual(7)
            expect(Number.isInteger(n)).toBe(true)
        }
    })

    it('returns min when min === max', () => {
        expect(randomInteger(5, 5)).toBe(5)
    })
})

describe('synthSpeak', () => {
    it('cancels previous speech even when sounds is false', () => {
        const cancel = vi.fn()
        Object.defineProperty(window, 'speechSynthesis', {
            value: { cancel, speak: vi.fn() },
            writable: true,
        })
        synthSpeak({ sounds: false })
        expect(cancel).toHaveBeenCalled()
    })

    it('speaks when sounds is true', () => {
        const speak = vi.fn()
        Object.defineProperty(window, 'speechSynthesis', {
            value: { cancel: vi.fn(), speak },
            writable: true,
        })
        vi.stubGlobal('SpeechSynthesisUtterance', class {
            rate = 1; pitch = 1; text = ''
            constructor(text: string) { this.text = text }
        })
        synthSpeak({ message: 'hello', sounds: true })
        expect(speak).toHaveBeenCalled()
        vi.unstubAllGlobals()
    })
})

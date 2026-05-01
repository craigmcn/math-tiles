export const numbers = Array(12).fill(1).map((_, i) => i + 1)

export const exercises = [ 'higher', 'lower', 'one-more', 'one-less', 'between', 'add', 'subtract' ]

export const shuffle = <T>(array: T[]): T[] => {
    let currentIndex = array.length; let temporaryValue: T; let randomIndex: number

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}

export const synthSpeak = ({ message, status, sounds }: { message?: string; status?: 'right' | 'wrong'; sounds?: boolean | null }): void => {
    speechSynthesis.cancel()

    if (sounds) {
        let text = message

        if (status === 'right') {
            text = 'Correct'
        }

        if (status === 'wrong') {
            text = 'Not quite, try again'
        }

        if (!text) return
        const utterance = new SpeechSynthesisUtterance(text)

        utterance.rate = 1.2

        if (status === 'right') {
            utterance.rate = 1.3
            utterance.pitch = 1.4
        }

        if (status === 'wrong') {
            utterance.rate = 1.3
            utterance.pitch = 0.8
        }

        speechSynthesis.speak(utterance)
    }
}

export const randomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

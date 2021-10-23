import { useRef, useEffect } from 'react'

/**
 * usePrevious
 * Creating this function until react implements it.
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * @param value
 */
export const usePrevious = (value) => {
    const ref = useRef(null)

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}

export default usePrevious

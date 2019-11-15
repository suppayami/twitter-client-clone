import React, { useState } from 'react'
import { useStores } from '../../hooks/useStores'
import { toast } from 'react-toastify'
import { observer } from 'mobx-react-lite'

export const NewTweet: React.FunctionComponent = observer(() => {
    const [text, setText] = useState('')
    const { twitterStore } = useStores()

    const submit: React.MouseEventHandler = async event => {
        event.preventDefault()

        if (!text || text.length > 160) {
            toast.error('Tweet should be between 1 - 160 characters length')
            return
        }

        try {
            await twitterStore.createTweet(text)
            toast.info('Created tweet!')
            setText('')
        } catch (err) {
            toast.error(err.response.data.errors.detail)
        }
    }

    return (
        <form>
            <div className="field">
                <label className="label">New Tweet</label>
                <div className="control">
                    <textarea
                        id="tweet"
                        className="input textarea"
                        placeholder="Tweet..."
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary" onClick={submit}>
                        Tweet
                    </button>
                </div>
            </div>
        </form>
    )
})

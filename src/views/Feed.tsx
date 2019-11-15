import React from 'react'
import { NewTweet } from '../components/Feed/NewTweet'
import { useStores } from '../hooks/useStores'
import { observer } from 'mobx-react-lite'
import { AllTweets } from '../components/Feed/AllTweets'

export const Feed: React.FunctionComponent = observer(() => {
    const { sessionStore } = useStores()

    return (
        <div className="container">
            {sessionStore.isAuthenticated && <NewTweet />}
            <AllTweets />
        </div>
    )
})

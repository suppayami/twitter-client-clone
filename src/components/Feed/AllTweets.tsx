import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../hooks/useStores'
import { Tweet } from './Tweet'

export const AllTweets: React.FunctionComponent = observer(() => {
    const { twitterStore, sessionStore } = useStores()
    const isAuthenticated = sessionStore.isAuthenticated

    useEffect(() => {
        twitterStore.fetchTweets()
    }, [twitterStore, twitterStore.mostLiked, isAuthenticated])

    return (
        <section className="section">
            <label htmlFor="most-liked" className="checkbox title is-5">
                <input
                    id="most-liked"
                    type="checkbox"
                    checked={twitterStore.mostLiked}
                    onChange={event => (twitterStore.mostLiked = event.target.checked)}
                />
                {` `}Most Liked?
            </label>

            {twitterStore.tweets.map(tweet => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))}
        </section>
    )
})

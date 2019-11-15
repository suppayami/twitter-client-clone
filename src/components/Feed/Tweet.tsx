import React from 'react'
import { useStores } from '../../hooks/useStores'

interface TweetData {
    id: number
    text: string
    like_count: number
    retweet_count: number
    original_tweet: TweetData | null
    user_like: boolean
    user_retweet: boolean
    user: {
        id: number
        username: string
    }
}

interface TweetProps {
    tweet: TweetData
}

export const Tweet: React.FunctionComponent<TweetProps> = props => {
    const { twitterStore, sessionStore } = useStores()
    const { tweet } = props

    const like: React.MouseEventHandler = event => {
        event.preventDefault()
        const likeTweet = tweet

        if (!sessionStore.isAuthenticated) {
            return
        }

        if (tweet.user_like) {
            twitterStore.unlike(likeTweet.id)
            return
        }

        twitterStore.like(likeTweet.id)
    }

    const retweet: React.MouseEventHandler = event => {
        event.preventDefault()
        const retweetTweet = tweet

        if (!sessionStore.isAuthenticated) {
            return
        }

        if (tweet.user_retweet) {
            twitterStore.unretweet(retweetTweet.id)
            return
        }

        twitterStore.retweet(retweetTweet.id)
    }

    return (
        <div className="card">
            <header className="card-header">
                {!tweet.original_tweet && <p className="card-header-title">@{tweet.user.username}</p>}
                {tweet.original_tweet && (
                    <p className="card-header-title">
                        @{tweet.user.username} retweet @{tweet.original_tweet.user.username}
                    </p>
                )}
            </header>
            <div className="card-content">
                {!tweet.original_tweet && tweet.text}
                {tweet.original_tweet && tweet.original_tweet.text}
            </div>
            {!tweet.original_tweet && (
                <footer className="card-footer">
                    <a
                        href={`/like/${tweet.id}`}
                        onClick={like}
                        className={`card-footer-item ${tweet.user_like ? '' : 'has-text-grey'}`}
                    >
                        {tweet.like_count} Likes
                    </a>
                    <a
                        href={`/retweet/${tweet.id}`}
                        onClick={retweet}
                        className={`card-footer-item ${tweet.user_retweet ? '' : 'has-text-grey'}`}
                    >
                        {tweet.retweet_count} Retweets
                    </a>
                </footer>
            )}
        </div>
    )
}

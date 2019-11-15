import { observable, action } from 'mobx'
import { http } from '../utils/http'

export const twitterStore = observable(
    {
        tweets: [] as any[],
        mostLiked: false,

        async fetchTweets() {
            const data = (await http.get('/tweet/', { params: this.mostLiked ? { order_by: 'like_count' } : {} })).data
                .data
            this.tweets = data
        },

        async createTweet(text: string) {
            const data = (await http.post('/tweet/', { tweet: { text } })).data.data
            this.tweets.unshift(data)
        },

        async like(tweetId: number) {
            await http.post('/like/', { like: { tweet_id: tweetId } })
            await this.fetchTweets()
        },

        async unlike(tweetId: number) {
            await http.delete('/like/', { data: { like: { tweet_id: tweetId } } })
            await this.fetchTweets()
        },

        async retweet(tweetId: number) {
            await http.post('/retweet/', { retweet: { tweet_id: tweetId } })
            await this.fetchTweets()
        },

        async unretweet(tweetId: number) {
            await http.delete('/retweet/', { data: { retweet: { tweet_id: tweetId } } })
            await this.fetchTweets()
        },
    },
    {
        fetchTweets: action,
        createTweet: action,
        like: action,
        unlike: action,
        retweet: action,
        unretweet: action,
    },
)

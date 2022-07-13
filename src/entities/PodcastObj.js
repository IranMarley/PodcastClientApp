class PodcastObj {
    constructor(podcastApi) {
        this.id = podcastApi.id;
        this.title = podcastApi.title;
        this.publisher = podcastApi.publisher;
        this.image = podcastApi.image;
        this.thumbnail = podcastApi.thumbnail;
        this.listennotes_url = podcastApi.listennotes_url;
        this.total_episodes = podcastApi.total_episodes;
        this.description = podcastApi.description;
        this.itunes_id = podcastApi.itunes_id;
        this.rss = podcastApi.rss;
        this.language = podcastApi.language;
        this.country = podcastApi.country;
        this.website = podcastApi.website;
        this.is_claimed = podcastApi.is_claimed;
        this.genre_ids = podcastApi.genre_ids
        this.order = podcastApi.order;
    }
}

export { PodcastObj };
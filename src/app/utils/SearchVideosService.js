export default class SearchVideosService {

    constructor(getQueryVideosProvider, getVideoDataProvider, parseProvider) {
        this.getQueryVideosProvider = getQueryVideosProvider;
        this.getVideoDataProvider = getVideoDataProvider;
        this.parseProvider = parseProvider;
    }

    async searchVideosByString(searchBy, nextPageToken) {
        try {
            const foundedVideos = await this.getQueryVideosProvider(searchBy, nextPageToken);
            const videosId = foundedVideos.items.map(video => video.id.videoId);
            const videosData = await this.getVideoDataProvider(...videosId);
            return this.parseProvider(foundedVideos, videosData);
        }
        catch (err) {
            throw err;
        }

    }
}

export const searchVideoParser = (foundedVideos,  videosData) =>{

    return {...foundedVideos, ...{items:videosData.items}}

}

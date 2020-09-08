import axios from "axios";

const YOUTUBE_VIDEO_URI ="https://www.googleapis.com/youtube/v3/videos"
const YOUTUBE_SEARCH_URI= "https://www.googleapis.com/youtube/v3/search"
export const API_KEY = "key"
const YOUTUBE_API_KEY_VALUE= process.env.REACT_APP_YOUTUBE_API_KEY

export const CHART_KEY = "chart"
export const TRENDING_VIDEOS_CHART_VALUE= "mostPopular"

export const PART_KEY = "part"
export const DEFAULT_PART_VALUE ="snippet,contentDetails,statistics"
export const PART_SNIPPET_VALUE =  "snippet"
export const PART_CONTENT_DETAILS_VALUE = "contentDetails"
export const PART_STATITICS_VALUE= "statistics"


export const MAX_ITEMS_RESULT_KEY ="maxResults"
export const MAX_ITEMS_RESULT_DEFAULT_VALUE = "8"

export const PAGE_TOKEN_KEY ="pageToken"

export const TYPE_KEY ="type"
export const TYPE_VIDEO_VALUE ="video"

export const QUERY_KEY = "q"

export const ID_KEY= "id"


const  trendingRequestBody ={ 
    params:{
    
        [CHART_KEY] : TRENDING_VIDEOS_CHART_VALUE,
        [PART_KEY]:DEFAULT_PART_VALUE,
        [MAX_ITEMS_RESULT_KEY] : MAX_ITEMS_RESULT_DEFAULT_VALUE,
        [API_KEY] : YOUTUBE_API_KEY_VALUE
    }
}


const searchRequestBody ={
    params:{
     
        [API_KEY] : YOUTUBE_API_KEY_VALUE,
        [TYPE_KEY]: TYPE_VIDEO_VALUE,
        [MAX_ITEMS_RESULT_KEY] : MAX_ITEMS_RESULT_DEFAULT_VALUE
    }
}

const videoRequestBody ={
    params:{
        [API_KEY] : YOUTUBE_API_KEY_VALUE,
        [PART_KEY]:`${PART_SNIPPET_VALUE}, ${PART_CONTENT_DETAILS_VALUE}, ${PART_STATITICS_VALUE}`
    }

}
const generateTrendingVideosRequestBody = (nextPageToken) =>{

    if( nextPageToken === undefined ||  nextPageToken === null)
        return {...trendingRequestBody}
    
    let params ={...trendingRequestBody.params}
    params[PAGE_TOKEN_KEY] = nextPageToken
    return  {...trendingRequestBody ,params}


}

const generateSearchVideosRequestBody = (searchValue, nextPageToken) =>{
    
    if(searchValue === undefined || searchValue === null || searchValue === "")
        throw new Error("search param can't bet empty")
    
    let params = {...searchRequestBody}
    params.params[QUERY_KEY] = searchValue

    if(nextPageToken === undefined || nextPageToken === null || nextPageToken ==="")
        return params
        
    params.params[PAGE_TOKEN_KEY] = nextPageToken
    return params

}

const generateVideoRequestBody = (videoIds) =>{

    let params = {...videoRequestBody}

    params.params[ID_KEY] = videoIds.toString()
    return params
}

export   async function getTrendingVideos(nextPageToken)  {
    const httpConfig =  generateTrendingVideosRequestBody(nextPageToken)
    try{
        const response = await axios.get(YOUTUBE_VIDEO_URI, httpConfig )
        return response.data
    }catch(error){
        throw(error.toJSON())
    }
    
}


export async function getQueryVideos(searchValue, nextPageToken){

    try{
        const httpConfig = generateSearchVideosRequestBody(searchValue, nextPageToken)
        const response = await axios.get(YOUTUBE_SEARCH_URI, httpConfig)
        return response.data
    }catch(error){
        throw error
    }
}

export async function getVideoData( ...videoIds){

    try{
        const httpConfig = generateVideoRequestBody(videoIds)
        const response = await axios.get(YOUTUBE_VIDEO_URI, httpConfig)
        return response.data
    }catch(error){
        throw error
    }
}




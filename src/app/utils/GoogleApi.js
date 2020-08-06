
import axios from "axios";

const YOUTUBE_URI ="https://www.googleapis.com/youtube/v3/videos"
export const API_KEY = "key"
const YOUTUBE_API_KEY_VALUE= "AIzaSyB93kEVTztcMiRx23kN4lW1Z6dIiXTmsiw"

export const CHART_KEY = "chart"
export const TRENDING_VIDEOS_CHART_VALUE= "mostPopular"

export const PART_KEY = "part"
export const DEFAULT_PART_VALUE ="snippet,contentDetails,statistics"

export const MAX_ITEMS_RESULT_KEY ="maxWidth"
export const MAX_ITEMS_RESULT_DEFAULT_VALUE = "8"

export const PAGE_TOKEN_KEY ="pageToken"

const  trendingRequestBody ={ 
    params:{
    
        [CHART_KEY] : TRENDING_VIDEOS_CHART_VALUE,
        [PART_KEY]:DEFAULT_PART_VALUE,
        [MAX_ITEMS_RESULT_KEY] : MAX_ITEMS_RESULT_DEFAULT_VALUE,
        [API_KEY] : YOUTUBE_API_KEY_VALUE
    }
}
const generateTrendingVideosRequestBody = (nextPageToken) =>{

    if( nextPageToken === undefined)
        return {...trendingRequestBody}
    
    let params ={...trendingRequestBody.params}
    params[PAGE_TOKEN_KEY] = nextPageToken
    return  {...trendingRequestBody ,params}


}


export   async function getTrendingVideos(nextPageToken)  {
    const httpConfig =  generateTrendingVideosRequestBody(nextPageToken)
    try{
        const response = await axios.get(YOUTUBE_URI, httpConfig )
        return response.data
    }catch(error){
        throw(error.toJSON())
    }
    
    
}


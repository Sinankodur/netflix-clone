import { API_KEY } from "./constants/constants"

export const nowPlaying = `movie/now_playing?api_key=${API_KEY}&language=en-US`
export const action = `movie/top_rated?api_key=${API_KEY}&language=en-US`
export const series = `trending/tv/day?api_key=${API_KEY}&language=en-US`
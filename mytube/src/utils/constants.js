const GOOGLE_API_KEY = "AIzaSyDYMmAB8LUOYNglVXGCFkn2O9G9mUIgXvA";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_AUTOCOMPLITE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

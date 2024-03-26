const { google } = require('googleapis');

async function fetchVideos(workout) {
  try {
    const youtube = google.youtube({
      version: 'v3',
      auth: process.env.GOOGLE_API_KEY
    });

    const response = await youtube.search.list({
      part: 'snippet',
      q: `${workout} tutorial`,
      maxResults: 1,
      type: 'video',
      videoDuration: 'medium',
      videoEmbeddable: true,
      safeSearch: 'strict',
    });

    const videoItems = response.data.items.map(item => ({
      id: {
        kind: 'youtube#video',
        videoId: item.id.videoId
      },
      snippet: item.snippet,
    }));

    return videoItems;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
}

const findWorkout = async (req, res) => {
  const workout = req.params.name;

  try {
    const videos = await fetchVideos(workout);

    const topRatedWorkout = videos.reduce((bestVideo, currentVideo) => {
      if (!bestVideo || !currentVideo.snippet.ratings) {
        return currentVideo;
      }
      return currentVideo.snippet.ratings.likeCount > bestVideo.snippet.ratings.likeCount
        ? currentVideo
        : bestVideo;
    }, null);

    if (topRatedWorkout) {
      res.status(200).json(topRatedWorkout);
    } else {
      res.status(404).json({ error: 'No workout video found' });
    }
  } catch (error) {
    console.error('Error finding workout:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  findWorkout
};
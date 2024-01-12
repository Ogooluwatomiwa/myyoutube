import React from "react";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="chamber">
        <div>
          <img src="home.svg" alt="logo" />
          <p>Home</p>
        </div>
        <div>
          <img src="sports.svg" alt="logo" />
          <p>Shorts</p>
        </div>
        <div>
          <img src="subscription.svg" alt="logo" />
          <p>Subscription</p>
        </div>
      </div>
      <div className="chamber">
        <div>
          <h3>You</h3>
          <img src="right.svg" alt="logo" className="rightarrow" />
        </div>
        <div>
          <img src="profile.svg" alt="logo" />
          <p>Your Channel</p>
        </div>
        <div>
          <img src="history.svg" alt="logo" />
          <p>History</p>
        </div>
        <div>
          <img src="videos.svg" alt="logo" />
          <p>Your videos</p>
        </div>
        <div>
          <img src="later.svg" alt="logo" />
          <p>Watch later</p>
        </div>
        <div className="chamber">
          <img src="down.svg" alt="logo" />
          <p>Show more</p>
        </div>
      </div>
      <div className="chamber">
        <h3>Explore</h3>
        <div>
          <img src="trending.svg" alt="logo" />
          <p>Trending</p>
        </div>
        <div>
          <img src="music.svg" alt="logo" />
          <p>Music</p>
        </div>
        <div>
          <img src="movie.svg" alt="logo" />
          <p>Movies & TV</p>
        </div>
        <div>
          <img src="live.svg" alt="logo" />
          <p>Live</p>
        </div>
        <div>
          <img src="games.svg" alt="logo" />
          <p>Gaming</p>
        </div>
        <div>
          <img src="news.svg" alt="logo" />
          <p>News</p>
        </div>
        <div>
          <img src="sports.svg" alt="logo" />
          <p>Sports</p>
        </div>
        <div>
          <img src="learning.svg" alt="logo" />
          <p>Learning</p>
        </div>
        <div>
          <img src="fashion.svg" alt="logo" />
          <p>Fashion & Beauty</p>
        </div>
        <div>
          <img src="podcast.svg" alt="logo" />
          <p>Podcasts</p>
        </div>
      </div>
      <div className="chamber">
        <h3>More from YouTube</h3>
        <div>
          <img src="youtubepremium.svg" alt="logo" />
          <p>YouTube Premium</p>
        </div>
        <div>
          <img src="youtubestudio.svg" alt="logo" />
          <p>YouTube Studio</p>
        </div>
        <div>
          <img src="youtubemusic.svg" alt="logo" />
          <p>YouTube Music</p>
        </div>
        <div>
          <img src="youtubekids.svg" alt="logo" />
          <p>YouTube Kids</p>
        </div>
      </div>
      <div className="chamber">
        <div>
          <img src="settings.svg" alt="logo" />
          <p>Settings</p>
        </div>
        <div>
          <img src="history.svg" alt="logo" />
          <p>Report history</p>
        </div>
        <div>
          <img src="help.svg" alt="logo" />
          <p>Help</p>
        </div>
        <div>
          <img src="feedback.svg" alt="logo" />
          <p>Send feedback</p>
        </div>
      </div>
      <div className="downpart">
        <div>
          <div className="downchamber">
            <p>About</p>
            <p>Press</p>
            <p>Copyright</p>
          </div>
          <div className="downchamber">
            <p>Contact us</p>
            <p>Creators</p>
          </div>
          <div className="downchamber">
            <p>Advertise</p>
            <p>Developers</p>
          </div>
        </div>
        <div>
          <div className="downchamber">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Policy & Safety</p>
          </div>
          <div className="downchamber">
            <p>How YouTube works</p>
          </div>
          <div className="downchamber">
            <p>Test new features</p>
          </div>
          <div className="downchamber">
            <p className="copyright">&copy; 2024 Google LLC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

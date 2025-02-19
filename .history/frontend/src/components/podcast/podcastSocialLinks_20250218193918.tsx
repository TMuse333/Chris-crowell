import Link from "next/link";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

const PodcastSocialLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
      <a
        href="https://podcasts.apple.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
      >
        <FaApple size={20} />
        Apple Podcasts
      </a>

      <a
        href="https://open.spotify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
      >
        <FaSpotify size={25} />
        Spotify
      </a>

      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
      >
        <FaYoutube size={25} />
        YouTube
      </a>
    </div>
  );
};

export default PodcastSocialLinks;

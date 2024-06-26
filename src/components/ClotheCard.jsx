import { useEffect, useState } from "react";

export default function ClotheCard({ clothe, config, user }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = async () => {
    try {
      const response = await fetch(`api/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clotheTo: clothe.id,
          userTo: user.id,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        console.log(data.error);
      } else {
        // Update the likes and isLiked state to trigger a rerender
        setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
        setIsLiked(prevIsLiked => !prevIsLiked);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchLikes() {
      try {
        const response = await fetch(`/api/getLikesByClothe?id=${clothe.id}`);
        const data = await response.json();
        if (response.ok) {
          setLikes(data.likes);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    }

    async function fetchIsLiked() {
      try {
        const response = await fetch(`/api/isLiked?id=${clothe.id}`);
        const data = await response.json();
        if (response.ok) {
          setIsLiked(data.isLiked);
        } else {
          setIsLiked(false);
        }
      } catch (error) {
        console.error("Error fetching isLiked:", error);
      }
    }

    if (clothe.id) {
      fetchLikes();
      fetchIsLiked();
    }
  }, [clothe.id]);

  return (
    <li className="flex flex-col">
      {!config && (
        <section className="w-full px-2 flex items-center justify-between gap-4 z-20 border-t-2 rounded-xl">
          <a
            href={`/profile/${user.id}`}
            className="w-5 h-5 rounded-full overflow-hidden object-fill bg-slate-50/30"
          >
            <img src={user.imageUrl} alt={user.name} />
          </a>
          <span className="text-xl text-center">{likes}</span>
          {isLiked ? (
            <button onClick={handleLikeClick}>
              <i className="text-xl text-red-400 ri-heart-3-fill"></i>
            </button>
          ) : (
            <button onClick={handleLikeClick}>
              <i className="text-xl ri-heart-3-line hover:text-red-400"></i>
            </button>
          )}
        </section>
      )}
      <div
        key={clothe.id}
        className="relative w-36 md:w-44 rounded-xl overflow-hidden bg-slate-50/50 z-10"
      >
        <img
          src={clothe.imageUrl}
          alt={clothe.name}
          className="h-64 md:h-72 w-full pointer-events-none object-cover mx-auto"
        />
        {config && (
          <footer className="absolute top-0 right-0 text-center p-2">
            <a href={`/clothe/${clothe.id}`}>
              <i className="text-3xl text-white/50 hover:text-white transition-colors ri-edit-circle-fill"></i>
            </a>
          </footer>
        )}
      </div>
    </li>
  );
}

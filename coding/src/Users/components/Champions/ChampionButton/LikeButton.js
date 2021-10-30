import React from "react";

export default function LikeButton({
  database,
  setDatabase,

  name,
  like,
}) {
  return (
    <div>
      <button
        onClick={() => {
          setDatabase(
            database.map((profile) => {
              if (profile.name === name) {
                profile.like = !like;
              }
              return profile;
            })
          );
        }}
      >
        {like ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

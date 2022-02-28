import React from "react";
import { useAlbums } from "../../hooks/server/useAlbums";
import Loading from "../Loading/Loading";

const AlbumList = () => {
  const { albums, isValidating } = useAlbums();
  if (!albums || isValidating) return <Loading />;
  return (
    <div>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;

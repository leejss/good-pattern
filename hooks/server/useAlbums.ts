import useRequest from "../../client/useRequest";
import { IAlbum } from "../../types/Album";

export function useAlbums() {
  const { data, error, isValidating } = useRequest<IAlbum[]>(
    {
      url: "/albums",
    },
    { revalidateOnFocus: false }
  );
  return {
    albums: data,
    error,
    isValidating,
  };
}

export function useAlbumByUserId(id: string) {
  const { data, error, isValidating } = useRequest<IAlbum[]>(
    {
      url: `/albums/${id}`,
    },
    { revalidateOnFocus: false }
  );
  return {
    albums: data,
    error,
    isValidating,
  };
}

import genres from "../../../../../assets/Json/genres.json";

export const filterItsGenre = (genre: string): boolean => {
  for (let i = 0; i < genres.length; i++) {
    if (genre === genres[i]) {
      return true;
    }
  }
  return false;
};

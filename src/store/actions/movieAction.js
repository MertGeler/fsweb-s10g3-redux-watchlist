export const NEXT = "NEXT";
export const PREV = "PREV";
export const REMOVE_MOVIE = "REMOVE_MOVIE fava eklediğimi çıkar";
export const RESTORE_MOVIE = "RESTORE_MOVIE favdan geleni döndür";

export function next() {
  return { type: NEXT };
}

export function prev() {
  return { type: PREV };
}

export function removeMovie(movie) {
  return { type: REMOVE_MOVIE, payload: movie };
}

export function restoreMovie(movie) {
  return { type: RESTORE_MOVIE, payload: movie };
}

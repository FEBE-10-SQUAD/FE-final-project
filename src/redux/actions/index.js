export const BOOKMARK_JOBS = "BOOKMARK_JOBS";
export const APPLY_JOBS = "APPLY_JOBS";

export const addToBookmark = (bookmark) => {
  return {
    type: BOOKMARK_JOBS,
    payload: bookmark,
  };
};

export const applyToStatus = (apply) => {
  return {
    type: APPLY_JOBS,
    payload: apply,
  };
};

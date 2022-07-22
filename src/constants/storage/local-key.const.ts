const LOCAL_KEY = {
  local: 'local',
} as const;

export type LOCAL_KEY = typeof LOCAL_KEY[keyof typeof LOCAL_KEY];

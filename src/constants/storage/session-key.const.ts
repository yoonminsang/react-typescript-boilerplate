const SESSION_KEY = {
  session: 'session',
} as const;

export type SESSION_KEY = typeof SESSION_KEY[keyof typeof SESSION_KEY];

export const URL = {
  toString: () => '/',
  ex: {
    toString: () => '/ex',
    'error-boundary': {
      toString: () => '/ex/show-error-boundary',
    },
    'hook-form': {
      toString: () => 'ex/hook-form',
    },
  },
};

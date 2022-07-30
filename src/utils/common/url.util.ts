export const url = {
  toString: () => '/',
  ex: {
    toString: () => '/ex',
    'error-boundary': {
      toString: () => '/ex/show-error-boundary',
    },
    'hook-form': {
      toString: () => 'ex/hook-form',
    },
    'react-query': {
      toString: () => 'ex/react-query',
    },
  },
};

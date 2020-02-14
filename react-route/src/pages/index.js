// export { default as Home } from './Home';
// export { default as Board } from './Board';

import sharedSplitting from '../sharedSplitting';

export const Home = sharedSplitting(() => import('./Home'));
export const Board = sharedSplitting(() => import('./Board'));
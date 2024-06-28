import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../data/recipes.json';

export const App = () => {
  return <RecipeList recipes={recipes} />;
};

// import { RecipeList } from './RecipeList/RecipeList';
// import recipes from '../data/recipes.json';
// export const App = () => {
//   //  return <RecipeList />;
//   return <RecipeList recipes={recipes} />;
// };

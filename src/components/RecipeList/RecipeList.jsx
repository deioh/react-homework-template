//import React from 'react';

import { RecipeListItem } from 'components/RecipeListItem/RecipeListItem';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(
        ({ key, title }) => (
          <RecipeListItem key={key} title={title} />
        )

        // <li>
        //   <h3>{recipe.title}</h3>
        //   <h4>{recipe.description}</h4>
        // </li>
      )}
    </ul>
  );
};

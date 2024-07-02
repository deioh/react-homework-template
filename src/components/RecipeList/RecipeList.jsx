import { RecipeListItem } from 'components/RecipeListItem/RecipeListItem';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <RecipeListItem />
      ))}
    </ul>
  );
};

// import { RecipeListItem } from 'components/RecipeListItem/RecipeListItem';

// export const RecipeList = ({ recipes }) => {
//   return (
//     <ul>
//       {recipes.map(({ key, title }) => (
//         <RecipeListItem key={key} title={title} />
//       ))}
//     </ul>
//   );
// };

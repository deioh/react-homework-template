export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <li>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} width={300} height={300} />
        </li>
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

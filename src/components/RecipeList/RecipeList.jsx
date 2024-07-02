import { RecipeListItem } from 'components/RecipeListItem/RecipeListItem';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(({ id, title, category, description, image }) => (
        <RecipeListItem
          key={id}
          title={title}
          category={category}
          description={description}
          image={image}
        />
      ))}
    </ul>
  );
};

// export const RecipeList = ({ recipes }) => {
//   return (
//     <ul>
//       {recipes.map(recipe => (
//         <RecipeListItem
//           key={recipe.id}
//           title={recipe.title}
//           category={recipe.category}
//           description={recipe.description}
//           image={recipe.image}
//         />
//       ))}
//     </ul>
//   );
// };

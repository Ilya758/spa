export const dogQuery = `
query ($searchValue: String!) {
   dogs(searchValue: $searchValue) {
     status
     value {
       name
       image_link
       good_with_strangers
       energy
       good_with_other_dogs
       min_life_expectancy
     }
     reason
   }
 }
`;

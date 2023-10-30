export const withPromotedResCard = (resCard) => {
  return () => {
    return (
      <div>
        <lebel>Promoted</lebel>
        <resCard />
      </div>
    );
  };
};

// I want to use this component to wrap promoted component like swegiy.
// but sweegy api not has option to do it
// these are the following instruction to use it.

// import like this in which component need to use.
import { withPromotedResCard } from "../utils/withPromotedResCard";

// pass component inside this function which you want wrap as an argument
// and store it in a variable.
const resCardPromoted = withPromotedResCard(ResCard);

// use this variable as an component.
<resCardPromoted />;

import { useParams } from "react-router-dom";
import snacks from "./snacks";
/**
 * Snack
 * Visual element for vending machine snack
 * props:
 * -
 *
 * VendingMachine => Snack
 */

function Snack() {
  console.log("snack ran");
  const { snackName } = useParams();
  console.log("snackName", snackName);
  const snack = snacks.find(s => s.name === snackName);
  console.log("snack", snack);

  return (
    <div className="Snack">
      <h1 className="Snack-header"> {snack.name}</h1>
      {/**<img src={snack.img} className="Snack-img" alt={snack.name}></img>*/}
      <p>{ snack.description }</p>
    </div>
  );
}

export default Snack;
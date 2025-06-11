import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../Services/apiRestaurant";
import MenuItem from "./MenuItem";

// Implemented render as you fetch strategy

function Menu() {
  const menu = useLoaderData();
  console.log(menu)

  return (
    <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)}
    </ul>
  )
}

// named export
export async function loader() {
  const menu = await getMenu();
  return menu;
}

// default export
export default Menu;

// STEPS
// 1. create a loader func
// 2. connect loader func to route

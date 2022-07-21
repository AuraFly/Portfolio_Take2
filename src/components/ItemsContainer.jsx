import Item from "./Item";
import { PROJECTS1, PROJECTS2, SOCIAL } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PROJECTS1} title="PROJECTS W/ FRONT END" />
      <Item Links={PROJECTS2} title="BACK END || NODE ONLY PROJECTS" />
      <Item Links={SOCIAL} title="SOCIAL" />
    </div>
  );
};

export default ItemsContainer;

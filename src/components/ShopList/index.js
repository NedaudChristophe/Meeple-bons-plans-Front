// On import
//le css
import "./style.scss";

  
import { useSelector } from "react-redux";
import ShopCard from './ShopCard'



//on creer le composant
function ShopList() {
  // v ci-dessous, on fait du destructuring c'est a dire qu'on appelle le stat puis le reducer cible et ensuite on specifie tout les entrées qui nous interesse.
  //! attention, IL faut obligatoirement nommé les const exactement comme dans le stat
  const { shopList } = useSelector((state) => state.deal);

  // V Ici, On appelle simplement le state puis le state cible, puis la ligne du state qui nous interesse
  //! attention, grace a ce syteme on peut renommer la ligne du state comme on le veut, mais on ne peut appeler qu'une "ligne" par selector 
  //const shopList = useSelector((state) => state.deal.shopList);
  
  console.log('activedeal', shopList);
  return (
    <div className="pseudo-body">
      {/*.map permet de creer un objet a chaque fois que l'on trouve une entrée dans ShopList
      ICI pour chaque element trouvé un article shop avec un id et une key sera creer dans un ShopCard  */}
      {shopList.map((shop) => {
        if(shop.id === 22) {
          return
        }else{
          return(<ShopCard key={shop.id} id={shop.id} {...shop} />)}
      })}     
    </div>
  );
}

export default ShopList;

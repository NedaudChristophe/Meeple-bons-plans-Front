// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DealCard from '../DealCard';
import { filterDealOfOneCategory } from '../selectors/deal';
import './style.scss';

// == Composant
function DealList() {
  const { categorySlug } = useParams();
  console.log('SLUG', categorySlug);

  const dealList = useSelector((state) => state.deal.dealList);
  console.log('LOG SUR PAGE DEALS', dealList);

  let listToDisplay = '';
  switch (categorySlug) {
    case 'jeux-de-societe':
      listToDisplay = filterDealOfOneCategory(dealList, 1);
      break;
    case 'jeux-de-roles':
      listToDisplay = filterDealOfOneCategory(dealList, 3);
      break;
    case 'jeux-de-figurines':
      listToDisplay = filterDealOfOneCategory(dealList, 2);
      break;
    default:
      listToDisplay = dealList;
  }
  console.log('LOG DE LISTTODISPLAY', listToDisplay);

  return (
    <div className="deallist">
      <div className="titledeallist">
        {listToDisplay.map((deal) => (
          <DealCard key={deal.id} id={deal.id} {...deal} />
        ))}
      </div>
    </div>
  );
}

// == Export
export default DealList;

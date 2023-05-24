import { ProdCard } from "components/prodCard/prodCard";

const cards = [
  { id: "id-01", name: "milk", type: 'food1', price: 100 },
  { id: "id-02", name: "tomato", type: 'food2', price: 120 },
  { id: "id-03", name: "potato", type: 'food3', price: 140 },
  { id: "id-04", name: "orange", type: 'food4', price: 200 },
];

const isActive = true;

function ProdList () {
  const d = 'I am product list';
  const f = 'I am supper cards';
  return (
    <div>
      <div>{isActive && d}</div>
      {/* <div>{isActive ?? d}</div> */}
      <div>{isActive ? d : f}</div>
      <ul>
        {cards.map((card) => (
          <li key={card.id}> 
            <ProdCard 
              // key={card.id}
              name = {card.name} 
              type = {card.type} 
              price = {card.price}
            ></ProdCard>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default ProdList;

// ProdList.propTypes = {
//   cards: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})),
// };


// function ProdList () {
//   const d = 'I am product list';
//   return (
//     <div>
//       {d}
//       <ProdCard name = "milk" type = 'food' price = {100}></ProdCard>
//       <ProdCard name = 'tomato' type = 'food' price =  {120}></ProdCard>
//       <ProdCard name = "potato" type = 'food'  price = {125}></ProdCard>
//       <ProdCard price = {220}></ProdCard>
//     </div>
//   );
// }
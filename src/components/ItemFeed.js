import ItemCard from "./ItemCard";
import styled from "styled-components"

const ItemFeedStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 768px;
  margin: 1rem auto 0 auto;
`;

export default function ItemFeed({items}) {

  return (
    <>
      <ItemFeedStyle>
        {items.length ? 
        items.map((item) => (
          <ItemCard key={item._id} item={item} />
        )) :
        <p>No items found!</p>
        }
      </ItemFeedStyle>
    </>
  )
}
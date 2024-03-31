import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filter = data.find((p) => p.id === Number(id));
      setProduct(filter);
    });
  }, [id]);

  if (!product) return <div>loading</div>;

  return (
    <Container className="mx-auto">
      <h1>{product.name}</h1>
      <hr />
      <img src={product.pictureUrl} alt="imgDeta" />
      <p>{product.description}</p>
      <h4>{product.price}</h4>
    </Container>
  );
};

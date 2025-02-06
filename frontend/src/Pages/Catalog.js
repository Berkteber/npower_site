import React from 'react';
import useFetch from '../hooks/useFetch';

const CatalogItem = ({ img, title, catalogLink }) => {
  return (
    <div className='catalog-item'>
      <img src={img} alt={title} />
      <p>{title}</p>
      <a href={catalogLink} target="_blank" rel="noopener noreferrer">İndir</a>
    </div>
  );
};

function Catalog() {
  const { data, loading, error, api } = useFetch('/catalog-page?populate=CatalogItem.Image');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const catalogItems = data.CatalogItem.map((catalog) => ({
    img: `${api}${catalog.Image[0]?.url}`,
    title: catalog.Title,
    catalogLink: catalog.Link,
  }));

  return (
    <div className='catalog-area'>
      <div className='container'>
        <h2 className='catalog-title'>Katalog ve Broşürlerimiz</h2>
        <p className='catalog-description'>NPower ürünleri ile ilgili katalog ve broşürlere buradan ulaşabilirsiniz.</p>
        <div className='catalog-grid'>
          {catalogItems.map((catalog, index) => (
            <CatalogItem
              key={index}
              img={catalog.img}
              title={catalog.title}
              catalogLink={catalog.catalogLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;

import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const tileData = [
  {
    img: 'https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/df42e818f52a4bb094434d835f444a36/1/GCuCv727RiYFXYTGtzWJiQ/462570137_1009777691163693_2811138529125412320_n.jpg',
    title: 'Wedding Event',
    author: 'Lovely Events',
  },
  {
    img: 'https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/c53feb95c3c2464b91f7913951d3e9cc/1/GCuCv727RiYFXYTGtzWJiQ/20240322_180038.jpg',
    title: 'Corporate Setup',
    author: 'Lovely Events',
  },
  {
    img: 'https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/eac69c227ecd487e8879d21d90a627f2/1/GCuCv727RiYFXYTGtzWJiQ/Artboard%207.jpg',
    title: 'Birthday Celebration',
    author: 'Lovely Events',
  },
  {
    img: 'https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/d2a534bc4eee478c9e196d34a6a992d0/1/GCuCv727RiYFXYTGZD1tbW/N40A3541.jpg',
    title: 'Charity Gala',
    author: 'Lovely Events',
  },
];

export default function ImageGallery() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <GridList cellHeight={240} cols={3} style={{ width: '80%' }}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by {tile.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList({ title, itemData }) {

    
  return (
    <div className='container m-auto p-8'>        
    <div className='bg-gradient-to-b from-slate-950 to-slate-300 p-6 rounded-lg'>
    <h1 className='mb-4 text-slate-300'>{title}</h1>
    <Box sx={{ width: 5/5, height: 1/1, overflowY: 'scroll'}}>
      <ImageList variant="masonry" cols={5} gap={14}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              className='rounded-lg shadow-md shadow-black hover:scale-105 transition-all'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
    </div>
  );
}
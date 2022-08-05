import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from './Model';


export default function MediaCard(product: Product) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        component="img"
        height="140"
        image = {product.images[0]}
        alt= {product.brand}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product.description}
         <p> Price: {product.price} $</p>
         <p> Stock: {product.stock} </p>
        </Typography>
      </CardContent>
     
    </Card>
  );
}


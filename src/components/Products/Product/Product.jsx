import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'; 

import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.cardcontent}>
                    <Typography variant='h5' gutterBottm >
                      {product.name}
                    </Typography>

                    <Typography variant='h5'  >
                       {product.price}
                    </Typography>
                    
                    <Typography variant='h2' color='textSecondary' >
                       {product.description}
                    </Typography>
                </div>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add To Cart">
                    <AddShoppingCart/>
                 </IconButton>
            </CardActions>
      </Card>
  )
}

export default Product

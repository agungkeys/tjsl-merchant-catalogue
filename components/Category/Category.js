import React from 'react';
import { Card, Grid, Image, Text, Link } from '@nextui-org/react';

function Category(props) {
  const { item } = props;
  return (
    <Card css={{ p: "$0", mw: "400px" }} variant="bordered" isPressable isHoverable>
      <Card.Header>
        <Image
          alt="nextui logo"
          src={item.image || ''}
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 size={14} css={{ lineHeight: "$xs" }}>
              {item.name || ''}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text size={10} css={{ color: "$accents8" }}>{item.description || ''}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
    </Card>
  )
}

export default Category;
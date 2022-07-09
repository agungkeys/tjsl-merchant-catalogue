import React, { useState} from "react";
import { Card, Grid, Link, Text, Spacer } from "@nextui-org/react";

function Header() {
  return(
    <Card 
      variants="shadow" 
      css={{ 
        bgBlur: "rgba(255, 255, 255, 0.8)",
        // bgBlur: "linear-gradient(110deg, rgba(255, 144, 104, 0.6) 10%, rgba(255, 75, 31, 0.6) 100%)", 
        position: "sticky", 
        top: 0, 
        zIndex: 999, 
        mw: '100%', 
        borderTopLeftRadius: '0', 
        borderTopRightRadius: '0',
      }}
    >
      <Card.Body>
        <Grid.Container justify="start" alignItems="center">
          <Grid>
            <Text h6 size={18} color="$yellow600" css={{ m: 0, ml: 20, fontWeight: 'bold' }}>UMKDEMI</Text>
          </Grid>
          <Spacer x={3} />
          <Grid>
            <Link href="#" underline css={{ fontSize: '16px', fontWeight: '500', color: '$gray600', '&:hover': { color: '$blue700', textDecoration: 'none'}}}>BERANDA</Link>
          </Grid>
          <Spacer x={1} />
          <Grid>
            <Link href="#" underline css={{ fontSize: '16px', fontWeight: '500', color: '$gray600', '&:hover': { color: '$blue700', textDecoration: 'none'}}}>MITRA UMKM</Link>
          </Grid>
          <Spacer x={1} />
          <Grid>
            <Link href="#" underline css={{ fontSize: '16px', fontWeight: '500', color: '$gray600', '&:hover': { color: '$blue700', textDecoration: 'none'}}}>BERITA TERKINI</Link>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  )
}

export default Header;
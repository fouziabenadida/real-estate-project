import { Container, Link } from "@mui/material"
import { Box } from "@mui/material"
import { Grid } from "@mui/material"

export default function Footer() {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg">

          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                Business
              </Box>
              <Box>
                <Link href="/sell" color="inherit" style={{ textDecoration: "none" }}>Sell(228)</Link>
              </Box>
              <Box>
                <Link href="/buy" color="inherit" style={{ textDecoration: "none" }}>Buy(7)</Link>
              </Box>
              <Box>
                <Link href="#" color="inherit" style={{ textDecoration: "none" }}>Transfer Ownership(1)</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                To sell
              </Box>
              <Box>
                <Link href="/#" color="inherit" style={{ textDecoration: "none" }}>House(110)</Link>
              </Box>
              <Box>
                <Link href="/#" color="inherit" style={{ textDecoration: "none" }}>Appartment(8)</Link>
              </Box>
              <Box>
                <Link href="#" color="inherit" style={{ textDecoration: "none" }}>Shop(3)</Link>
              </Box>
              <Box>
                <Link href="#" color="inherit" style={{ textDecoration: "none" }}>Land(9)</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                Cities
              </Box>
              <Box>
                <Link href="/#" color="inherit" style={{ textDecoration: "none", fontFamily: "sans-serif" }}>Istanbul(110)</Link>
              </Box>
              <Box>
                <Link href="/#" color="inherit" style={{ textDecoration: "none" }}>Trabzon(20)</Link>
              </Box>
              <Box>
                <Link href="#" color="inherit" style={{ textDecoration: "none" }}>Izmir(13)</Link>
              </Box>
              <Box>
                <Link href="#" color="inherit" style={{ textDecoration: "none" }}>Muğla(16)</Link>
              </Box>
              <Box>
                <Link href="#" color="inherit" style={{ textDecoration: "none" }}>Eskişehir(35)</Link>
              </Box>
            </Grid>
          </Grid>

        </Container>
      </Box>
    </footer>
  )
}

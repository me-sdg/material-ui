/* eslint-disable import/no-unresolved */
import { Grid, Typography, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import backArrow from '../assets/images/backArrow.svg';
import analytics from '../assets/images/analytics.svg';
import seo from '../assets/images/seo.svg';
import outReach from '../assets/images/outreach.svg';
import ecommerce from '../assets/images/ecommerce.svg';

const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  mainContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    paddingBottom: '5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  paragraphContainer: {
    maxWidth: '30em',
  },
}));

function Website({ setSelectedIndex }) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.mainContainer}
      >
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: '1em', marginLeft: '-3.5em' }}
        >
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/applications'
            onClick={() => setSelectedIndex(2)}
          >
            <img src={backArrow} alt='Back to ios android Page' />
          </IconButton>
        </Grid>

        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus, nam voluptatum
              molestiae libero modi ipsam tempore, ullam explicabo vitae nesciunt enim. Hic facere
              saepe earum, perspiciatis tempore iusto praesentium!
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Using regular commercial software leaves you with a lot of stuff you don’t need,
              without some of the stuff you do need, and ultimately controls the way you work.
              Without using any software at all you risk falling behind competitors and missing out
              on huge savings from increased efficiency.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Our custom solutions are designed from the ground up with your needs, wants, and goals
              at the core. This collaborative process produces finely tuned software that is much
              more effective at improving your workflow and reducing costs than generalized options.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        style={{ marginTop: '5em' }}
        className={classes.rowContainer}
        justifyContent={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item style={{ width: '18em' }}>
              <img src={analytics} alt='' style={{ width: '220px' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Analiytes
            </Typography>
          </Grid>
          <Typography variant='body1' align={matchesSM ? 'center' : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus, nam voluptatum
            molestiae libero modi ipsam tempore, ullam explicabo vitae nesciunt enim. Hic facere
            saepe earum, perspiciatis tempore iusto praesentium!
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        style={{ marginTop: '5em', marginBottom: '5em' }}
        className={classes.rowContainer}
        justifyContent={matchesMD ? 'center' : 'flex-end'}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item style={{ width: '18em' }}>
              <img src={ecommerce} alt='ecommerce' style={{ width: '220px' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: '1em' }} className={classes.paragraphContainer}>
          <Grid item>
            <Typography variant='h4' gutterBottom alignItems='center'>
              E-Commerce
            </Typography>
          </Grid>
          <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod similique laborum tempore
            deleniti nostrum aut reiciendis molestiae itaque
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        justifyContent={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item style={{ width: '18em' }}>
              <img src={outReach} alt='megaphone' style={{ width: '220px' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: '1em' }} className={classes.paragraphContainer}>
          <Grid item>
            <Typography variant='h4' gutterBottom alignItems='center'>
              OutReach
            </Typography>
          </Grid>
          <Typography variant='body1' align={matchesSM ? 'center' : undefined}>
            Purus faucibus ornare suspendisse sed nisi. Dui faucibus in ornare quam viverra orci
            sagittis. Pretium fusce id velit ut tortor pretium viverra suspendisse. Suscipit tellus
            mauris a diam maecenas sed enim
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        style={{ marginTop: '5em', marginBottom: '5em' }}
        alignItems='center'
        className={classes.rowContainer}
        justifyContent={matchesMD ? 'center' : 'flex-end'}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item style={{ width: '18em' }}>
              <img src={seo} alt='website sending' style={{ width: '220px' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: '1em' }} className={classes.paragraphContainer}>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Search Engine Obtimization
            </Typography>
          </Grid>
          <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
            Massa sed elementum tempus egestas. Sed id semper risus in. Turpis massa sed elementum
            tempus egestas sed sed risus pretium. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </Typography>
          <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum aspernatur dolor
            error sint deleniti in, enim reprehenderit,
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Website;

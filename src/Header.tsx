import HeaderButtons from './HeaderButtons';
import Box from '@mui/system/Box';

export default function Header(props: any) {
  const classes = props.classes;

  return (
    <>
      <Box sx={{ my: 8 }} className={classes.animation}>
        <img src={'./assets/owen2moen.gif'} width={350} height={200} />
      </Box>

      <Box sx={{ my: 4 }} className={classes.buttons}>
        <HeaderButtons />
      </Box>
    </>
  );

}
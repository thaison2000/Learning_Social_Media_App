import TopBar from '../components/TopBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const GroupBox = (props: any) => {
  return (
    <Card sx={{
      width: '280px', height: '280px', margin: '50px', display: 'inline-block', '&:hover': {
        backgroundColor: '#ffd180',
        opacity: [0.9, 0.8, 0.7],
      },
    }}>
      <CardContent >
        <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
          {props.BoxTitle}
        </Typography>
        <Avatar variant="square" src="images/create_group.png" sx={{ width: '100px', height: '100px', margin: 'auto' }}></Avatar>
      </CardContent>
      <CardActions>
        {(props.BoxTitle == 'Find a group') ?
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Input title='ID...'/>
          </div> :
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CustomButton title='Create' />
          </div>}
      </CardActions>
    </Card>
  );
}

function Home() {
  return (
    <div>
      <TopBar />
      <GroupBox BoxTitle='Find a group' />
      <GroupBox BoxTitle='Create a group' />
    </div>
  )
}

export default Home
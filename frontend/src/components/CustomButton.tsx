import { Button } from "@mui/material"

function CustomButton(props:any) {
    return (
        <div>
            <Button variant="outlined" size="large" sx={{ margin: 'auto', marginTop: '16px', color: 'green', borderColor:'green', '&:hover': {
      borderColor: 'green'}}}>
                {props.title}
            </Button>
        </div>
    )
}

export default CustomButton
import { TailSpin } from 'react-loader-spinner';


function Loader ()  {
return (
<div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', paddingTop: '40px'}}><TailSpin
  visible={true}
  height="80"
  width="80"
  color="gray"
  ariaLabel="tail-spin-loading"
  radius="1"
  /></div>
)
}

export default Loader
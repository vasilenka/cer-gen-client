import styles from './Homepage.module.scss';
import React from 'react';
import cx from 'classnames';
import Button from '../../components/Button/Button';
import axios from 'axios'
import Textfield from '../../components/Textfield/Textfield';
import Text from '../../components/Text/Text';

const Homepage = ({
  match,
  location,
  className,
  ...restProps
  }) => {

  let [email, setEmail] = React.useState("")
  let [error, setError] = React.useState(false)

  const generatePdf = () => {
    if(email) {
      axios.get(`http://localhost:5000/pdf/${ email }`, { responseType: 'blob' })
        .then(res => {

          if(res.status === 404) {
            return setError("User not found")
          }

          const file = new Blob(
            [res.data],
            {type: 'application/pdf'}
          );

          const fileURL = URL.createObjectURL(file);
          window.open(fileURL, 'cef-ongki-herlambang.pdf');

        })
        .catch(err => {
          console.log(err.message)
          setError(true)
        })
    }
  }

  return (
    <div className={cx(styles.root)}>
      <div style={{maxWidth: '560px', width: '560px'}}>
        {error && <Text style={{color: 'red'}} heading5 component="h2">Email tidak terdaftar</Text>}
        <Textfield style={{ width: '100%', marginBottom: '24px', }} type="email" id="name" label="Email" onChange={(value) => setEmail(value)} value={email}/>
        <Button stretch primary onClick={generatePdf}>
          Generate Certificate
        </Button>
      </div>
    </div>
  )
}

export default Homepage
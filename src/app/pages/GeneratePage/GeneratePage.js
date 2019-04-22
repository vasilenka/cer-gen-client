import styles from './GeneratePage.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../components/Text/Text';

const GeneratePage = ({
  location,
  className,
  ...restProps
  }) => {

  let [name, setName] = React.useState("")

  React.useEffect(() => {
    let queryParameter = new URLSearchParams(location.search)
    setName(queryParameter.get("name"))
  }, [])

  React.useEffect(() => {
    if(name) {
      document.title = `ce4-${name.replace(' ', '-').toLowerCase()}.pdf`;
    }
  }, [name])

  return (
    <div className={cx(styles.root)}>
      <Text
        heading1
        style={{
          fontWeight: '900',
          padding: '24px',
          borderRadius: '8px',
        }}
        className={styles.greet}
        component="h1"
      >
        {name}
      </Text>
    </div>
  )
}

export default GeneratePage
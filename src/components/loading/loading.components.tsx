import { FunctionComponent } from 'react'

import { SyncLoader } from 'react-spinners'

// STYLES
import { LoadingContainer } from './loading.style'

const Loading: FunctionComponent = () => {
  return (
    <>
      <LoadingContainer>
        <SyncLoader size={30} />
      </LoadingContainer>
    </>
  )
}

export default Loading

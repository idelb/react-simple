import React from 'react'

import Button from 'material-ui/Button';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <Button>
      Hello World
    </Button>
  </div>
)

export default Topic

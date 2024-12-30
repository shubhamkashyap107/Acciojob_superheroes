import React, { useContext } from 'react'
import { exampleContext } from '../App'

const CompN = ({}) => {

    const {username, highscore} = useContext(exampleContext)

  return (
    <div>
        {username}'s highscore is {highscore}
    </div>
  )
}

export default CompN
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import CustomButton from './CustomButton'

const handleCompleteThing = () => {
  console.log('Mark as complete')
}

const OneThing = ({thing, handleCompleteThing}) => {
  return (<>
  <h1 className='text-3xl font-bold sm:text-6xl text-center'> {thing} </h1>
  <CustomButton 
  text="Mark Done"
  handleCompleteThing={handleCompleteThing}
  />
  </>
  )
}


export default OneThing
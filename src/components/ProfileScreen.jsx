
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

import Plans from './Plans'

function ProfileScreen() {
  const user = useSelector(selectUser);
    
  return (
    <div className='h-screen bg-blue-600'>


       <div className='flex-col w-2/6 ml-auto mr-auto pt-[8%]'>
      
        <div className='bg-white  flex rounded-lg'>

            <div className='ml-[25px] w-full'>
             {(user && user.currSubscription) && <h3>Currently subscribed to {user.currSubscription} plan</h3>}
              {(!user || !user.currSubscription) && <h3>Plans</h3>}
             <h2>{user.email}</h2>
             <div className='mt-[20px] w-full'>
 

              <Plans/>
                {/* Logout the user using firebase authentication and than dispatch Logout action to redux store to make user state as null */}
              
             </div>

            </div>
        </div>
       </div>

    </div>
  )
}

export default ProfileScreen
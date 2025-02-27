import { LuUser2 } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';

const UserIcon = async () => {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt='user avatar'
        className='w-6 h-6 rounded-full object-cover'
      />
    );
  }

  return <LuUser2 className='w-6 h-6 rounded-full object-cover' />;
};
export default UserIcon;

import { useMainStore } from '@/store/mainStore';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSpeaker } from 'react-icons/bs';

export const Navbar = () => {
  const { toggleMenu } = useMainStore();

  return (
    <div className="flex flex-row items-center justify-between px-2.5 bg-primary w-screen h-10 text-white relative z-2">
      <div onClick={toggleMenu} className='h-full w-10 flex flex-row-reverse items-center text-2xl cursor-pointer'>
        <AiOutlineMenu />
      </div>
      <div className='h-full flex items-center'>
        <p>CrossFit La Virgos</p>
      </div>
      <div className='h-full w-10 flex flex-row items-center text-2xl cursor-pointer'>
        <BsSpeaker />
      </div>

    </div>
  )
}

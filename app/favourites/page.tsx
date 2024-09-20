import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { links } from '@/utils/links';

const FavouritesPage = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} className='flex gap-4 max-w-[100px'>
          <LuAlignLeft className='w-6 h-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>
  );
};
export default FavouritesPage;

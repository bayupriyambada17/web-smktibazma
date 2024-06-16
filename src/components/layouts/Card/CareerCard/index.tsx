import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

type CareerCardType = {
  title: string;
  degree: string;
  category: string;
  description: string;
  applicationDeadline: any;
}
interface CareerCardProps {
  career: CareerCardType | undefined;
}

const CareerCard: FC<CareerCardProps> = ({ career }) => {
  const router = useRouter();
  const deadline = new Date(career?.applicationDeadline) > new Date() ? true : false;
  return (
    <div className='bg-white shadow rounded-md p-4 mt-4'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col space-y-2'>
          <h4>{career?.title}</h4>
          <p>{career?.degree}</p>
          <div className='flex gap-2 items-center'>
            <Badge variant="destructive">FullTime</Badge>
            <Badge variant="secondary">{career?.category}</Badge>

          </div>
        </div>
        <div>
          {deadline ? (
            <Button variant={"outline"} onClick={() => { router.push(`/career/1`) }}>Apply</Button>
          ) : (

            <Button variant={"outline"} disabled={true}>Close</Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CareerCard;
"use client"
import { useParams } from 'next/navigation'
/* 
- This route will match https://mcaisse.com/surplace/{idUser}/{idSalle}/{idTable}
- [...slug] is used to match all routes afer surplace
*/
export default function Home() {
  const params = useParams()

  return (
    <></>
  );
}

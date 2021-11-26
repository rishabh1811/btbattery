import Image from 'next/image'

export default function Jumbotron(props) {
  return (
    <>
      <div className="flex justify-around items-center px-5 pt-4 pb-5 bg-[rgb(123,45,208,0.8)]">
        <div className="text pr-3">
          <p className=" text-2xl  pb-2 text-white">
            Biggest Website for Mobile Phone Batteries
          </p>
          <p className=" text-white ">All mobile phone premium battery</p>
        </div>
        
        <div className="w-[80vw] m-auto tablet:w-[243px] laptop:w-[20vw]">
          <Image layout="responsive"  height={860} width={573} src="/images/iphone2.webp" alt="iphone 6 battery" />
        </div>
      </div>
    </>
  );
}

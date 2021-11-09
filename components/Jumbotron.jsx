export default function Jumbotron(props) {
  return (
    <>
      <div className="flex justify-around items-center px-5 pt-4 pb-5 bg-[rgb(123,45,208,0.8)]">
        <div className="text pr-3">
          <p className="title text-2xl pb-2">
            Biggest Website for Mobile Phone Batteries
          </p>
          <p className="content">All mobile phone premium battery</p>
        </div>
        <div className="image">
          {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
          <img className="max-w-[80%] m-auto tablet:max-w-[50%]" src="/images/iphone2.png" alt="" />
        </div>
      </div>
    </>
  );
}

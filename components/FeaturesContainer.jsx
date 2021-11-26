

export default function FeaturesContainer() {
    return (<>

    {/* //& ***** HTML ******* */}
        <h2 className="text-center font-semibold mt-3 py-10 text-3xl">Features</h2>
        <div className="features flex flex-col mb-14 laptop:flex-row laptop:justify-around laptop:px-12    gap-16 text-center">


            <div className="feature-box">
                {/* <img className="m-auto pb-9" src="https://picsum.photos/seed/picsum/300/300" alt /> */}
                <img className="max-w-[30vw] laptop:max-w-[33%] m-auto pb-8" src="/images/chip.webp" alt="chip" />
                <div className="px-6">
                    <h2 className="text-2xl">Dual IC Protection</h2>
                    <p className="text-md">All Our Battery Come Equipped With Protection Circuit Built In</p>
                </div></div>


            <div className="feature-box">
                <img className="max-w-[30vw] laptop:max-w-[33%] m-auto pb-8" src="/images/battery.webp" alt="battery image" />
                <div className="px-6">
                    <h2 className="text-2xl">One By One Tested</h2>
                    <p className="text-md">All Our Batteries Are One By One Tested In Labs</p>
                </div>
            </div>


            <div className="feature-box">
                <img className="max-w-[30vw] laptop:max-w-[33%] m-auto pb-8" src="/images/full.webp" alt="full capacity" />
                <div className="px-6">
                    <h2 className="text-2xl">Guaranteed Full MAh Cell</h2>
                    <p className="text-md">All Our Batteries Has Full MAh Polymer Cell</p>
                </div></div>
        </div>

        
  </>  );
}

 
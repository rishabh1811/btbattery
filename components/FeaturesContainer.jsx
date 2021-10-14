

export default function FeaturesContainer() {
    return (<>

    {/* //& ***** Styles ******* */}
    <style jsx>{`
        @media(max-width : 760px){
            .feature-box img{
                max-width: 50vw;
        }
        }
       

        `}</style>
    {/* //& ***** HTML ******* */}
        <h2 className="text-center font-semibold mt-3 py-10 text-3xl">Features</h2>
        <div className="features flex flex-col mb-14 laptop:flex-row laptop:justify-around laptop:px-12    gap-16 text-center">


            <div className="feature-box">
                <img className="m-auto pb-9" src="https://picsum.photos/seed/picsum/300/300" alt />
                <div className="px-6">
                    <h2 className="text-2xl">Lorem ipsum dolor sit amet consectetur veniet.</h2>
                    <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio commodi odit obcaecati itaque, inventore quisquam.</p>
                </div></div>


            <div className="feature-box">
                <img className="m-auto pb-9" src="https://picsum.photos/seed/picsum/300/300" alt />
                <div className="px-6">
                    <h2 className="text-2xl">Lorem ipsum dolor sit amet consectetur veniet.</h2>
                    <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio commodi odit obcaecati itaque, inventore quisquam.</p>
                </div>
            </div>


            <div className="feature-box">
                <img className="m-auto pb-9" src="https://picsum.photos/seed/picsum/300/300" alt />
                <div className="px-6">
                    <h2 className="text-2xl">Lorem ipsum dolor sit amet consectetur veniet.</h2>
                    <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio commodi odit obcaecati itaque, inventore quisquam.</p>
                </div></div>
        </div>

        
  </>  );
}

 
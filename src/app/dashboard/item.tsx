import Image, { StaticImageData } from "next/image";

export default function Item({image, alt, title, subtitle, tags}: {image: string | StaticImageData, alt: string, title: string, subtitle: string, tags: Array<string>}) {
    return (
        <div className={`w-5/6 mx-auto mb-8 px-2 rounded-md shadow-md bg-white  min-h-screen`}>
            <div className="">
                <div className="mb-6 text-center pt-6">
                    <Image src={image} alt={alt} width={150} height={150} className="mx-auto mb-4"/>
                    <h6 className="text-sm text-xl font-bold text-gray-800">{title}</h6>
                    <h6 className="text-sm text-gray-500 w-3/5 mx-auto mt-2 font-extralight">{subtitle}</h6>
                </div>
                <div className="text-black border-y mt-4">
                    <h4 className="font-semibold mb-2 text-gray-800"></h4>
                    <div className="flex flex-wrap">
                        {tags.map((x) => (
                            <div key={x} className=" border px-4 py-2 m-1  mx-2 text-sm">{x}</div>
                        ))}
                    </div>
                        
                    
                </div>
            </div>
        </div>
    );
}




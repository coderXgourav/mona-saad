import Image from "next/image";
import PictureOne from "/public/gallery/one.webp";
import PictureTwo from "/public/gallery/two.webp";
import PictureThree from "/public/gallery/three.webp";
import PictureFour from "/public/gallery/four.webp";
import PictureFive from "/public/gallery/five.webp";
import PictureSix from "/public/gallery/six.webp";
import PictureSeven from "/public/gallery/seven.webp";
import PictureEight from "/public/gallery/eight.webp";
import PictureNine from "/public/gallery/nine.webp";
import PictureTen from "/public/gallery/ten.webp";
import PictureEleven from "/public/gallery/eleven.webp";
import PictureTwelve from "/public/gallery/twelve.webp";
import PictureThirteen from "/public/gallery/therteen.webp";
import PictureFourteen from "/public/gallery/fourteen.webp";
import PictureSixteen from "/public/gallery/sixteen.webp";
import PictureSeventeen from "/public/gallery/seventeen.webp";

export const GalleryComponent = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureOne}
            alt=""
            width={120}
            height={120}
          />
        </div>

        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureFour}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureFive}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureThree}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureSix}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureSixteen}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureFourteen}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureEight}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureNine}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureTen}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureSeven}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureThirteen}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureEleven}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureSeventeen}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Image
            className=" size-full rounded-lg"
            src={PictureFour}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div className="lg:col-span-8">
          <Image
            className=" size-full rounded-lg"
            src={PictureFourteen}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mt-4">
        <div className="lg:col-span-8">
          <Image
            className=" size-full rounded-lg"
            src={PictureSixteen}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div className="lg:col-span-4">
          <Image
            className=" size-full rounded-lg"
            src={PictureFive}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mt-4">
        <div className="lg:col-span-4">
          <Image
            className=" size-full rounded-lg"
            src={PictureThree}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div className="lg:col-span-8">
          <Image
            className=" size-full rounded-lg"
            src={PictureSix}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-12 gap-4 mt-4">
        <div className="lg:col-span-8">
          <Image
            className=" size-full rounded-lg"
            src={PictureEight}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div className="lg:col-span-4">
          <Image
            className=" size-full rounded-lg "
            src={PictureOne}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureSeven}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureEleven}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureThirteen}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureSeventeen}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureNine}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureTen}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureTwo}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div>
          <Image
            className=" size-full rounded-lg"
            src={PictureTwelve}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

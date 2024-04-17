/* eslint-disable react/prop-types */

export const Items = (props) => {
  return (
    <div className=" mt-3">
      <div className="flex items-center justify-between mt-2 rounded-md shadow-md p-1 " >
         <div className="flex items-center gap-2">
            <span className=" w-[60px] h-[60px] items-center flex justify-center rounded-lg bg-green-800 overflow-hidden">
            <img src={props.image} alt="Description " className="w-[50px] h-[50px] rounded-lg bg-green-800" />
            </span>
            <div>
            <p className="nunito text-sm text-gray-800 font-bold">{props.text1}</p>
            <p className="nunito text-sm text-gray-400 mt-2 font-medium">{props.text2}</p>
            </div>
         </div>
       <p className="text-sm font-semibold nunito">{props.text3}</p>
      </div>
    </div>
  );
};


{/*  <img src={props.image} alt="Description" />
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>*/}
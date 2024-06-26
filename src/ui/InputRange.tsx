import  {ChangeEvent, FC} from "react";

interface InputRangeProps {
    title:string
    name:string
    value: number
    handleClick: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputRange: FC<InputRangeProps> = ({title, handleClick, value, name}) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700">
                {title}:
                <input
                    type="number"
                    value={value}
                    name={name}
                    onChange={handleClick}
                    min="0"
                    max="255"
                    className="border border-gray-300 rounded-md p-1 mx-2"
                />
            </label>
            <input
                type="range"
                value={value}
                name={name}
                onChange={handleClick}
                min="0"
                max="255"
                className="w-full mt-2"
            />
        </div>
    )
}
export default InputRange

interface CustomButtonProps {
    label: string
}


const CustomButton: React.FC<CustomButtonProps> = ({
    label
}) => {
    return (
        <div className="w-full py-4 bg-medaide hover:bg-medaide-dark text-white rounded-xl transition cursor-pointer">
            {label}
        </div>
    )
}

export default CustomButton
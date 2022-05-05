import Image from "next/image"

const Logo = ({width, height, src}) => {
    return (
        <Image src={src} alt="sgb logo" width={width} height={height}/>
    )
}

export default Logo;
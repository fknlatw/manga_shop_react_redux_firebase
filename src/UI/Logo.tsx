interface Props {
  label: undefined | string,
  img: string,
  alt: string
}

const Logo: React.FC<Props> = ({label, img, alt}) => {
  return (
    <img 
      className={label} 
      src={img} 
      alt={alt}
    />
  )
}

export default Logo;
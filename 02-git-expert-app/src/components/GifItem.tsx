
interface GifItemProps {
    url: string;
    title: string;
    

}

export const GifItem = ({ url,title }: GifItemProps) => {
  return (
    
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}



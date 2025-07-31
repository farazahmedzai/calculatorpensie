interface RevBidAdProps {
  className?: string;
  centered?: boolean;
}

export default function RevBidAd({ className = "", centered = true }: RevBidAdProps) {
  return (
    <div className={`${centered ? "flex justify-center" : ""} ${className}`}>
      <div 
        data-placement-id="revbid-square" 
        id='revbid-square-4741' 
        style={{
          minWidth: '300px', 
          minHeight: '250px', 
          textAlign: 'center'
        }}
      ></div>
    </div>
  );
}
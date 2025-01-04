const transactions = [
        {
          name: "Paypal",
          desc: "Send money",
          amount: "+82.6",
          currency: "USD",
           image: "/public/paypal.png"
        },
        {
          name: "Wallet",
          desc: "Mac'D",
          amount: "+270.69",
          currency: "USD",
          image: "public/wallet.png",
        },
        {
          name: "Transfer",
          desc: "Refund",
          amount: "+637.91",
          currency: "USD",
          image: "/public/chart.png",
        },
        {
          name: "Credit Card",
          desc: "Ordered Food",
          amount: "-838.71",
          currency: "USD",
          image: "/public/cc-primary.png",
        },
        {
          name: "Wallet",
          desc: "Starbucks",
          amount: "+203.33",
          currency: "USD",
          image: "/public/wallet.png",
        },
        {
          name: "Mastercard",
          desc: "Ordered Food",
          amount: "-92.45",
          currency: "USD",
          image: "/public/cc-warning.png",
        },
  ];



export const TransactionCard = () =>{
    return(
        <div className="space-y-8 ">
        {transactions.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex gap-3">
              <img
                src={item.image}
                alt={`${item.name} icon`}
                className="w-10 h-10 bg-gray-100 rounded-lg"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
            <span className="font-medium  ">
              <span
                className={`${
                  item.amount.startsWith("+") ? "text-green-500" : "text-red-500 "
                }`}
              >
                {item.amount}
              </span>
              <span className="text-[#a7acb2] ml-3">{item.currency}</span>
            </span>
          </div>
        ))}
      </div>
      
    
    )
}
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": "$29.99/month",
            "features": [
                "Access to cardio area",
                "Access to weightlifting area",
                "Locker room access",
                "Basic gym equipment",
                "Limited group classes"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": "$49.99/month",
            "features": [
                "Access to cardio area",
                "Access to weightlifting area",
                "Locker room access with towel service",
                "Full range of gym equipment",
                "Unlimited group classes",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": "$79.99/month",
            "features": [
                "Access to cardio area",
                "Access to weightlifting area",
                "Luxury locker room access with towel service and personal locker",
                "State-of-the-art gym equipment",
                "Unlimited group classes including specialized programs (e.g., yoga, Pilates)",
                "Access to sauna, steam room, and swimming pool",
                "Personal training sessions (limited)"
            ]
        }
    ];
    return (
      <div className="mt-12">
        <h2 className="text-5xl">Best Prices in the Town</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {priceOptions.map((option) => (
            <PriceOption key={option.id} option={option}></PriceOption>
          ))}
        </div>
      </div>
    );
};


export default PriceOptions;
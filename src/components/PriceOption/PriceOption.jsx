import PropTypes from 'prop-types';
import { ImCheckboxChecked } from "react-icons/im";
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    // const numPrice = price.split('/')[0];
    // console.log(numPrice);
    // const intNumPrice = price.split('/')[0].split('$')[1];
    // console.log(intNumPrice);
    return (
        <div className='bg-blue-500 rounded-lg p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className="text-7xl font-extrabold">Price: {price}</span>
            </h2>
            <h3 className="text-5xl font-bold text-center">{name} Membership</h3>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, idx) => 
                <p key={idx} className='flex items-center mr-2'><ImCheckboxChecked className='text-green-500'></ImCheckboxChecked>{feature}</p> )
            }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;
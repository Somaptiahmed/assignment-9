import img from "../assets/e.webp";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center my-7">
            <h1 className="text-5xl font-bold text-blue-800 flex items-center space-x-2">
                <span>Eco</span> 
                <img src={img} alt="logo" className="w-10 h-11 inline-block" />
                <span>Adventure</span>
            </h1>
            

            <h2 className="text-3xl font-semibold text-green-600">Experiences</h2>
        </div>
    );
};

export default Header;




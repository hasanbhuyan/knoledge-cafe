import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-2 w-11/12 mx-auto mb-3'>
            <h1 className='text-4xl font-bold'>Knoledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
const Navbar = () => {

    return (
        <div className="d-flex justify-content-between bg-black align-items-center p-2">
            <h3 className="text-white">Company</h3>


            <div>
                <a className="text-decoration-none text-white m-2" href="">Home</a>
                <a className="text-decoration-none text-white m-2" href="">About</a>
                <a className="text-decoration-none text-white m-2" href="">Contact</a>
            </div>
        </div>
    )
}


export default Navbar
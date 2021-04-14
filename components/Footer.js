import tachyons from 'tachyons'


const Footer = () =>{
    return (
<div className="bg-gray-900 shadow-lg">
    <footer className="flex flex-wrap items-center justify-between p-3">
        <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
            <ul className="flex mx-auto text-white text-center">
              <li className="p-2 cursor-pointer"><a href="https://github.com/Pravata92"><i className="fab fa-github-square grow"></i></a></li>
              <li className="p-2 cursor-pointer"><a href="https://www.linkedin.com/in/juanpravata/"><i className="fab fa-linkedin grow"></i></a></li>
            </ul>
            <div className="flex mx-auto text-white text-center">
            © 2021 Juan Pravata | Fullstack Developer
            </div>
        </div>
    </footer>
</div>
    )
}

export default Footer
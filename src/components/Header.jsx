import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md  '>
        
       <div className='flex justify-between items-center max-w-6xl mx-auto'>
         <Link to = "/">
          <h1 className='text-bold text-sm sm:text-xl flex flex-wrap p-3'>
            <span className='text-slate-500'>Chauhan</span>
            <span className='text-slate-700'>Estate</span>
         </h1>
         </Link>
         <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
          <input type="search" placeholder='search' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
          <FaSearch className="bg-slate-200"/>
         </form>
         <ul className='flex gap-4 text-slate-700 '>
           <Link to="/"> <li className='hidden sm:inline hover:underline'>Home</li></Link>
            <Link to="/about"><li className='hidden sm:inline hover:underline'>About</li></Link>
           <Link to ="/sign-in"> <li className=' sm:inline hover:underline'>SignIn</li></Link>
              
        
         </ul>
       </div>
        
    </header>
  )
}

export default Header
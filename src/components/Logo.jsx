import schoolLogo from '../assets/1723987411228.jpg'

export default function Logo() {
  return (
    <div className='flex items-center space-x-2'>
        <img className='w-12' src = {schoolLogo} alt="School Logo" />
        
        <div className='font-logoFont text-accent md:text-xl font-bold lg:text-2xl'>
            <h2>Golden Castle</h2>
            <p>International School</p>
        </div>
    </div>
  )
}
